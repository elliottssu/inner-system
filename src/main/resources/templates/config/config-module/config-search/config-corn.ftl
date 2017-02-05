<div class="cronvalue">
    <div class="cronfix">
        <span>cron表达式：</span><span class="cronExpression"></span>
    </div>
    <div class="crontime">
        <span>触发时间：</span><span class="tragetime"></span>
    </div>
    <div class="crondetailtime">
        <div class="detailtime"><span>具体周期：</span><a href="#" data-toggle="modal" data-target="#cronchange" title="编辑"><i class="fa fa-pencil"></i></a></div>
        <div><span>时：</span><span id="hour"></span></div>
        <div class="day1"><span>天：</span><span id="day"></span></div>
        <div class="week1"><span>周：</span><span id="week"></span></div>
        <div><span>月：</span><span id="month"></span></div>
    </div>
    <div class="modal fade" id="cronchange" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">
                        作业周期
                    </h4>
                </div>
                <div class="modal-body">
                <#--<#include "../../config/config-module/config-branch/config-corn.ftl"/>-->
                </div>
            </div>
        </div>
</div>
