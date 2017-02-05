<style>
    .plan-manage-view{
        margin-bottom: 40px;
    }
    .creat-new-plan{
        background-color: #ff8975;
        display: inline-block;
        color: #ffffff;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        margin-top: 20px;
        cursor: pointer;
        font-size: 13px;
    }
    .plan-manage-opt{
        margin-top: 20px;
        margin-left: -40px;
    }
    .plan-manage-opt .plan-active{
        color: #fff;
        border: 1px solid #6AC1B8;
        border-right: none;
        background-color: #6AC1B8;
    }
    .table-pointer tbody tr{
        /*cursor: pointer;*/
    }
    .submit-job,.now-process{
        margin-right: 20px;
    }
    .jobList .bootstrap-tagsinput{
        min-width: 50%;
    }
    .cron-express{
        color: #5bc0de;
        margin-left: 10px;
    }
</style>
<div class="plan-manage-view clearfix">
    <ul class="job-next pull-left plan-manage-opt">
        <li class="taskShow plan-active">作业列表</li>
        <li>作业管理</li>
        <li>作业周期</li>
    </ul>
    <span class="pull-right creat-new-plan">新建作业</span>
</div>
<div class="plan-manage-content">
    <div class="jobList">
        <table class="table table-pointer">
            <thead>
            <tr>
                <th>作业名称</th>
                <th>corn表达式 <a href="#" data-toggle="modal" data-target="#cronchange" title="编辑"><i class="fa fa-paste text-info cron-express"></i></a></span></th>
                <th class="text-center">操作</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>
<div class="modal fade" id="cronchange" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">cron表达式生成器</h4>
            </div>
            <div class="modal-body">
              <#include "./plan-cron.ftl"/>
            </div>
        </div>
    </div>
</div>

<script>

    $(function () {
        $(".creat-new-plan").click(function () {
            post("/config3","get",null,function(data){
                $(".dataSoureType").html(data);
            })
        })

        //默认请求作业列表
        post("/jobs","get",null,function(data){
            var jobList=JSON.parse(data).data;
            for(var job in jobList){
                if(job!='remove'){
                    var jobName=jobList[job].jobName;
                    $(".jobList tbody").append("<tr id='"+jobName+"'><td>"+jobName+"</td><td><select multiple></select></td><td class='text-center'><span class='btn btn-sm btn-info submit-job'>提交作业</span><span class='btn btn-sm btn-warning  now-process'>即时调度</span><span class='btn btn-sm btn-success detail-job'>作业状态</span></td></tr>")
                    var cron=jobList[job].cron;
                    var cronArr=new Array();
                    if(cron.indexOf('&')>0){  //判断原始是否含有&
                        cronArr=cron.split('&');
                        for(var c in cronArr){
                            if(c!='remove'){
                                $(".jobList tbody").children("#"+jobName).children('select').append("<option value='"+cronArr[c]+"'>"+cronArr[c]+"</option>")
                            }
                        }
                    }else{
                        $(".jobList tbody").children("#"+jobName).find('select').append("<option value='"+cron+"'>"+cron+"</option>")
                    }
                    $('.jobList select').tagsinput();
                }
            }
        })
    })
</script>