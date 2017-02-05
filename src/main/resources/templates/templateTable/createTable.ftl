<#--<link rel="stylesheet" href="css/createtable/mytable.css">-->
<style>
    .createtable{
        margin-top: 0px;
    }

    .tablename{
        margin-bottom: 40px;
        margin-left: 30%;
    }
    .tableform{
        /*margin-left: 29%;*/
    }
    #createLabel{
        height: 200px;
        width: 500px;
        position: absolute;
        margin-top: -100px;
        margin-left: -150px;
        top:54%;
        left: 53%;
    }
</style>

<#--<link rel="stylesheet" href="css/createtable/mytable.css">-->
<h3>模板表名称</h3>
<div class="container main">
    <div class="createtable">

        <div id="container" style="margin-left:30px;margin-bottom: -5px;"></div>
        <div id="createLabel" class="row">
            <div class="col-md-8 tableform">
                <input id="tableModuleName" class="form-control" placeholder="请输入创建模板表的名字"></input>
            </div>
            <div class="col-md-2">
                <span id="createTableModule" class="btn btn-warning">创建</span>
            </div>
            <div class="ball-loader hide" style="margin-left: 30%"></div>

        </div>
        <span id="saveTables" class="btn btn-warning hide pull-right" style="margin-top: -28px;margin-right: 31px;">保存</span>
        <#--<span id="continueCreate" class="btn btn-warning hide pull-right" style="margin-right:30px;">继续创建</span>-->
    </div>
</div>
<script src="js/createtable/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
<script src="js/createtable/jquery.dataTables.js" type="text/javascript"></script>
<script src="js/createtable/DT_bootstrap.js" type="text/javascript"></script>
<script src="js/createtable/editable-table.js" type="text/javascript"></script>
<script src="js/createtable/createtable.js" type="text/javascript"></script>
