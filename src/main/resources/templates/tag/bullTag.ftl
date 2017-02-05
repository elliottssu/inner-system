<style>

    .card-box-left{
        padding: 20px 20px 0 12px;
        width: 170px;
        position: fixed;
        height: 100%;
        top: 10px;
        left: 177px;
        background: #fff;
        color:#555;
        border-radius: 3px;
        box-shadow: 0px 6px 7px -1px rgba(0, 0, 0, 0.15);
    }
    .left-side-collapsed .card-box-left{
        left: 59px
    }
    .card-box-right {
        padding: 20px;
        padding-bottom: 0;
        margin-left: 175px;
        margin-right: -5px;
        height: 100%;
        background: #fff;
        color:#555;
        border-radius: 3px;
        /*margin-top: -50px;*/
    }
    .tag-type{
        text-align: center;
        margin-bottom: 20px;
    }
    .tag-type img{
        height: 30px;
        width: 30px;
    }
    .tag-type span{
        font-size: 15px;
        font-weight: 600;
        margin-left: 5px;
    }
    .tag-nav ul{
        padding: 0;
        margin-bottom: 20px;
    }
    .tag-nav ul li,.tag-sort ul li{
        cursor: pointer;
    }
    .tag-nav ul li:hover,.tag-nav ul li.tag-active,.tag-sort ul li:hover,.tag-sort ul li.tag-active{
        color: orange;
    }
    .tag-1{
        margin-top: 10px;
    }
    .tag-2{
        margin-left: 22px;
        margin-top: 15px;
        margin-bottom: 5px;
    }
    .tag-3{
        margin-left: 28px;
        margin-top: -5px;
    }
    .tag-1:before{
        content:url(././images/tag/tag1.png);
        margin-right: 5px;
    }
    .tag-2:before{
        content:url(././images/tag/tag2.png);
        margin-right: 5px;
    }
    .tag-3:before{
        content:url(././images/config/tree-limb.png);
        margin-right: 5px;
    }
    .tag-option{
        padding-bottom: 10px;
    }
    .tag-option > ul li{
        cursor: pointer;
        font-size: 12px;
        line-height: 26px;
        position: relative;
        display: table-cell;
        overflow: hidden;
        box-sizing: content-box;
        max-width: 370px;
        padding: 0 15px;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #475059;
        border: 1px solid #a3b8cc;
        border-right: none;
        background-color: #fff;
    }
    .tag-option .option-active{
        color: #fff;
        border: 1px solid #5bc0de;
        border-right: none;
        background-color: #5bc0de;
    }
    .tag-option > ul li:last-child{
        border-right: 1px solid #a3b8cc;
    }
    .state-now{
        padding: 0;
        margin-right: 10px;
    }
    .card-box-show{
        height: 100%;
        margin:10px -2px 10px 190px;;
    }
    .tag-show .col-md-3{
        padding-left: 2px;
        /*padding-right: 5px;*/
        margin-bottom: 15px;
    }
    .tag-detail{
        background-color: #ffffff;
        border-radius: 3px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        width: 100%;
    }
    .tag-detail:hover {
        box-shadow:-1px 0px 20px #999 inset
    }
    .tag-detail a img{
        /*max-width: 216px;*/
        height: 260px;
    }
    .tag-detail>img{
        max-height: 22%;
        position: absolute;
        right: 0px;
        top: -7px;
    }
    .tag-detail a,.tag-detail a:visited{
        color: #555;
        text-decoration: none;
    }
    .tag-detail a:hover{
        color: #080808;
        text-decoration: none;
    }
    .tag-detail a span{
        font-size: 12px;
        display: block;
        overflow: hidden;
        word-wrap: break-word;
        white-space: normal;
        height: 65px;
        padding: 0 4%;
        margin-top: 15px;
    }
    .card-box-show .modal-body .tag-modal-left img{
        max-width: 50%;
        margin-top: 30px;
    }
    .card-box-show .modal-body .tag-modal-left>span{
        display: block;
        padding: 0 10%;
        margin-top: 15px;
    }
    .card-box-show .modal-body .tag-modal-right{
        margin-top: 20px;
    }
    .card-box-show .modal-body .tag-modal-right .radio label{
        font-size: 16px;
        line-height: 17px;
    }
    .card-box-show .modal-body .tag-modal-right .radio.radio-filter{
        display: inline-block;
    }
    .card-box-show .modal-body .tag-modal-right .filter-reason{
        margin: -40px 0px 23px 83px;
        width: 75%;
    }
    .tag-judge{
        padding:0px 6%;
        margin-bottom: 15px;
        margin-top: 5px;
    }
    .tag-check{
        padding: 15px 38px;
        border-radius: 3px;
        cursor: pointer;
    }
    .tag-close{
        padding: 15px 41px;
        border-radius: 3px;
        cursor: pointer;
    }
    .tag-sort{
        padding-left: 40px;
        margin-top: 20px;
    }
    .tag-modal-right .tag-sort label{
        padding-left:30px;
        font-weight:400
    }
    .tag-modal-right .tag-sort select{
        margin: -33px 0px 23px 84px;
        width: 45%;
    }
    .tag-sort ul{
        float:left
    }
    .page-now{
        width: 60px;
        display: inline;
        margin-right: 10px;
        height:27px;
    }
    .page-count{
        margin-left: 5px;
        margin-right: 5px;
    }
    .page-nav{
        /*margin-right: 20px;*/
    }
    .page-jump{
        height: 26px;
        line-height: 14px;
        margin-left: 10px;
    }
    .sort-location,.sort-element{
        font-size: 14px;
        margin-top: 50px;
        margin-bottom: 30px;
        margin-left: 50px;
    }
    .sort-person,.sort-time{
        margin-left: 50px;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .sort-location span,.sort-person span,.sort-time span{
        /*border: 1px solid #bbb;*/
    }
    .sort-changelocation{
        color: orange;
        font-size: 14px;
        margin-top: 25px;
        margin-left: 50px;
    }
    .sort-disabled{
        pointer-events:none
    }
    .sort-group{
        margin-left: 84px;
        margin-top: -32px;
    }
    .price{
        width: 32%;
        margin-left: 66px;
        margin-top: -26px;
        height: 28px;
    }
    .up-jump{
        position: fixed;
        bottom: 10px;
        right: 1px;

    }
    .up-jump img{
        height: 76px;
        width: 70px;

    }
    .null-result{
        width: 300px;
        height: 250px;
        margin-top: -150px;
        margin-left: -150px;
        position: absolute;
        z-index: 9;
        top: 58%;
        left: 58%;
    }
    .null-result .nocontent{
        background: url(images/config/nocontent.png) no-repeat center;
        width: 300px;
        height: 170px;
    }
    .null-result p{
        text-align: center;
        color: #888;
        letter-spacing: 1px;
        font-size: 16px;
        margin-bottom: 15px;
    }
    .loading-rusult {
        width: 300px;
        height: 250px;
        margin-top: -150px;
        margin-left: -150px;
        position: absolute;
        z-index: 9;
        top: 66%;
        left: 66%;
    }

    .tag-search{
        display: inline-block;
        float:left;
        background-color: #FFF;
        border: 1px solid #ddd;
        border-radius: 25px;
        overflow: hidden;
        height: 29px;
        width: auto;
        opacity: 0.9;
    }
    .tag-search input{
        float: left;
        width: 150px;
        height: 26px;
        line-height: 20px;
        border: none;
        background: none;
        margin-left: 5px;
        color: #3d4044;
        text-indent: 8px;
        outline:none
    }
    .brand-search{
        cursor: pointer;
        color: #6d6d6d;
        line-height: 24px;
        padding-right: 11px;
        font-size: 16px;
    }
    .tag-search-condition{
        width: 108px;
        float: left;
        margin-left: 0px;
    }
    .tag-search-condition button,.tag-platform button{
        height: 29px;
        line-height: 15px;
    }
    .sort-cancle,.sort-save{
        padding: 12px 27px;
    }
    .sort-save{
        margin-left: 20px!important;
    }
    .sort-loading{
        margin-top: 40px;
    }
    .usual-fliter{
        margin-left: 18px;
        margin-top: 8px;
        margin-bottom: 0px;
    }
    .usual-fliter li{
        float: left;
        background: #fb6d9d;
        color: #fbfbfb;
        padding: 7px 9px;
        border-radius: 6px;
        margin: 2px 8px;
        cursor: pointer;
    }
    .tag-platform{
        width: 107px;
        float: left;
    }

</style>
<#--<div class="header-section">-->
    <#--<div class="left-name-normal">-->
        <#--<i class="fa fa-tag list-alt"></i> <span>标签分类</span>-->
    <#--</div>-->
<#--</div>-->
<div class="card-box-left">
    <div class="tag-type"><img src="././images/tag/bull-logo.png"><span>公牛类目</span></div>
    <div class="tag-nav">
        <ul></ul>
    </div>
</div>
<div class="card-box-right">
    <div class="tag-option clearfix">
        <ul class="state-now pull-left">
            <li class="state-1 option-active" id="3">全部</li>
            <li class="state-2"id="0">待处理</li>
            <li class="state-3"id="2">正确</li>
            <li class="state-4"id="-1">过滤</li>
            <li class="state-5"id="1_1">类目错误</li>
            <li class="state-6"id="1_2">组合销售</li>
        </ul>
        <div class="tag-platform">
            <select class="taskAssign selectpicker" >
                <option value="1">全部任务</option>
                <option value="0" selected>我的任务</option>
            </select>
        </div>
        <div class="tag-platform">
            <select class="platform selectpicker" >
                <option value="" selected>全部平台</option>
                <option value="tmall">天猫</option>
                <option value="jd">京东</option>
            </select>
        </div>
        <div class="tag-search-condition">
            <select class="searchKey selectpicker">
                <option value="" selected >全部商品</option>
                <option value="brand">品牌</option>
                <option value="shopName">店铺名称</option>
                <option value="goodsId">商品id</option>
                <option value="goodsName">商品名称</option>
                <option value="categoryName">品类名称</option>
            </select>
        </div>
        <div class="tag-search">
            <input type="text" class="searchValue" placeholder="输入搜索内容">
            <span class="fa fa-search brand-search"></span>
        </div>
        <ul class="page-nav pull-left">
            <li class="page-prev">上一页</li>
            <li class="page-next">下一页</li>
        </ul>
        <#--<i class="fa fa-eye" style="margin: 6px 0px 0 15px;">  <span class="my-count"></span> </i>-->
        <button class="page-jump btn btn-info btn-small pull-right">跳转</button>
        <div class="page-state pull-right">
            <input type="text" class="page-now form-control"><span>/</span><span class="page-count"></span>
        </div>
        <div class="hidden userName">${currentUser.username}</div>



    </div>
</div>
<div class="card-box-show clearfix">
    <div class="tag-show clearfix"></div>
    <div id="1" class="modal" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width:55%;">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close sort-cancle" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="custom-width-modalLabel">重新分类 (<span class="goodsid"></span>)</h4>
                </div>
                <div class="modal-body clearfix">
                    <div class="col-md-6 tag-modal-left">
                        <img src="https://img12.360buyimg.com/n1/jfs/t2887/224/3587195754/320189/eea5cc20/5794a2c6N8def9eec.jpg" alt="" class="img-responsive center-block">
                        <span>德力西开关插座面板 10A错位五孔插座拉丝紫5孔墙壁电源插座 单只</span>
                        <h4 class="sort-location"></h4>
                        <h4 class="sort-person"></h4>
                        <h4 class="sort-time"></h4>
                        <div class="text-center sort-loading"><p class="fa fa-spinner fa-spin fa-2x"></p></div>
                    </div>
                    <div class="col-md-6 tag-modal-right">

                        <div class="radio radio-pink radio-single radio-filter">
                            <input type="radio" name="tags" id="filter" value="filter">
                            <label for="filter">过滤</label>
                        </div>
                        <input type="text" placeholder="输入或选择过滤原因"  class="form-control filter-reason" list="filterInfo">
                        <datalist id="filterInfo">
                            <option value="模块">
                            <option value="面板">
                            <option value="充电器">
                            <option value="LED灯">
                            <option value="赠品">
                            <option value="延长线">
                            <option value="套装">
                            <option value="其它">
                        </datalist>
                        <div class="radio radio-pink radio-single">
                            <input type="radio" name="tags" id="sort" value="sort">
                            <label for="sort"">分类</label>
                        </div>
                        <div class="checkbox sort-group">
                            <label><input type="checkbox" id="sortGroup">组合销售</label><input type="text" placeholder="价格" class="form-control price">
                        </div>
                        <div class="tag-sort clearfix"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <ul class="usual-fliter pull-left">
                        <li>其它</li>
                        <li>赠品</li>
                        <li>LED灯</li>
                        <li>延长线</li>
                        <li>面板</li>
                        <li>模块</li>
                    </ul>
                    <button type="button" class="btn btn-default sort-cancle" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-info sort-save">保存</button>
                </div>
            </div>
        </div>
    </div>
    <div class="null-result">
        <div class="nocontent"></div>
        <p>当前页面无结果</p>
    </div>
    <div class="loading-rusult hidden">
        <div class="circles-loader"></div>
    </div>
    <div class="up-jump"><a href="javascript:void(0)"><img src="././images/tag/up-jump.png" alt=""></a></div>
</div>
    <script>
$(function () {
    var tag={} ;
    post("tags/categorys","get",null,function(data){
        tag=JSON.parse(data).data.values ;//返回所有类目
        var tagsCategorys = {};
        //筛选成导航
        $.each(tag,function (data,val) {
            if(!tagsCategorys[val.categoryLevel1]){

                tagsCategorys[val.categoryLevel1] = {};
                if(val.categories){
                    tagsCategorys[val.categoryLevel1][val.name] = val.categories;
                }else{
                    tagsCategorys[val.categoryLevel1][val.name] = [];
                }

            }else{
                if(val.categories){
                    tagsCategorys[val.categoryLevel1][val.name] = val.categories;
                }else{
                    tagsCategorys[val.categoryLevel1][val.name] = [];
                }
            }
        })
        //显示导航
        for(var i in tagsCategorys){
            if(i!='remove'){
                $(".tag-nav ul").append("<li class='tag-1' id='"+i+"'>"+i+"</li>");
                $(".tag-sort").append("<ul><li class='tag-1' id='s"+i+"'>"+i+"</li>");
            }
            for(var j in tagsCategorys[i]){
                if(j!='remove'){
                    $("#"+i).after("<li class='tag-2' n1='"+i+"' id='"+j+"'>"+j+"</li>");
                    $("#s"+i).after("<li class='tag-2' c1='"+i+"' id='s"+j+"'>"+j+"</li>");
                }
                for(var k in tagsCategorys[i][j]){
                    if(k!='remove'){
                        $("#"+j).after("<li class='tag-3' n1='"+i+"' n2='"+j+"' id='"+tagsCategorys[i][j][k]+"'>"+tagsCategorys[i][j][k]+"</li>");
                        $("#s"+j).after("<li class='tag-3' c1='"+i+"' c2='"+j+"' id='s"+tagsCategorys[i][j][k]+"'>"+tagsCategorys[i][j][k]+"</li></ul>");
                    }
                }
            }
        }

        //请求数据方法
        function getState(state1,state2,pageNum) {
            $(".page-count").html("0");
            $(".tag-sort").find("li").removeClass("tag-active");
            $(".tag-show").children().remove();
            $("#main").addClass("sort-disabled");
            $(".loading-rusult").removeClass("hidden");
            $(".null-result").addClass("hidden");


            var tagName=$(".tag-nav ul").find(".tag-active").text();

            var categoryLevel1="";
            var categoryLevel2="";
            var category="";

            var tagClass=$(".tag-nav ul").find(".tag-active").attr('class').split(" ")[0].split("-")[1];//获取所选类型num
            if(tagClass==1){ //处理层级
                categoryLevel1=tagName;
                categoryLevel2="";
                category="";
            }else if(tagClass==2){
                categoryLevel1=$(".tag-nav").find(".tag-active").attr("n1");
                categoryLevel2=tagName;
                category="";
            }else if(tagClass==3){
                categoryLevel1=$(".tag-nav").find(".tag-active").attr("n1");
                categoryLevel2=$(".tag-nav").find(".tag-active").attr("n2");
                category=tagName;
            }
            var searchValue=$(".searchValue").val();
            var searchKey=$(".searchKey option:selected").val();
            var isAll=$(".taskAssign option:selected").val();
            var platform=$(".platform option:selected").val();
            var categorySort ={
                categoryLevel1:categoryLevel1,
                categoryLevel2:categoryLevel2,
                category:category,
                searchKey:searchKey,
                searchValue:searchValue,
                isAll:isAll,
                platform:platform,
                page:pageNum,
                pageSize:"100",
                tag1:state1,
                tag2:state2
            };
            $.ajax({
                type: "POST",
                url: 'tags/filter/products',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(categorySort),
                dataType: "json",
                success: function (data) {
                    $("#main").removeClass("sort-disabled");
                    $(".loading-rusult").addClass("hidden");
                    if(data.code == "-1" && data.msg == "搜索值不能为空"){
                        sweetAlert("搜索内容不能为空","全部商品搜索时可以为空");
                        $("#main").removeClass("sort-disabled");
                        return
                    }else{
                        var navCount=data.data.navCount;

                        var pageNum=data.data.num;
                        var rowCount=data.data.rowCount;
                        var tagResult = data.data.results;
                        var rowCount=data.data.rowCount;
                        for (var i in tagResult) {
                            if(i!='remove'){
                                var goodsId = tagResult[i].goodsId;
                                var img = tagResult[i].img;
                                var goodsName = tagResult[i].goodsName;
                                var url = tagResult[i].url;
                                var tagState=tagResult[i].tag1;
                                var c1=tagResult[i].categoryLevel1;
                                var c2=tagResult[i].categoryLevel2;
                                var c3=tagResult[i].categorys;
                                if(tagState!=0){
                                    var stateShow="././images/tag/sort-success.png"
                                } else{
                                    var stateShow=""
                                }
                                if (!img || img.indexOf('.jpg') == -1 ) {
                                    img = "././images/tag/tag-detail.png";
                                }

                                $(".page-count").html(navCount+" ("+rowCount+")");
                                $(".page-now").val(pageNum);
                                $(".tag-show").append('<div class="col-md-3 col-sm-6 col-xs-12"><div class="tag-detail"><a href="' + url + '" target="_blank"><img src="' + img + '"class="img-responsive center-block"></a><a href="' + url + '" target="_blank"><span>' + goodsName + '</span></a> <div class="tag-judge clearfix"><span class="pull-left fa fa-close btn-warning tag-close ' + goodsId + '" data-toggle="modal" data-target="#' + goodsId + '"></span>  <span class="pull-right fa fa-check btn-info tag-check"></span> </div><div class="hidden"><span class="each-category1">'+c1+'</span><span class="each-category2">'+c2+'</span><span class="each-category3">'+c3+'</span></div><img class="sort-succsee" src="'+stateShow+'"> </div>')
                            }

                        }
                        if(rowCount!=0){
                            $(".null-result").addClass("hidden");
                        }else{
                            $(".null-result").removeClass("hidden");
                        }
                    }

                }
            })

        }

        //导航点击事件
        $(".tag-nav ul li").die().live("click",function(){
            $(this).addClass('tag-active').siblings().removeClass('tag-active');
            var stateNum=$(".state-now.pull-left").children("li.option-active").attr("id");
            var firstState="";
            var secondState="";
            if(stateNum.indexOf("_")>-1){
                var twoState=stateNum.split("_");
                firstState=twoState[0];
                secondState=twoState[1];
            }else{
                firstState=stateNum
            }
            getState(firstState,secondState,1);


        });

        //状态帅选
        $(".state-now li").click(function () {
            if(typeof ($(".tag-nav ul").find(".tag-active").attr('class'))=="undefined"){
                $(this).addClass('option-active').siblings().removeClass('option-active');
                $(".tag-nav ul li:eq(0)").click();

            }else{
                $(this).addClass('option-active').siblings().removeClass('option-active');
                var stateNum=$(this).attr("id");
                var firstState="";
                var secondState="";
                if(stateNum.indexOf("_")>-1){
                    var twoState=stateNum.split("_");
                    firstState=twoState[0];
                    secondState=twoState[1];
                }else{
                    firstState=stateNum
                }
                getState(firstState,secondState,1);
            }
        })

        //任务帅选
        $(".taskAssign").die().live('change',function (event) {
            if(typeof ($(".tag-nav ul").find(".tag-active").attr('class'))=="undefined"){
                $(".tag-nav ul li:eq(0)").click();

            }else{
                var jumpNow = $(".page-now").val();
                var stateNum=$(".state-now.pull-left").children("li.option-active").attr("id");
                var firstState="";
                var secondState="";
                if(stateNum.indexOf("_")>-1){
                    var twoState=stateNum.split("_");
                    firstState=twoState[0];
                    secondState=twoState[1];
                }else{
                    firstState=stateNum
                }
                getState(firstState,secondState,jumpNow);

            }
            event.preventDefault();
            event.stopPropagation();
        })

        //平台帅选
        $(".platform").die().live('change',function (event) {
            if(typeof ($(".tag-nav ul").find(".tag-active").attr('class'))=="undefined"){
                $(".tag-nav ul li:eq(0)").click();

            }else{
                var jumpNow = $(".page-now").val();
                var stateNum=$(".state-now.pull-left").children("li.option-active").attr("id");
                var firstState="";
                var secondState="";
                if(stateNum.indexOf("_")>-1){
                    var twoState=stateNum.split("_");
                    firstState=twoState[0];
                    secondState=twoState[1];
                }else{
                    firstState=stateNum
                }
                getState(firstState,secondState,jumpNow);
            }
            event.preventDefault();
            event.stopPropagation();
        })

        //跳转
        $(".page-jump").click(function () {
            if(typeof ($(".tag-nav ul").find(".tag-active").attr('class'))=="undefined"){
                sweetAlert('请先筛选类目！');
                return;
            }
            var jumpNow = $(".page-now").val();
            var stateNum=$(".state-now.pull-left").children("li.option-active").attr("id");
            var firstState="";
            var secondState="";
            if(stateNum.indexOf("_")>-1){
                var twoState=stateNum.split("_");
                firstState=twoState[0];
                secondState=twoState[1];
            }else{
                firstState=stateNum
            }
            getState(firstState,secondState,jumpNow);

        })

        //页码帅选
        $(".page-nav li").click(function () {
            if(typeof ($(".tag-nav ul").find(".tag-active").attr('class'))=="undefined"){
                sweetAlert('请先筛选类目！');
                return;
            }
            var pageNum=$(".page-now").val();
            if($(this).text()=="下一页"){
                pageNum++;
            }else{
                pageNum--;
            }
            var stateNum=$(".state-now.pull-left").children("li.option-active").attr("id");
            var firstState="";
            var secondState="";
            if(stateNum.indexOf("_")>-1){
                var twoState=stateNum.split("_");
                firstState=twoState[0];
                secondState=twoState[1];
            }else{
                firstState=stateNum
            }
            getState(firstState,secondState,pageNum);
        })

        //品牌搜索
        $(".searchKey").change(function () {
            $(".searchValue").val("");
        })
        $('.searchValue').bind('keyup', function(event){
            if (event.keyCode=="13"){
                $(".brand-search").trigger('click')

            }
        });
        $(".brand-search").click(function(){
            if(typeof ($(".tag-nav ul").find(".tag-active").attr('class'))=="undefined"){
                $(".tag-nav ul li:eq(0)").click();

            }else{
                var jumpNow = $(".page-now").val();
                var stateNum=$(".state-now.pull-left").children("li.option-active").attr("id");
                var firstState="";
                var secondState="";
                if(stateNum.indexOf("_")>-1){
                    var twoState=stateNum.split("_");
                    firstState=twoState[0];
                    secondState=twoState[1];
                }else{
                    firstState=stateNum
                }
                getState(firstState,secondState,jumpNow);
            }
        })

        //正确按钮
        $(".tag-check").die().live("click",function () {
            var gooodsId = $(this).prev().attr("data-target").substr(1);
            var category1 ={
                goodsId:gooodsId,
                tag1:2
            };
            $.ajax({
                type: "PUT",
                url: 'tags/products',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(category1),
                dataType: "json",
                success: function (data) {
                }
            })
            $.Notification.autoHideNotify('success', 'top right', '标记成功 !');
            $(this).parent().parent().children("img").remove();
            $(this).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")
        })

        //错误按钮
        $(".tag-close").die().live("click",function () {
            $(".sort-loading").removeClass("hidden");
            $(".tag-modal-right").addClass("sort-disabled");
            var gooodsId = $(this).attr("data-target").substr(1);

            $.ajax({
                type: "GET",
                url: 'tags/products/'+gooodsId,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $(".sort-loading").addClass("hidden");
                    $(".tag-modal-right").removeClass("sort-disabled");
                    //目录校验
                    $("#s转换器").addClass("sort-disabled");
                    $("#s转换插头").addClass("sort-disabled");
                    $("#s接线板").addClass("sort-disabled");
                    $("#s墙开").addClass("sort-disabled");
                    $("#s插座").addClass("sort-disabled");
                    $("#s开关").addClass("sort-disabled");

                    var price=data.data.price;
                    var filterExcuse=data.data.filterExcuse;
                    var c1=data.data.categoryLevel1;
                    var c2=data.data.categoryLevel2;
                    var c3=data.data.categorys;
                    var tag1=data.data.tag1;
                    var tag2=data.data.tag2;
                    var userName=data.data.userName ? data.data.userName : '公共账号';
                    var updateTime=data.data.modTime;



                    if(tag1==-1){
                        $("#filter").attr("checked","checked");
                        $(".filter-reason").val(filterExcuse);
                    }else{
                        $("#sort").attr("checked","checked");
                        $(".filter-reason").val('');
                        if(tag1==1&&tag2==2){
                            $(".price").val(price);
                            $('#sortGroup').attr('checked',"true");
                        }else{
                            $(".price").val("");
                            $('#sortGroup').removeAttr('checked');
                        }

                    }



                    $(".sort-location").html("<span>当前位置： </span> "+c1+"/"+c2+"/"+c3);

                    if(tag1==0){
                        $(".sort-person").html("");
                        $(".sort-time").html("");
                    }else{
                        if(!updateTime) {
                            updateTime = "未知"
                        }else{
                            updateTime = new Date(updateTime).toLocaleString()
                        }
                        $(".sort-person").html("<span>上次操作人： </span> "+userName);
                        $(".sort-time").html("<span>上次操作时间： </span> "+updateTime);

                    }

                    if(c3==null){
                        $(".tag-sort").find("#s"+c2).addClass("tag-active");
                    }else if(c3.length==0){
                        $(".tag-sort").find("#s"+c2).addClass("tag-active");
                    }else {
                        for(var i in c3){
                            if(i!='remove'){
                                $(".tag-sort").find("#s"+c3[i]).addClass("tag-active");
                            }
                        }
                    }

                }
            })

        })

        //取消
        $(".sort-cancle").click(function () {
            $('#sortGroup').removeAttr('checked');
            $('.tag-modal-right input:radio[name="tags"]').removeAttr("checked");
            $(".filter-reason").val("");
            $(".price").val("");
            $(".tag-sort").find("li").removeClass("tag-active");
        })

        //保存按钮
        $(".sort-save").click(function () {
            var gooodsId = $(this).parent().parent().parent().parent().attr("id");

            //radio判断
            var radioChecked=$('.tag-modal-right input:radio[name="tags"]:checked');
            var tag1="";
            if(typeof(radioChecked.val())=="undefined"){
                sweetAlert("请点击分类类型");
                return
            }

            var tag1="";
            var tag2="";
            var price="";
            var filterExcuse="";
            if(radioChecked.val()=="filter"){
                tag1=-1;
                filterExcuse=$(".filter-reason").val();
                var category1 ={
                    goodsId:gooodsId,
                    tag1:tag1,
                    filterExcuse:filterExcuse
                };
                $.ajax({
                    type: "PUT",
                    url: 'tags/products',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(category1),
                    dataType: "json",
                    success: function (data) {
                    }
                })
            }else if(radioChecked.val()=="sort"){






                function sortCategory(state2) {
                    var cc1="";
                    var cc2="";
                    var categorys=[];

                    var tagName=$(".tag-sort").find(".tag-active").html();
                    $(".tag-sort").find(".tag-active").each(function () {
                        categorys.push($(this).html())
                    })
                    var tagClass=$(".tag-sort ul").find(".tag-active").attr('class').split(" ")[0].split("-")[1];//获取所选类型num
                   if(tagClass==2){
                        cc1=$(".tag-sort").find(".tag-active").attr("c1");
                        cc2=tagName;
                        categorys=[];
                    }else if(tagClass==3){
                       cc1=$(".tag-sort").find(".tag-active").attr("c1");
                       cc2=$(".tag-sort").find(".tag-active").attr("c2");
                        categorys=categorys;
                    }

                    var category2 ={
                        goodsId:gooodsId,
                        categoryLevel1:cc1,
                        categoryLevel2:cc2,
                        categorys:categorys,
                        tag1:1,
                        tag2:state2,
                        price:price
                    };
                    $.ajax({
                        type: "PUT",
                        url: 'tags/products',
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(category2),
                        dataType: "json",
                        success: function (data) {
                        }
                    })
                }

                if ($('#sortGroup').attr('checked')) {
                    price=$(".price").val();
                    tag2=2;
                    sortCategory(tag2)
                }else{
                    tag2=1;
                    price="";
                    sortCategory(tag2)
                }

            }










            $('#sortGroup').removeAttr('checked');
            $('.tag-modal-right input:radio[name="tags"]').removeAttr("checked");
            $(".filter-reason").val("");
            $(".price").val("");
            $(".tag-sort").find("li").removeClass("tag-active");

            $.Notification.autoHideNotify('success', 'top right', '标记成功 !');
            $(this).prev().click();
            var saveId="#"+$(this).parent().parent().parent().parent().attr("id");
            $(".tag-close").each(function () {
                if(saveId==$(this).attr("data-target")){  //获取页面中所有#id的值并且匹配模态框中的id
                    $(this).parent().parent().children("img").remove();
                    $(this).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")
                }
            })
        })

        //加载错误模态框
        $(".tag-detail").die().live("mouseover",function () {
            $(".modal").removeAttr("id");
            $(".modal .modal-body .tag-modal-left img").removeAttr("id");
            $(".modal .modal-body .tag-modal-left span").text("");
            $(".sort-2").children().remove()
            var modalId = $(this).find(".tag-judge .tag-close").attr("data-target").substr(1);
            $(".goodsid").html(modalId)
            var modalImg = $(this).find("img").attr("src");
            var modalName = $(this).find("a span").text();
            $(".modal").attr("id", modalId);
            $(".modal .modal-body .tag-modal-left img").attr("src", modalImg);
            $(".modal .modal-body .tag-modal-left span").text(modalName);

            $(".modal .sort-location").html("当前位置：");


        })
        $(".tag-detail").die().live({
            mouseover : function () {
                $(".modal").removeAttr("id");
                $(".modal .modal-body .tag-modal-left img").removeAttr("id");
                $(".modal .modal-body .tag-modal-left span").text("");
                $(".sort-2").children().remove()
                var modalId = $(this).find(".tag-judge .tag-close").attr("data-target").substr(1);
                $(".goodsid").html(modalId)
                var modalImg = $(this).find("img").attr("src");
                var modalName = $(this).find("a span").text();
                $(".modal").attr("id", modalId);
                $(".modal .modal-body .tag-modal-left img").attr("src", modalImg);
                $(".modal .modal-body .tag-modal-left span").text(modalName);

                $(".modal .sort-location").html("当前位置：");
            }
//            ,
//            mouseout : function () {
//                $(".modal").attr("id",'1');
//            }
        })


    })

    //打标签数量
    $(".fa-eye").click(function () {
        post('tags/products/count',"get",{userName:$('.userName').text()},function(data){
            $('.my-count').html(JSON.parse(data).data[0].count)
        })
    })


    //下拉框样式
    $('.selectpicker').selectpicker({width:'auto'});
//    返回顶部
    $(".up-jump").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 200);
    });

    //单选框体验优化
    $(".filter-reason").focus(function () {
        $("#filter").attr("checked","checked");
        $('#sortGroup').removeAttr('checked');
        $(".price").val("")
    })
    $(".price").focus(function () {
        $("#sort").attr("checked","checked");
        $('#sortGroup').attr('checked',"true");
        $('.filter-reason').val("");
    })
    $(".tag-sort ul li").die().live("click",function() {
        $("#sort").attr("checked","checked");
        if($(this).prevAll('#s接线板').length>0){
            $(this).addClass('tag-active');
            $("#s接线板").prevAll().removeClass("tag-active");
            $(this).parent().siblings().children().removeClass('tag-active');
        }else{
            $(this).addClass('tag-active').siblings().removeClass('tag-active').parent().siblings().children().removeClass('tag-active');
        }
    })

    //过滤快捷方式
    $(".usual-fliter li").click(function () {
        $("#filter").trigger("click");
        $(".filter-reason").val($(this).text())
    })

    //键盘事件
    $("body").keydown(function (event) {
        function keyType(type) {
            var gooodsId = $(".modal").attr("id");
            if(type == 'right') {
                var dataK = {
                    goodsId:gooodsId,
                    tag1:2
                }
                $.ajax({
                    type: "PUT",
                    url: 'tags/products',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(dataK),
                    dataType: "json",
                    success: function (data) {
                    }
                })
                $.Notification.autoHideNotify('error', 'top right', '标记正确');
                $('.'+gooodsId).parent().parent().children("img").remove();
                $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

            }else if (type == 'error') {
                $('.'+ gooodsId).click();
            }else if (type == 'filterOther') {
                var dataK = {
                    filterExcuse: "其他",
                    goodsId: gooodsId,
                    tag1: -1
                }
                $.ajax({
                    type: "PUT",
                    url: 'tags/products',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(dataK),
                    dataType: "json",
                    success: function (data) {
                    }
                })
                $.Notification.autoHideNotify('error', 'top right', '过滤为其它');
                $('.'+gooodsId).parent().parent().children("img").remove();
                $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

            }else if(type == 'filterBlock') {
                var dataK = {
                    filterExcuse: "面板",
                    goodsId: gooodsId,
                    tag1: -1
                }
                $.ajax({
                    type: "PUT",
                    url: 'tags/products',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(dataK),
                    dataType: "json",
                    success: function (data) {
                    }
                })
                $.Notification.autoHideNotify('error', 'top right', '过滤为面板');
                $('.'+gooodsId).parent().parent().children("img").remove();
                $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

            }else if(type == 'filterElement') {
                var dataK = {
                    filterExcuse: "模块",
                    goodsId: gooodsId,
                    tag1: -1
                }
                $.ajax({
                    type: "PUT",
                    url: 'tags/products',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(dataK),
                    dataType: "json",
                    success: function (data) {
                    }
                })
                $.Notification.autoHideNotify('error', 'top right', '过滤为模块');
                $('.'+gooodsId).parent().parent().children("img").remove();
                $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

            }else if(type == 'socket') {
                $.ajax({
                    type: "GET",
                    url: 'tags/products/'+gooodsId,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var c3=data.data.categorys[0];
                        if(c3 == '基础插座') {
                            dataK = {
                                categoryLevel1: "墙开",
                                categoryLevel2: "插座",
                                categorys: ["装饰插座"],
                                goodsId: gooodsId,
                                price: "",
                                tag1: 1,
                                tag2: 1
                            }
                            $.ajax({
                                type: "PUT",
                                url: 'tags/products',
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(dataK),
                                dataType: "json",
                                success: function (data) {
                                }
                            })
                            $.Notification.autoHideNotify('error', 'top right', '基础插座转装饰插座');
                            $('.'+gooodsId).parent().parent().children("img").remove();
                            $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

                        }else if(c3 == '装饰插座') {
                            dataK = {
                                categoryLevel1: "墙开",
                                categoryLevel2: "插座",
                                categorys: ["基础插座"],
                                goodsId: gooodsId,
                                price: "",
                                tag1: 1,
                                tag2: 1
                            }
                            $.ajax({
                                type: "PUT",
                                url: 'tags/products',
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(dataK),
                                dataType: "json",
                                success: function (data) {
                                }
                            })
                            $.Notification.autoHideNotify('error', 'top right', '装饰插座转基础插座');
                            $('.'+gooodsId).parent().parent().children("img").remove();
                            $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

                        }else{
                            event.preventDefault();
                            event.stopPropagation();
                        }

                    }
                })


            }else if(type == 'switch') {
                $.ajax({
                    type: "GET",
                    url: 'tags/products/'+gooodsId,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var c3=data.data.categorys[0];
                        if(c3 == '基础开关') {
                            dataK = {
                                categoryLevel1: "墙开",
                                categoryLevel2: "开关",
                                categorys: ["装饰开关"],
                                goodsId: gooodsId,
                                price: "",
                                tag1: 1,
                                tag2: 1
                            }
                            $.Notification.autoHideNotify('error', 'top right', '基础开关转装饰开关');
                            $('.'+gooodsId).parent().parent().children("img").remove();
                            $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

                        }else if(c3 == '装饰开关') {
                            dataK = {
                                categoryLevel1: "墙开",
                                categoryLevel2: "开关",
                                categorys: ["基础开关"],
                                goodsId: gooodsId,
                                price: "",
                                tag1: 1,
                                tag2: 1
                            }
                            $.Notification.autoHideNotify('error', 'top right', '装饰开关转基础开关');
                            $('.'+gooodsId).parent().parent().children("img").remove();
                            $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

                        }else{
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        $.ajax({
                            type: "PUT",
                            url: 'tags/products',
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify(dataK),
                            dataType: "json",
                            success: function (data) {
                            }
                        })
                    }
                })
            }else if (type == 'switchTosocket') {
                $.ajax({
                    type: "GET",
                    url: 'tags/products/'+gooodsId,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var c3=data.data.categorys[0];
                        if(c3 == '装饰开关') {
                            dataK = {
                                categoryLevel1: "墙开",
                                categoryLevel2: "插座",
                                categorys: ["装饰插座"],
                                goodsId: gooodsId,
                                price: "",
                                tag1: 1,
                                tag2: 1
                            }
                            $.Notification.autoHideNotify('error', 'top right', '装饰开关转装饰插座');
                            $('.'+gooodsId).parent().parent().children("img").remove();
                            $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

                        }else{
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        $.ajax({
                            type: "PUT",
                            url: 'tags/products',
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify(dataK),
                            dataType: "json",
                            success: function (data) {
                            }
                        })
                    }
                })
            }else if (type == 'switchToBasesocket') {
                $.ajax({
                    type: "GET",
                    url: 'tags/products/'+gooodsId,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var c3=data.data.categorys[0];
                        if(c3 == '装饰开关') {
                            dataK = {
                                categoryLevel1: "墙开",
                                categoryLevel2: "插座",
                                categorys: ["基础插座"],
                                goodsId: gooodsId,
                                price: "",
                                tag1: 1,
                                tag2: 1
                            }
                            $.Notification.autoHideNotify('error', 'top right', '装饰开关转基础插座');
                            $('.'+gooodsId).parent().parent().children("img").remove();
                            $($('.'+gooodsId)).parent().parent().append("<img class='sort-succsee' src='././images/tag/sort-success.png'></img>")

                        }else{
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        $.ajax({
                            type: "PUT",
                            url: 'tags/products',
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify(dataK),
                            dataType: "json",
                            success: function (data) {
                            }
                        })
                    }
                })
            }



        }







        var num = $(".tag-show").children().length;

        if (num > 0 && $(".modal").attr("id")!="1") {

            switch(event.which) {
                case 82 :   //R:正确
                    keyType('right')
                    break;
                case 97 :
                case 49 :  //1：过滤为其他
                    keyType('filterOther')
                    break;
                case 98 :
                case 50 :  //2：过滤为面板
                    keyType('filterBlock')
                    break;
                case 99 :
                case 51 :  //3：过滤为模块
                    keyType('filterElement')
                    break;
                case 81 :  //q：插座装饰与基础
                    keyType('socket')
                    break;
                case 87 :  //w：开关装饰与基础
                    keyType('switch')
                    break;
                case 80 :  //p: 所有正确
                    $(".pull-right.tag-check").click()
                    break;
                case 69 :  //e: 点击错误
                    keyType('error')
                    break;
                case 84 :  //t: 装饰开关转装饰插座
                    keyType('switchTosocket')
                    break;
                case 70 :  //f: 装饰开关转基础插座
                    keyType('switchToBasesocket')
                    break;
            }
        }


    })

})
</script>