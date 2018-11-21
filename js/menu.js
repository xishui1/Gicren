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
            if(  data.language=="en"){
                $("body").addClass("len")
            }
            else{

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
                html.push("<li><a href=\"#\"  pdf=\"" + data[i].pdf + "\">" + this.getText(data[i]) + "</a></li>");
            }
            if (l > 0) {
                html.push("</ul>")
            }
        },
        getText: function(item) {
            return this.language != "en" ? item.text : item.entext;
        },
        bindEvent: function() {

            $(this.el.menuUlWap + " .link").on('click', { el: this.el, multiple: this.multiple }, this.menuOpenToggle);

            $(this.el.menuUlWap + " a").on('click', { el: this.el }, this.itemSel)
            $(".ph-head .menu-toggle ").on('click', this.menuToggle);
            $(".ph-head .ph-head-right .btn-search ").on('click', this.phsearchShow);
            $(".ph-head  .logo-wap-r").on('click', this.phsearchHide);
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
            var $el = e.target,
                _this = e.data.el._this;
            $el.text("")


        }

    }

    $(function() {
        // body...
        var menudata = {
            "multiple": false,
            language: "en",
            "menu": [{
                    text: "主控器",
                    entext: "Master controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "Arduino衍生控制器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "传感器",
                    entext: "Brushless DC Motor Controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "惯性传感器",
                        entext: "Brushless DC Motor Controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "视觉传感器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "视觉传感器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "听觉传感器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "触觉传感器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "距离传感器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "按键",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "电位器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "执行器",
                    entext: "Master controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "旋转伺服器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "直线伺服器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "舵机控制器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "直流有刷电机控制器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "步进电机控制器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "LED恒流驱动器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "动力源",
                    entext: "Master controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "锂聚合物电池",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "镍氢电池",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "无线通讯",
                    entext: "Master controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "Wifi",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "蓝牙",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "红外",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                },
                {
                    text: "其余",
                    entext: "Master controller",
                    pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    subMenu: [{
                        text: "适配器",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }, {
                        text: "散热装置",
                        entext: "Arduino derived controller",
                        pdf: "amabat-blp2a/um_amabat-blp2a_chinese",
                    }]

                }
            ]
        };
        new menuslide(menudata);
    })
}())