!(function() {
    var htmlText = {
        cn: {
            "contact": "联络",
            "forum": "论坛"
        },
        en: {
            "contact": "contact",
            "forum": "forum"
        }

    }
    var menuslide = function(data) {
        this.el = {
            menuWap: ".menu-wap",
            menuWapContain: ".menuslide",
            menuUlWap: ".left-nav-bar",
            languageWap: "#languageToggle"
        }
        this.language = "cn";
        this.multiple = false;
        this.init(data);

    }
    menuslide.prototype = {
        init: function(data) {
            data.language && (this.language = data.language);
            data.multiple && (this.language = data.multiple);
            this.dataMenu = data.menu;
            this.drawMenu(data.menu);
            this.bindEvent();
            this.data = data.menu;
            if (data.language == "en") {
                $("body").addClass("len")
            } else {

                $("body").removeClass("len")
            }
        },
        redraw: function() {
            this.drawMenu(this.data);
            if (this.language == "en") {
                $("body").addClass("len")
            } else {

                $("body").removeClass("len")
            }
        },
        drawMenu: function(data) {
            var $con = $(this.el.menuUlWap),
                html = [];
            for (var i = 0, l = data.length; i < l; i++) {
                html.push("<li><div class=\"link\">" + this.getText(data[i]) + "<i class=\"fa fa-caret-down\"></i></div>");
                this.drawSubMenu(data[i].subMenu, html);
                html.push("</li>");
            }
            $con.html(html.join(""));

        },
        drawSubMenu: function(data, html) {
            var l = !!data ? data.length : 0;
            if (l > 0) {
                html.push("<ul class=\"left-nav-bar-sub\">")
            }
            for (var i = 0; i < l; i++) {
                html.push("<li><a href=\"javascript:void(0)\"  pdf=\"" + data[i].pdf + "\">" + this.getText(data[i]) + "</a></li>");
            }
            if (l > 0) {
                html.push("</ul>")
            }
        },
        getText: function(item) {
            return this.language != "en" ? item.text : item.entext;
        },
        bindEvent: function() {

            $(this.el.menuUlWap).on('click', " .link", { el: this.el, multiple: this.multiple }, this.menuOpenToggle);

            $(this.el.menuUlWap).on('click', "a", { el: this.el }, this.itemSel)
            $(".ph-head ").on('click', ".menu-toggle ", this.menuToggle);
            $(".ph-head   ").on('click', ".btn-search", this.phsearchShow);
            $(".ph-head").on('click', ".logo-wap-r", this.phsearchHide);
            $(this.el.languageWap).on('click', { _this: this }, this.languageToggle);
        },
        menuOpenToggle: function(e) {
            var $el = $(e.data.el.menuUlWap),
                $this = $(this),
                $next = $this.next(); 
            $next.slideToggle();
            $this.parent().toggleClass('open'); 
            if (!e.data.multiple) {
                $el.find('.left-nav-bar-sub').not($next).slideUp().parent().removeClass('open');
            }; 

        },
        itemSel: function(e) {
            var $this = $(this);
            $(e.data.el.menuUlWap).find(".sel").removeClass("sel");
            $this.addClass("sel");


        },
        menuToggle: function(e) {
            $(".mainpage").toggleClass("menu-show-wap");
        },
        phsearchShow: function(e) {
            $(".ph-head").addClass("ph-head-search");
        },
        phsearchHide: function(e) {
            $(".ph-head").removeClass("ph-head-search");
        },

        languageToggle: function(e) {
            var $el = $(e.target),
                _this = e.data._this;
            var language = $el.attr("language");
            switch (language) {
                case "en":
                    _this.language = "en";
                    $el.attr("language", "cn");

                    break;
                case "cn":
                    _this.language = "cn";
                    $el.attr("language", "en");
                    break;
            }
            _this.redraw();

        }

    }

    $(function() {
        // body...
        var menudata = {
            "multiple": false,
            language: "cn",
            "menu": [{
                    text: "主控器",
                    entext: "Main Controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "Arduino衍生控制器",
                        entext: "Arduino Derived Controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "传感器",
                    entext: "Sensor",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "距离传感器",
                        entext: "Range Sensor",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "电位器",
                        entext: "Potentiometer",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "按键",
                        entext: "Button",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "距离传感器",
                        entext: "Range Sensor",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "执行器",
                    entext: "Actuator",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "直流有刷电机控制器",
                        entext: "Brushed DC Motor Controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "舵机控制器",
                        entext: "Servo Controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "LED控制器",
                        entext: "LED Controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "动力源",
                    entext: "Power",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "锂聚合物电池",
                        entext: "Li-polymer Battery",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "无线通讯",
                    entext: "Wireless Communication",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "Wifi",
                        entext: "Wifi",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "红外",
                        entext: "Infrared",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "其余",
                    entext: "Else",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "适配器",
                        entext: "Adapter",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "散热装置",
                        entext: "Heatsink",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                }
            ]
        };
        new menuslide(menudata);


        var touch3 = function() {

            window.onscroll = function() { 
                var top = document.documentElement.scrollTop || document.body.scrollTop;

                if (top <= 0) {

                    document.body.scrollTop = 0;

                }

            }

        }
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            // touch3();
        }
    })
}())