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
    .table-pointer{
        cursor: pointer;
    }
    .disable-job{
        pointer-events: none;
    }
    .job-operation{
        margin-bottom: 0;
    }
    .job-operation li {
        display: inline-block;
        margin-right: 5px;
        background: #ff8975;
        color: #fbfbfb;
        border-radius: 5px;
        padding: 6px 8px;
        cursor: pointer;
    }
    .job-operation li:hover {
        background: #ff6b52;
    }
    .job-info-opt li{
        width: 45px;
        text-align: center;
    }
    .job-td{
        line-height: 32px!important;
    }
</style>
<div class="plan-manage-content">
    <div class="jobList">
        <table class="table table-pointer table-hover job-all-list">
            <thead>
            <tr>
                <th>作业名称</th>
                <th>Cron表达式</th>
                <th>Ip</th>
                <th class="pull-right" style="margin-right: 135px" >操作</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
        <div class="modal fade" id="" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true">
            <div class="modal-dialog" style="width:55%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close sort-cancle" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title job-info-name" id="custom-width-modalLabel">作业详情 <span></span></h4>
                    </div>
                    <div class="modal-body clearfix">
                        <table class="table job-detail-info clearfix">
                            <thead>
                            <tr>
                                <th>最后开始时间</th>
                                <th>最后完成时间</th>
                                <th>当前状态</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(function () {
        //作业执行信息（所有）
        post("jobmanager/jobsinfo","get",null,function (data) {
            var jobInfo=JSON.parse(data).data;
            for(var i in jobInfo){
                if(i!="remove"){
                    var jobName=jobInfo[i].jobName;
                    var cron=jobInfo[i].cron;
                    var ips=jobInfo[i].ips;
                    $('.job-all-list tbody').append("<tr data-toggle='modal' data-target='#" + jobName + "'><td class='job-td job-detail'>"+jobName+"</td><td class='job-td'>"+cron+"</td><td class='job-td'>"+ips+"</td><td><ul class='job-operation job-info-opt pull-right'><li class='pause'>暂停</li><li class='resume'>恢复</li><li class='shutdown'>关闭</li><li class='remove'>删除</li><li class='disable'>禁用</li><li class='enable'>可用</li></ul> </td></tr>");
                }
            }
        })

        //查看详情
        $(".plan-manage-content tbody tr").live("click",function () {
            var jobs=$(this).children().first().text();
            $(".job-info-name span").text(" ( "+jobs+" ) ");
            var jobInfo={
                jobName:jobs
            };
            post("jobmanager/executioninfo","get",jobInfo,function (data) {
                $(".job-detail-info tbody").children().remove();
                var jobDetail=JSON.parse(data);
                for(var i in jobDetail){
                    if(i!="remove"){
                        var status='';
                        var statu=jobDetail[i].status;
                        var lastBeginTime=new Date(jobDetail[i].lastBeginTime).toLocaleString();
                        var lastCompleteTime=new Date(jobDetail[i].lastCompleteTime).toLocaleString();
                        if(statu="COMPLETED"){
                            status="已完成"
                        }else{
                            status=statu;
                        }
                        $(".job-detail-info tbody").append("<tr><td>"+lastBeginTime+"</td><td>"+lastCompleteTime+"</td><td>"+status+"</td></tr>")
                    }
                }
            })
        })
        $(".plan-manage-content tbody tr").live("mouseover",function () {
            $(".modal").removeAttr("id");
            var jobs=$(this).children().first().text();
            $(".jobList .modal").attr("id", jobs);
        })
        //作业操作
        $(".job-all-list").delegate("li","click",function (event) {
            var jobName=$(this).parent().parent().parent().children().eq(0).text();
            var operation=$(this).attr("class");
            var optName=$(this).text();
            var _this=this;
            var job={
                jobName:jobName,
                operation:operation,
                ip:"192.168.1.181"
            }
            $(this).html('<i class="fa fa-spin fa-refresh"></i>').attr("disabled","true");
            $.ajax({
                type: "POST",
                url: 'jobmanager/etljob',
                data: job,
                dataType: "json",
                success: function () {
                    setTimeout(function(){
                        if(operation=="remove"){
                            $(_this).parent().parent().parent().remove()
                        }
                        $(_this).text(optName).removeAttr("disabled");
                        $.Notification.autoHideNotify('success', 'top right', '状态操作成功!');
                    },1000)
                 },
                error:function () {
                    $(_this).html(optName).removeAttr('disabled');
                    $.Notification.autoHideNotify('error', 'top right', '状态操作失败!');
                }
           })
            event.stopPropagation();
        })
    })
</script>