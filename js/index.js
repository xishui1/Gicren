$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
        el.find("a").on('click', { el: this.el, multiple: this.multiple }, this.itemSel)
        $(".ph-head .menu-toggle ").on('click', this.menuToggle);
        el.parents(".menu-wap").on('scroll', this.menuScroll);
        this.init();
    }
    Accordion.prototype.init = function() {
        var sessionStorageList = ["menuOpen", "menuSel", "menuScroll"];
        try {
            for (var i = 0, l = sessionStorageList.length; i < l; i++) {
            	var key=sessionStorageList[i];
                var value = sessionStorage.getItem(key);
                if (!!value) {
                    switch (key) {
                        case "menuOpen":
                            var opens =value.split(",");
                            for (var j = 0; j < opens.length; j++) {
                                this.el.find("li").eq(parseInt(opens[i])).addClass("open");
                            }

                            break;
                        case "menuSel":

                            this.el.find("li").eq(parseInt(value)).find("a").addClass("sel");
                            break;
                        case "menuScroll":
                            $(".menu-wap").scrollTop(parseFloat(value));
                            break;
                    }
                }
            }

        } catch (err) {
            console.log(err)
        }
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.left-nav-bar-sub').not($next).slideUp().parent().removeClass('open');
        };

        var openindex = [],
            $open = $el.find(".open");
        $open.each(function() {
            openindex.push($(this).index(".left-nav-bar li"))
        })
        if ($open.length == 0) sessionStorage.removeItem("menuOpen");
        else sessionStorage.setItem("menuOpen", openindex.join());
    }
    Accordion.prototype.itemSel = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $el.find(".sel").removeClass("sel");
        $this.addClass("sel");
        var index = $el.find(".sel").parent().index($el.find("li"));
        sessionStorage.setItem("menuSel", index);
    }
    Accordion.prototype.menuToggle = function(e) {
        $(".mainpage").toggleClass("menu-show-wap");
    }
    Accordion.prototype.menuScroll = function(e) {
        sessionStorage.setItem("menuScroll", $(e.target).scrollTop());
    }
    var accordion = new Accordion($('#left-nav-bar'), false);
});