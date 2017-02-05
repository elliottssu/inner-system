<style>
    .dispatch{
        height: 100%;
    }
    .creat-plan-title{
        color: #333;
        font-size: 14px;
    }
    .option-plan-title{
        color: #333;
        font-size: 14px;
        padding: 8px 0 8px 10px;
        border-top: 1px solid #ccc;
        background: #e4e4e4;
    }
    .saveTask,.saveJob{
        margin-top: 40px;
    }
    .job-set,.creat-job{
        height:100%;
    }
    .job-set-right{
        height: 85%;
    }
    .job-next li{
        cursor: pointer;
        font-size: 12px;
        line-height: 30px;
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
    .job-next li:hover{
        color: #fff;
        border: 1px solid #6AC1B8;
        border-right: none;
        background-color: #6AC1B8;
    }
    .job-next li:last-child{
        border-right: 1px solid #a3b8cc;
    }
    .job-set-main{
        padding: 30px 30px 10px 5px;
    }
    .job-set-main ul{
        padding:0;
    }
    .job-set-main li{
        border-bottom: 1px dashed #d8d8d8;
        margin-bottom: 9px;
        padding-bottom: 8px;
        color: #3c3c3c;
    }
    .job-set-main li .task-name{
        margin-left: 5px;
        color: #989090;
        font-size: 13px;
        padding: 5px 12px;
        border-radius: 4px;
        background: #f2f4f7;
    }
    .task-set-main{
        height: 200px;
        width: 600px;
        position: absolute;
        left: 50%;
        top:57%;
        margin-top: -100px;
        margin-left: -300px;
    }
    .task-set-main lable,.create-job-task lable{
        line-height: 35px;
        color: #555;
    }

    .plan-manage{
        background-color: #ff8975;
        display: inline-block;
        color: #ffffff;
        height: 38px;
        line-height: 16px;
        padding: 10px;
        margin-top: -10px;
        cursor: pointer;
    }
    .btn-pink,.btn-pink:visited,.btn-pink:hover,.btn-pink:active,.btn-pink:focus{
        color: #fff;
        background-color: #ff8975;
        border-color: #ff8975;
    }
    .create-job-table{
        margin-top: 25px;
    }
    .create-job-task{
        width: 600px;
        height: 250px;
        margin:0 auto;
        margin-top: 2%;
    }
    .create-job-task p{
        text-align: center;
        color: #888;
        letter-spacing: 1px;
        font-size: 14px;
        margin-bottom: 15px;
    }
    .plan-down td{
        line-height: 32px!important;
    }
    .job-operation{
        padding: 0;
        margin: 0;
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
    .job-td{
        line-height: 32px!important;
    }
    .task-set-main .search-field{
        height: 34px;
        line-height: 37px;
    }
    .task-set-main .search-choice{
        line-height: 20px!important;
    }
    .task-set-main .chosen-choices{
        border: 1px solid #ccc!important;
        border-radius: 4px;
    }
    .submit_spark{
        margin-right: 10px;
    }
    .cron-express{
        cursor: pointer;
    }
</style>

<div class="dispatch">
    <div class="plan-down">

        <div class="create-job-task">
            <form class="form-horizontal" enctype="multipart/form-data" method="POST" action="resourcemanager/registerResource" target="Jobiframe">
                <div class="form-group">
                    <lable class="col-md-2 control-lable">资源:</lable>
                    <div class="col-md-10">
                        <input type="file" name="resource" class="form-control file">
                    </div>
                </div>
                <div class="checkbox pull-left col-md-offset-2" style="padding-left: 26px;">
                    <label><input type="checkbox" id="jarUpdata" name="update">资源更新</label>
                </div>
                <button type="submit" class="btn btn-pink pull-right saveTask">上传</button>
                <div class="throbber-loader hidden" style="margin-left: 25%; margin-top: 50px;"></div>
            </form>
            <iframe id="Jobiframe" name="Jobiframe" style="display:none;"></iframe>
        </div>

        <p class="option-plan-title"><span>资源列表</span></p>
    </div>

    <div class="resource-list">
        <table class="table allresource">
            <thead>
            <tr>
                <th>资源名称</th>
                <th class="pull-right" style="margin-right: 36px">联级删除</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>

</div>



<script type="text/javascript" src="js/jquery.form.min.js"></script>



<script>
    $(function () {


        function taskVaild() {//        表单空验证
            if($('.file').val()==''){
                sweetAlert('任务填写不完整！');
                return false;
            }
        }

        function taskReset() {
            var file = $(".file") ;
            file.after(file.clone().val(""));
            file.remove();
        }



        //创建任务
        $(".create-job-task form").submit(function(){
            if(taskVaild()==false) return false;
            $(".saveTask").html('创建中...');
            $('.create-job-task .throbber-loader').removeClass('hidden');
            $(this).ajaxSubmit({
                success: function (data) {
                    $.Notification.autoHideNotify('success', 'top right', '任务创建成功!');
                    $(".saveTask").html('创建任务');
                    $('.create-job-task .throbber-loader').addClass('hidden');
                    taskReset();
                    dispatchResourePage()
                }
            });
            return false;
        });

        //获取所有资源
        post("resourcemanager/allresource","get",null,function (data) {
            $(".allresource tbody").children().remove();
            var allresource=JSON.parse(data);
            for(var i in allresource){
                if(i!="remove"){
                    $(".allresource tbody").append("<tr><td class='job-td'>"+allresource[i].resource+"</td><td><span class='btn btn-info resourceDelete pull-right' style='margin-right: 20px'>联级删除</span></td></tr>")
                }
            }

        })

        $(".resourceDelete").die().live("click",function () {
            var resource=$(this).parent().prev().text();
            var res={
                resource:resource
            }
            post("resourcemanager/rmresource","get",res,function (data) {
                $.Notification.autoHideNotify('success', 'top right', '删除成功!');
            })
            $(this).parent().parent().remove();
        })



    })

</script>