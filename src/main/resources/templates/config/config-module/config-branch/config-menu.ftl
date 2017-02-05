<#--<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" >-->
<#--<link rel="stylesheet" type="text/css" href="css/jquery-ui-style.css" >-->
<style>
    .edit_left .ui-widget-content {
        border: none;
        background: none;
        margin: 25px 0 0 10px;
    }

    .edit_left .ui-widget-content ul {
        margin: 0;
        padding: 0 0 0 20px;
        font-size:12px;;
    }

    .edit_left .ui-widget-content ul li {
        line-height: 24px;
        height: 24px;
    }
    .edit_left .ui-draggable-dragging{
        line-height: 30px;
        position: absolute;
        z-index: 9999;
        top: 300px;
        left: 700px;
        height: 30px;
        padding: 0 15px 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        background: #f6f6f6;
        box-shadow: 2px 2px 4px #b4b6b0;
        list-style-type: none;

    }
    .ui-draggable-dragging.unable_drag {
        font-size: 13px;
        line-height: 20px;
        display: inline-block;
        height: 20px;
        padding-left: 27px;
        list-style-type: none;
        cursor: move;
        color: #333;
        background: url('images/config/drag_no.png') left center no-repeat;
    }
    .ui-draggable-dragging.able_drag {
        font-size: 13px;
        line-height: 20px;
        display: inline-block;
        height: 20px;
        padding-left: 27px;
        list-style-type: none;
        cursor: move;
        color: #333;
        background: url('images/config/drag_ok.png') left center no-repeat;
    }

    .step-left-content .tips {
        line-height: 30px;
        height: 30px;
        padding-left: 18px;
        color: #bf8b1a;
        background: #fffcca;
        font-size: 12px;
        margin-left: 0px;
    }
    .pre-menu span{
        cursor: move;
        color: #555;
    }
    .menu-1{
        margin-left: -13px;
    }
    .step-right-content .ui-state-light {
        border: 1px dashed #ff9283;
        background: #f2fce6 !important;
    }
    .selectmenu li{
        margin-top: 10px;
    }
    .selectmenu li span{
        display: inline-block;
        width: 120px;
        height: 30px;
        line-height: 30px;
    }
    .add-second-menu,.add-first-menu{
        border: 1px dashed #ff9283;
        font-weight: 400;
        font-size: 12px;
        color: #c1c1c1;
        text-align: center;
        cursor: pointer;
    }
    .add-second-menu{
        margin-left: 20px;
        margin-bottom: -9px;
        width: 45px!important; /*这里以后可以设置大小*/
    }
    .menutype span{
        width: 120px;
        text-align: center;
        display: inline-block;
        margin:20px -24px 10px 38px;;
    }
    .remove-menu{
        color: #ff9283;
        cursor: pointer;
        margin-left: 20px;
        font-size: 12px;
        width: 30px!important;
        height: 20px!important;
        text-align: center;
    }
    .type-menu{
        border: 1px dashed #ff9283;
        font-size: 12px;
        color: #c1c1c1;
        width: 45px!important;
        text-align: center;
        cursor: pointer;
        margin-left: 10px;
    }
    .selectmenu p{
        margin: 10px 0 0 35px;
    }
    .edit_right{
        padding-left: 100px;
    }
    #first-menu input{
        width: 100px;
        height: 25px;
        line-height: 25px;

    }
    .select-first-menu,.select-second-menu{
        border: 1px solid #d9d9d9;
        padding-left: 5px;
        height: 30px;
        width: 120px;
    }
    .add-hide{
        display: none!important;
    }
    /*.add-hide:hover{*/
        /*opacity: 1;*/
    /*}*/
    .result-menu{
        /*margin:60px 0 0 150px;*/
    }
</style>



