<link href="css/config/config.css" rel="stylesheet" type="text/css">
<link href="css/config/dataTables.bootstrap.css" type="text/css" rel="stylesheet">
<link href="css/config/jquery.dataTables.css" type="text/css" rel="stylesheet">
<style>
    .edit-content{
        /*border: 1px solid #d9d9d9;*/
    }
    .box-widget{
        /*border-left: 1px solid #d9d9d9;*/
    }
    .widget-head{
        /*border-bottom: 1px solid #d9d9d9;*/
    }
    .widget-container{
        /*border: 1px solid #d9d9d9;*/
    }
    .top_text{
        height: 30px;
        margin-top: 50px;


    }
    .top_text ul{
        padding:0;

    }
    .top_text ul li{
        float: left;
        text-align: center;
        width:88px;
        color: #7a7676;
        font-size: 12px;
    }
    .stepMain{
        border: 1px solid #d9d9d9;
        overflow-y: hidden!important;
    }
    .step-left{
        border-right: 1px solid #d9d9d9;
        height: 100%;
        overflow: auto;
    }
    .step-left-content{
        margin-top: 33px;
        margin-left: 5px
    }
    .step-right{
        height: 100%;
        overflow: auto;
    }
    .step-right-content{
        margin: 50px;
    }
    .full-hight{
        height: 100%;
    }
    .top_datasoure{
        float: right;
        margin-top: -30px;
        margin-right: 10px;
        font-size: 14px;

    }
    .top_datasoure span{
        color: #ff9283;
    }

    /*ETL操作*/
    #createTask{
        color:orange;
        cursor: pointer;
        line-height: 18px;
    }
    .panel-default > .panel-heading{
        background-color: #fff;
        color: #555;
    }
    .createEtl{
        /*margin-left: 25px;*/
        /*margin-top: 25px;*/
    }
    .task-list{
        padding-bottom: 8px;
        padding-left: 5px;
    }

</style>
<!-- char form -->
<div class="wrapper">
    <div class="row">
        <div class="col-lg-12">
            <div class="panel"style="margin-top: -20px;">
                <div class="panel-body" style="padding:0;">
                    <div class="edit-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="box-widget">
                                    <div class="widget-head clearfix">
                                        <div id="top_tabby" class="block-tabby pull-left"></div>
                                        <div class="top_text">
                                            <#--<li>菜单配置</li>-->
                                            <ul>
                                                <li>连接数据源</li><li>数据选择</li><li>ETL操作</li><li>菜单配置</li><li>作业周期</li>
                                            </ul>
                                        </div>
                                        <div class="top_datasoure">数据源：<span id="dataSoureName"></span></div>
                                    </div>
                                    <div class="widget-container">
                                        <div class="widget-block">
                                            <div class="widget-content box-padding">
                                                <form id="stepy_form" class=" form-horizontal left-align form-well">
                                                    <fieldset title=" ">
                                                        <legend>1</legend>
                                                    <#--<#include "config-module/config-etlModel.ftl"/>-->
                                                        <div class="stepMain clearfix">
                                                        <#include "config-branch/config-connectDatasource.ftl"/>
                                                        </div>
                                                        <button id="connect" class="btn btn-warning pull-right" style="margin-top: 24px;margin-bottom: -24px;">连接</button>
                                                    </fieldset>
                                                    <fieldset title=" ">
                                                        <legend>2</legend>
                                                        <div class="stepMain clearfix">
                                                        <#include "config-branch/config-databaseSelect.ftl"/>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset title=" ">
                                                        <legend>3</legend>
                                                        <div class="stepMain clearfix">
                                                        <#include "config-branch/config-etlModel.ftl"/>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset title=" ">
                                                        <legend>4</legend>
                                                        <div class="stepMain clearfix">
                                                        <#include "config-branch/config-menu.ftl"/>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset title=" ">
                                                        <legend>5</legend>
                                                        <div class="stepMain clearfix">
                                                        <#include "config-branch/config-corn.ftl"/>
                                                        </div>
                                                    </fieldset>

                                                    <#--<button type="" class="finish btn btn-green"-->
                                                            <#--value="finish">完成-->
                                                    <#--</button>-->
                                                    <button name="btnGenerate" onClick="ret()" class="finish btn btn-warning" value="finish">提交</button>
                                                <#include "config-branch/config-columnModel.ftl"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/config/jquery.dataTables.js"></script>
