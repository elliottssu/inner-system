<style>
    .etltemplatetable{
        font-size: 14px;
        color: #555;
        margin-left: 15px;
        margin-top: 35px;
    }
    .etltemplatetable p{
        padding-bottom: 9px;
    }
    .templatetable,.templatedetail,unitscount{
        color: #7a7676;
    }
    .etltemplatetable li{
        display: inline;
        padding: 2px;
        margin-right: 5px;
        margin-bottom: 0px;
        background-color: orange;
        border-radius: 8px;
        cursor: pointer;
        color: #555555;
    }
    .detailunits{
        color: #555;
        background-color: orange;
        border-radius:6px;
        padding: 2px 2px 2px 3px;
        height: 25px;
        display: inline;
        cursor: pointer;

    }
    .detailunits:after{
        content: '+';
        color: #fff;
        font-size: 18px;
        padding-left: 2px;
    }
    .unlitsdetailinfo{
        padding-bottom: 20px;
    }
    .unitsstepinfo p{
        white-space:normal;
        word-break:break-all;
        overflow:hidden;
    }
</style>
<div class="etlsetting">
    <div class="etltemplate">
        <span class="temlatechoice"></span>
        <ul></ul>
    </div>
    <div class="etltemplatetable">
        <p><span>模板表：</span><span class="templatetable"></span></p>
        <p><span>描述：</span><span class="templatedetail"></span></p>
        <p><span>单元数量：</span><span class="unitscount"></span></p>
        <p><span>具体单元：</span> <a href="#" data-toggle="modal" data-target="#etlchange" title="编辑"><i class="fa fa-pencil"></i></a></p>
        <div class="unlitsdetailinfo text-center">
            <span class="detailunits"></span>
            <ul></ul>
        </div>
        <p><span>单元类型：</span><span class="unittype"></span></p>
        <p><span>任务描述：</span><span class="unitdesperate"></span></p>
        <p><span>操作表名：</span><span class="unitname"></span></p>
        <p><span>操作步骤：</span></p>
        <div class="unitsstepinfo"></div>

    </div>
</div>

<div class="modal fade" id="etlchange" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">
                    ETL操作
                </h4>
            </div>
            <div class="modal-body">
            <#--<#include "../../config/config-module/config-branch/config-etlModel.ftl"/>-->
            </div>
        </div>
    </div>
</div>