<!-- config-menu start-->
<div class="row full-hight"style="margin: 0;overflow: hidden;">
    <div id="" class="col-md-2 step-left" style="position: static;">
        <div class="step-left-content edit_left">
            <P style="color:#555;font-size:16px;margin-bottom: 10px;">预设菜单列表</P>
            <div class="tips">拖动菜单名称到右侧。</div>
            <div class="ui-widget-content">
                <ul>
                    <li class="pre-menu"><span>首页</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>销售总览</span></li>
                </ul>

                <ul>
                    <li class="pre-menu"><span>热销滞销</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>库存预警</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>滞销预警</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>商品洞察</span></li>
                    <li class="pre-menu menu-2"><span>销售详情</span></li>
                    <li class="pre-menu menu-2"><span>产品特征</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>客户洞察</span></li>
                    <li class="pre-menu menu-2"><span>区域总览</span></li>
                    <li class="pre-menu menu-2"><span>客户排名</span></li>
                    <li class="pre-menu menu-2"><span>客户画像</span></li>
                    <li class="pre-menu menu-2"><span>回购预测</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>模拟分析</span></li>
                    <li class="pre-menu menu-2"><span>销售模拟</span></li>
                    <li class="pre-menu menu-2"><span>批量模拟</span></li>
                    <li class="pre-menu menu-2"><span>虚拟设计</span></li>
                    <li class="pre-menu menu-2"><span>智能定价</span></li>
                </ul>
                <ul>
                    <li class="pre-menu"><span>深度分析</span></li>
                    <li class="pre-menu menu-2"><span>爆款分析</span></li>
                    <li class="pre-menu menu-2"><span>滞销因子</span></li>
                    <li class="pre-menu menu-2"><span>退单因子</span></li>
                    <li class="pre-menu menu-2"><span>显著因子</span></li>
                    <li class="pre-menu menu-2"><span>流行因子</span></li>
                    <li class="pre-menu menu-2"><span>舆情分析</span></li>
                    <li class="pre-menu menu-2"><span>价格分析</span></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-10 step-right" style="position: static;">
        <div class="step-right-content"style="margin-top: 33px;margin-bottom: 0px;margin-left: 5px;margin-right: 5px;">
            <div>
                <h4 class="panel-title">设置筛选条件</h4>
                <span class="btn btn-pinku result-menu pull-right">生成</span>
            </div>
            <div class="edit_right  col-md-offset-3 ">
                <div class="menutype">
                    <span>一级菜单</span><span>二级菜单</span>
                </div>
                <ul class="selectmenu">
                    <li><input value="首页" class='select-first-menu'  /><span class="add-second-menu fa fa-plus"></span><span class="type-menu fa fa-server"></span><span class="remove-menu add-hide fa fa-close"></span></li>
                    <li><span class="add-first-menu fa fa-plus"></span></li>
                </ul>
            </div>
        </div>
    </div>



<!-- config-menu end-->
    <script type="text/javascript" src="js/config/jquery.livequery.js"></script>
    <script>