<script type="text/javascript" src="js/config/dataTables.bootstrap.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/config/jquery.multi-select.js"></script>
<script type="text/javascript" src="js/config/jquery.quicksearch.js"></script>
<script type="text/javascript" src="js/config/jquery.stepy.js"></script>
<script type="text/javascript" src="js/config/config.js"></script>
<script type="text/javascript" src="js/config/multi-select-init.js"></script>
<script type="text/javascript" src="js/config/config-etl.js"></script>
<script>
    $(function () {
        $(function () {
            var stepMain=$(window).height()-250+'px';
            var stepContent=$(window).height()-400+'px';
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
        $(".step-left").niceScroll({
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
        $(".step-right").niceScroll({
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

        //这里问题未解决，未出现滚动特效
        $(".ms-list").niceScroll({
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


        $('#tableList').DataTable({
            "aLengthMenu": [[10, 15, 20], ["10", "15", "20"]],
            searching: false,
            ordering:  false,
            info:false,
            lengthChange:false,
        })
    })
    /*=====STEPY WIZARD WITH VALIDATION====*/
    $(function () {
        $('#stepy_form').stepy({
            backLabel: '返回',
            nextLabel: '下一步',
            errorImage: true,
            block: true,
            description: true,
            legend: false,
            titleClick: false,
            titleTarget: '#top_tabby',
            validate: true,
           // titleClick: true,
            transitionEffect: "slideLeft",
        });
       $("#stepy_form-next-0").hide();
        $(".top_datasoure").hide();

        $("#stepy_form-next-0").attr("disabled", "true");
        function stepyForm() {
            console.log(a);
            return $('#stepy_form').validate({
                rules: {
                    'username': 'required',
                    'password': 'required',
                    'jdbcUrl': 'required',
                    'datasourceName': 'required'
                },
                messages: {
                    'username': {
                        required: '用户名不能为空！'
                    },
                    'password': {
                        required: '密码不能为空！'
                    },
                    'jdbcUrl': {
                        required: 'jdbcUrl不能为空！'
                    },
                    'datasourceName': '数据源名称不能为空！'
                }
            });
        }

        options = new Array;
        etltable = new Array();
        $(stepyForm());
        $("#connect").click(function () {
            $("#connect").html("连接中").attr("disabled", "true");
            if (!stepyForm().form()) {
                $("#connect").html("连接").removeAttr("disabled");
            } else {
                //通过表单验证
                // 向/querySchemas发送请求数据
                username = $("#username").val();
                password = $("#password").val();
                jdbcUrl = $("#jdbcUrl").val();
                sourceName = $("#dataList").val();
                datasourceName = $('#datasourceName').val().replace(/^\s+|\s+$/g, "");
                description = $('#description').val().replace(/^\s+|\s+$/g, "");
                company=$('#company').val().replace(/^\s+|\s+$/g, "");
                var option = {
                    "config": {
                        "datasource": {
                            "import": {
                                "parameter": [
                                    {
                                        "username": username,
                                        "password": password,
                                        "jdbcUrl": jdbcUrl,
                                        "sourceName": sourceName
                                    }
                                ]
                            }
                        }
                    }
                }
                options[datasourceName] = option;




                var decodeStr = decodeURI(JSON.stringify(option));
                if (sourceName == "mysql") {
                    schema = "";
                    //当数据库类型为mysql时，直接获取tableName
                    post("queryTables", "post", decodeStr, function (data) {
                        var tablearray = data.data;
                        console.log(tablearray);
                        if (data.code != 1) {
                            alert(data.msg);
                            $("#connect").html("连接").removeAttr("disabled");
                        } else {
                            $("#connect").html("连接成功");

                            $("#stepy_form-next-0").removeAttr("disabled");
                            var t = $('#tableList').DataTable();
                            t.clear();
                            for (var i = 0; i < tablearray.length; i++) {
                                console.log(tablearray[i]);
                                t.row.add([
                                    tablearray[i],
                                    "<span id='" + tablearray[i] + "_opbtn' class='btn btn-warning btn-sm btn-width' onclick='tableSelect(this)'>操作</span>",
                                   // " "
                                ]).draw(false);
                            }
                            aloperation(tablearray);
                            $("#stepy_form-next-0").click();
                            $(".needcenter").show();
                            $(".top_datasoure").show();
                            $("#dataSoureName").html($("#datasourceName").val());
                        }
                    }, "json");
                } else {
                    //除了mysql外的数据库类型时，请求schema列表
                    post("querySchemas", "post", decodeStr, function (data) {
                        console.log(data.data);
                        var arr = data.data;
                        var schema = document.getElementById("schema");
                        if (data.code != 1) {
                            alert(data.msg);
                            $("#connect").html("连接").removeAttr("disabled");
                        } else {
                            $("#schemaDiv").removeClass("hide");
                            $("#connect").html("连接成功");
                            $("#stepy_form-next-0").removeAttr("disabled");

                            for (var i = 0; i < arr.length; i++) {
                                schema.options.add(new Option(arr[i], arr[i]));
                            }
                            $("#stepy_form-next-0").click();
                            //第一个页面将数据源名称隐藏，并传入到下一个页面
                            $(".top_datasoure").show();
                            $("#dataSoureName").html($("#datasourceName").val());
                        }
                    }, "json")
                }
            }
        });
    });
</script>
