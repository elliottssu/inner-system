<!-- config-etlModel start-->
<div class="row full-hight"style="margin: 0;overflow: hidden;">
    <div id="" class="col-md-2 step-left">
        <div class="step-left-content" id="tasklist">
            <P style="color:#555;font-size:16px;margin-bottom: 30px;">任务列表 <span id="createTask" class="pull-right fa fa-plus" title="创建新任务"></span></P>

            <div id="taskList_0">
                <div class="panel-heading task-list" role="tab" id="heading0">
                    <h4 class="panel-title" style="font-size: 14px;display: inline;">
                        <a href="#collapse_0" style="text-decoration: none" class="titlelistname">任务 </a>
                    </h4>
                    <div class="chooseTableName choose-nav" id="tableNavName_0" title="当前模板表名称"></div>
                    <span id="taskDelite" class="fa fa-close text-pingku pull-right hide" style="font-size: 14px;margin-top: -11px;cursor: pointer" title="删除任务"></span>
                    <span id="taskEdit" class="fa fa-pencil text-pingku pull-right hide" style="font-size: 14px;margin-right:12px;margin-top: -11px;cursor: pointer" title="编辑任务"></span>
                </div>
                <div class="taskstep clearfix">
                    <ul id="" class="nav nav-tabs nav-li unitlist hide">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-10  step-right">
        <div class="step-right-content"style="margin-top: 33px;margin-bottom: 0px;margin-left: 5px;margin-right: 5px;">
            <div style="margin-top:-15px;">
                <div id="taskContent" class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div id="task_0" class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">任务 </h4>
                            <div class="chooseTableName hide" id="tableName_0" title="当前模板表名称"></div>
                        </div>
                        <div id="collapse_0" class="panel-collapse">
                        <#include "../etl-module/etl-task.ftl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- config-etlModel end-->