$(function() {
    $(".edit_left").find("ul").find("li:first").addClass("menu-1");
    //添加
    $(".add-first-menu").die().live('click',  function () {
        $(this).parent().before("<li><input class='select-first-menu'  /><span class='add-second-menu fa fa-plus'></span><span class='type-menu fa fa-server'></span><span class='remove-menu add-hide fa fa-close'></span></li>");
        $(this).parent().prev().prevAll().find("span:lt(2)").addClass("add-hide");
    })
    $(".add-second-menu").die().live('click', function(){
        $(this).parent().append("<p><input class='select-second-menu'  /><span class='remove-menu add-hide fa fa-close'></span></p>")
    });
    $(".type-menu").die().live('click', function(){
        $(this).parent().append("<p><input class='select-second-menu' id='name'  /><select class='select-second-menu' id='name' ><option value='-1'>选择参数</option><option value='category1'>category1</option><option value='category2'>category2</option></select><span class='remove-menu add-hide fa fa-close'></span></p>")
    });
    //删除以及鼠标滑动事件
    $(".remove-menu").die().live('click', function(){
        $(this).parent().remove()
    });
    $(".selectmenu p").die().live({
        mouseover: function(){
            $(this).find("span").removeClass("add-hide");
        },
        mouseout: function(){
            $(this).find("span").addClass("add-hide");
        },
    });
    //,.selectmenu li:not(:eq(-2))   这里可以来选择隐藏内容，但是没成功
    $(".selectmenu li:not(:last-child):not(:last-child)").die().live({
        mouseover: function(){
            $(this).children("span:lt(2)").removeClass("add-hide");
        },
        mouseout: function(){
            $(this).children("span:lt(2)").addClass("add-hide");
        },
    });
    $(".selectmenu li:not(:last-child)").die().live({
        mouseover: function(){
            $(this).children("span:last").removeClass("add-hide");
        },
        mouseout: function(){
            $(this).children("span:last").addClass("add-hide");
        },
    });

    //一级菜单
    $(".menu-1 span").draggable({
        addClasses: true,
        containment: 'widow',
        helper: 'clone',
        revert: 'invalid',
        zIndex: 1000,
        start: function(event, ui){
            menuFirstName=ui.helper.context.innerText

        },
        drag:function (event,ui) {

        }
    });
    $(".add-first-menu").droppable({
        accept: '.menu-1 span',
        activate: function( event, ui ) {
            $(this).addClass("ui-state-light");
            $(".ui-draggable-dragging").removeClass("able_drag").addClass("unable_drag");
        },
        deactivate: function( event, ui ) {
            $(this).removeClass("ui-state-light");
        },
        over: function( event, ui ) {
            $(".ui-draggable-dragging").addClass("able_drag").removeClass("unable_drag");
        },
        out: function( event, ui ) {
            $(".ui-draggable-dragging").removeClass("able_drag").addClass("unable_drag");
        },
        drop: function( event, ui ) {
            $(this).click();
            $(this).parent().prev().find("input").val(menuFirstName);
        }
    });



    //二级菜单
    $(".menu-2 span").draggable({
        addClasses: true,
        containment: 'widow',
        helper: 'clone',
        revert: 'invalid',
        zIndex: 500,
        start: function(event, ui){
            menuSecondName=ui.helper.context.innerText
        },
        drag:function (event,ui) {

        }
    });
    $(".select-second-menu").livequery(function () {
        $(this).droppable({
            accept: '.menu-2 span',
            activate: function( event, ui ) {
                $(this).addClass("ui-state-light");
                $(".ui-draggable-dragging").removeClass("able_drag").addClass("unable_drag");
            },
            deactivate: function( event, ui ) {
                $(this).removeClass("ui-state-light");
            },
            over: function( event, ui ) {
                $(".ui-draggable-dragging").addClass("able_drag").removeClass("unable_drag");
            },
            out: function( event, ui ) {
                $(".ui-draggable-dragging").removeClass("able_drag").addClass("unable_drag");
            },
            drop: function( event, ui ) {
                $(this).click();
                $(this).parent().children("input").val(menuSecondName);
            }
        });
    })




    //遍历节点，重绘生成预览
    menuConfig1=new Array();
    function productMenuConfig() {
        menuConfig1=[];
        $(".selectmenu li:not(:last-child)").each(function (index) {
            var firstMenu={};
            firstMenu.pageId="";
            firstMenu.name="";
            firstMenu.display=true;
            firstMenu.submenus="";
            firstMenu.pageId=index+1+"";
            firstMenu.name=$(this).find("input").val();
            if($(this).find("p").length < 1){
                firstMenu.submenus=null;
            }else{
                //再次循环，获取子菜单
                var submenus=[];
                $(this).find("p").each(function (index2) {
                    secondMenu={};
                    secondMenu.pageId="";
                    secondMenu.type="";
                    secondMenu.name="";
                    secondMenu.display=true;

                    var index1=index+1;
                    var index2=index2+1;
                    var indexa=index1+"-"+index2;

                    if($(this).find("select").length < 1){
                        secondMenu.pageId=indexa;
                        secondMenu.type=null;
                        secondMenu.name=$(this).find("input").val();
                    }else if($(this).find("select").length > 0){
                        secondMenu.pageId=null;
                        secondMenu.type=$(this).find("select").val();
                        secondMenu.name=$(this).find("input").val();
                    }
                    submenus.push(secondMenu);
                    firstMenu.submenus=submenus

                })
            }

            menuConfig1.push(firstMenu);
        })
        console.log(menuConfig1);

    }


    $(".result-menu").click(function () {
        productMenuConfig();
    })





});
</script>