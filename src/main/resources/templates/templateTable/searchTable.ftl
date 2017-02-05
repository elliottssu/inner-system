<!-- DataTables CSS -->
<style>
    .createtable{
        margin-top: 0;
    }
    .deleteTable{
        color: orange;
        cursor: pointer;
    }
    /*.creattableinfo .panel-body {*/
        /*border-bottom: 1px dotted rgba(0, 0, 0, 0.2);*/
    /*}*/
    .createtable .nocontent{
        background: url('images/config/nocontent.png') no-repeat center ;
        width: 300px;
        height: 170px;
    }
    .createtable .contentshow{
        width: 300px;
        height: 250px;
        margin-top: -150px;
        margin-left: -150px;
        position: absolute;
        z-index: 9;
        top: 60%;
        left: 55%;
    }
    .createtable .contentshow p{
        text-align: center;
        color: #888;
        letter-spacing: 1px;
        font-size: 14px;
        margin-bottom: 15px;
    }
</style>
<div class="row pull-right">
    <div class="col-md-4" style="margin-top: -30px;margin-right: 30px;"><select id="" class="form-control searchtablename selectpicker"></select></div>
</div>
<div class="container main" style="margin-top: 40px;">
    <div class="createtable">
        <div class="contentshow">
            <div class="nocontent"></div>
            <p>没有数据，请先选择模板表</p>
        </div>
        <div id="searchTable">
            <div class="wrapper">
                <div class="row creattableinfo">

                    <div class="col-sm-12">
                        <section class="panel">
                            <header class="panel-heading">
                                <span class="searchname" style="text-transform:none;font-size: 16px"></span>
                                <span class="deleteTable fa fa-close pull-right"style="font-size: 22px"></span>
                            </header>
                            <div class="panel-body" style="border-bottom: none;margin-top: 30px;">
                                <div class="adv-table editable-table">
                                    <div class="space15"></div>
                                    <table class="table table-striped table-hover table-bordered" id="searchDataTable">

                                        <thead>
                                        <tr>
                                            <th style="width: 15%;">字段名称</th>
                                            <th style="width: 15%;">数据类型</th>
                                            <th style="width: 15%;">映射类型</th>
                                            <th style="width: 15%;">是否可变</th>
                                            <th style="width: 40%;">字段说明</th>
                                            <#--<th>编辑</th>-->
                                            <#--<th>删除</th>-->
                                        </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                                <#--<button id="" class="btn btn-warning" style="margin-top: -45px;">-->
                                    <#--添加行 <i class="fa fa-plus"></i>-->
                                <#--</button>-->
                            </div>

                        </section>

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<#--<script type="text/javascript" charset="utf8" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>-->
<#--<script type="text/javascript" charset="utf8" src="http://cdn.datatables.net/1.10.7/js/jquery.dataTables.js"></script>-->


<#--<script src="js/createtable/jquery.dataTables.js" type="text/javascript"></script>-->
<#--<script src="js/createtable/DT_bootstrap.js" type="text/javascript"></script>-->


<script>
    $(function () {
        $('#searchTable').hide();
        function temTab() {
            post("getInternalTemplates", "get", null, function (data) {
                jsonTemplate = JSON.parse(data["templateJson"]);
                $(".searchtablename").append("<option value=''>请选择模板表</option>");
                $.each(jsonTemplate,function (key,value) {
                    $(".searchtablename").append('<option id="'+key+'">'+key+'</option>');
                })
                $(".searchtablename option:first").attr("disabled", "disabled");
                $('.selectpicker').selectpicker({width:'auto'});
                //select改变时，将结果放到填到表上
                $(".searchtablename").change(function () {
                    $('.contentshow').hide();
                   // $('#searchDataTable').DataTable();//table初始化
                    $('#searchDataTable tbody').children().remove();
                    $('#searchTable').show();
                    var tableName=$(".searchtablename option:selected").text();
                    $('.searchname').html('模板表名称：'+tableName);

                    //删除表
                    $('.deleteTable').click(function () {
                        sweetAlert({
                            title: "确定要删除?",
                            text: "包括该模板表及该表的所有内容",
                            type: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            closeOnConfirm: false }, function(){
                            sweetAlert({
                                title:"删除成功!",
                                text: "您可以重新新建或查看模板表",
                                //timer: 2000,
                                //showConfirmButton: false
                                type:"success"
                            });
                            $("#searchTable .panel").hide();
                            post("/deleteInternalTemplate", "post", tableName, function () {
                            },"json")
                            location.reload();
                            //createtablePage();
                        });
                    })

                    //编辑表

                    var tableList=jsonTemplate[tableName];
                    //var table=$('#searchDataTable').DataTable();
                    //table.fnClearTable();
//                    $('#searchDataTable tbody tr:first').remove();
//                    $('#searchTable .row-fluid .dataTables_length').remove();
//                    $('#searchTable .row-fluid .dataTables_filter').remove();
//                    $('#searchTable .row-fluid .dataTables_info').remove();
//                    $('#searchTable .row-fluid .dataTables_paginate').remove();

                    for (var i in tableList) {
                        if(i!='remove'){
//                            table.row.add([
//                                tableList[i]["c0"],tableList[i]["c1"],tableList[i]["c2"],tableList[i]["c3"],tableList[i]["c4"]
//                            ]).draw(false);
                            $('#searchDataTable tbody').append('<tr><td>'+tableList[i]["c0"]+'</td><td>'+tableList[i]["c1"]+'</td><td>'+tableList[i]["c2"]+'</td><td>'+tableList[i]["c3"]+'</td><td>'+tableList[i]["c4"]+'</td></tr>')
                        }
                    }
                });
            }, "json");

        }
        temTab();

    })
</script>
