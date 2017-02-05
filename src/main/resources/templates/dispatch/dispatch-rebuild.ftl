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
        width: 80px;
        text-align: center;
    }
    .job-td{
        line-height: 32px!important;
    }
    .crashIp lable{
        margin-right: 15px;
    }

</style>
<div class="plan-manage-content">
    <div class="jobList">
        <table class="table job-all-list">
            <thead>
            <tr>
                <th>作业名称</th>
                <th>Ip</th>
                <th class="pull-right" style="margin-right: 33px" >操作</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>

<script>
    $(function () {
        post("jobmanager/crashJob","get",null,function (data) {
            var jobInfo=JSON.parse(data).data
            for(var i in jobInfo){
                if(i!="remove"){
                    var jobName=jobInfo[i].jobName;
                    var ips=jobInfo[i].ips;
                    $('.job-all-list tbody').append("<tr><td class='job-td job-detail'>"+jobName+"</td><td class='crashIp'>"+ips+"</td><td><ul class='job-operation job-info-opt pull-right'><li class='autoRepair'>自动修复</li></ul> </td></tr>");

//                    var ips=jobInfo[i].ips;
//                    var ipArr=ips.split(",");
//                    for (var i in ipArr){
//                        if(i!="remove"){
//                            $(".crashIp").append('<lable><input type="checkbox">'+ipArr[i]+'</lable>')
//                        }
//                    }
                }
            }
        })
        //自动修复
        $(".job-all-list .autoRepair").die().live('click',function () {
            var jobName=$(this).parent().parent().parent().children().eq(0).text();
            var job={
                jobName:jobName
            }
            var _this=this;
            $(this).html('<i class="fa fa-spin fa-refresh"></i>').attr("disabled","true");
            $.ajax({
                type: "POST",
                url: 'jobmanager/autoRepair',
                data: job,
                dataType: "json",
                success: function (data) {
                    setTimeout(function(){
                        if(data.code==1){
                            $(_this).parent().parent().parent().remove();
                            $.Notification.autoHideNotify('success', 'top right', '自动修复成功!');
                        }else{
                            $(_this).html("修复失败").css({'background':'#fff',color:'#555'});
                            $.Notification.autoHideNotify('error', 'top right', '自动修复失败!');
                        }
                    },1000)
                },
                error:function () {
                    $(_this).html(optName).removeAttr('disabled');
                    $.Notification.autoHideNotify('error', 'top right', '请求失败!');
                }
            })
        })
    })
</script>