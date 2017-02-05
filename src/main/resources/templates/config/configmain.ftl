<style>
    .tabs-top .indicator {
        top: 0;
    }
    .tabs .indicator {
        background-color: #F9CD48;
        bottom: 0;
        height: 2px;
        position: absolute;
        will-change: left, right;
    }
    .tabs-first {
        width: 20%!important;
        margin: 0 auto;
    }
    /* Tabs */
    .tabs {
        background-color: #ffffff;
        margin: 0 auto;
        padding: 0px;
        position: relative;
        white-space: nowrap;
        border:none;
        margin-top: -40px;
        margin-left: 34%;
    }
    .left-side-collapsed .tabs{
        margin-left: 39%;
    }
    .tabs li.tab {
        background-color: #ffffff;
        display: block;
        float: left;
        margin: 0;
        text-align: center;
    }
    .tabs li.tab a {
        -moz-transition: color 0.28s ease;
        -ms-transition: color 0.28s ease;
        -o-transition: color 0.28s ease;
        -webkit-transition: color 0.28s ease;
        display: block;
        height: 100%;
        text-decoration: none;
        transition: color 0.28s ease;
        width: 100%;
    }
    .tabs .indicator {
        background-color: orange;
        bottom: 0;
        height: 2px;
        position: absolute;
        will-change: left, right;
    }
    .tabs-top .indicator {
        top: 0;
    }
    .tabs-first{
        width:20%!important;
    }
    .nav.nav-tabs > li.active > a {
        background-color: #ffffff;
        border: 0;
    }
    .nav.nav-tabs > li > a {
        background-color: #fff;
        margin-right: 5px;
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        border-radius: 0;
        border: 1px solid #eee;
        line-height: 25px;
        border-bottom: none;

    }
    .nav.nav-tabs>li.active>a {
        border: 0;
        background-color: #fff;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #fff;
        border-top: 1px solid #fff;
    }
</style>
<div class="header-section">
    <div class="left-name">
        <i class="fa fa-database"></i> <span>数据源接入</span>
    </div>
    <ul class="nav nav-tabs tabs tabs-top tabs-first">
        <li class="active tab">
            <a href="#create" data-toggle="tab" aria-expanded="true">
                <span class="visible-xs"><i class="fa fa-plus-square"></i>&nbsp;创建</span>
                <span class="hidden-xs">数据源接入</span>
            </a>
        </li>
        <li class="tab">
            <a href="#search" data-toggle="tab" aria-expanded="false">
                <span class="visible-xs"><i class="fa  fa-reply-all"></i>&nbsp;查看</span>
                <span class="hidden-xs">查看数据源</span>
            </a>
        </li>
    </ul>

</div>
<div class="card-box card-box-full">



    <div class="tab-content">
        <div class="tab-pane active" id="create">
        <#include "config-module/config-type.ftl"/>
        </div>
        <div class="tab-pane" id="search">
        <#include "config-module/accounts.ftl"/>
        </div>
    </div>
</div>
<script src="js/waves.js" type="text/javascript"></script>
<script>
    $(function () {
        var fullheight=$(window).height()-72+'px';
        var stepMain=$(window).height()-250+'px';
        var stepContent=$(window).height()-400+'px';
        $(".card-box-full").css('min-height',fullheight);
        $(".stepMain").css('height',stepMain);

        //滚动条
        $(".stepMain").niceScroll({
            styler:"fb",
            cursorcolor:"rgb(197, 197, 197)",
            cursorwidth: '9',
            cursorborderradius: '5px',
            background: '#fff',
            spacebarenabled:false,
            cursorborder: '2px solid #fff',
            zindex: '100',
            autohidemode:true,
        });

    })



//    autodivheight();
//    function autodivheight(){ //函数：获取尺寸
//        //获取浏览器窗口高度
//        var winHeight=0;
//        if (window.innerHeight)
//            winHeight = window.innerHeight;
//        else if ((document.body) && (document.body.clientHeight))
//            winHeight = document.body.clientHeight;
//        //通过深入Document内部对body进行检测，获取浏览器窗口高度
//        if (document.documentElement && document.documentElement.clientHeight)
//            winHeight = document.documentElement.clientHeight;
//        //DIV高度为浏览器窗口的高度
//        //document.getElementById("test").style.height= winHeight +"px";
//        //DIV高度为浏览器窗口高度的一半
//        document.getElementById(".card-box-full").style.height= winHeight-70 +"px";
//    }
//    window.onresize=autodivheight; //浏览器窗口发生变化时同时变化DIV高度
</script>