<style>
    .plan-up{
        /*min-height: 350px;*/
    }
    .plan-down{
        /*min-height: 350px;*/
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
    .job-name{
        height: 200px;
        width: 500px;
        position: absolute;
        margin-top: -100px;
        margin-left: -150px;
        top: 54%;
        left: 45%;
    }
    .job-set,.creat-job{
        height:100%;
    }
    .job-set-left{
        height: 85%;
        border-right:2px solid #dcdcdc;
    }
    .job-set-right{
        height: 85%;
    }
    .job-img{
        width: 40px;
        height: 40px;
        display: inline-block;
        float: left;

    }
    .job-img-j{
        background: url(images/config/job.png) center no-repeat;
        background-size: 75% 75%;

    }
    .job-img-t{
        background: url(images/config/task.png) center no-repeat;
        background-size: 78% 75%;

    }
    .job-set-name{
         margin-left: -15px;
         margin-top: 15px;
     }
    .task-set-name{
        margin-top: 15px;
    }
    .job-img-name{
        font-size: 12px;
        padding: 2px 6px 2px 6px;
        margin-top: 8px;
        background: #eee;
        float:left;
        border-radius: 4px;
        background: #f2f4f7;
    }
    .job-next{
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
        left: 48%;
        top:57%;
        margin-top: -100px;
        margin-left: -300px;
    }
    .task-set-main lable{
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
    .btn-pink,.btn-pink:hover{
        color: #fff;
        background-color: #ff8975;
        border-color: #ff8975;
    }

</style>
<div class="wrapper">
    <div class="row">
        <div class="col-lg-12">
            <div class="panel"style="margin-top: -20px;">
                <div class="panel-body" style="padding:0;">
                    <div class="plan-up">
                        <p class="creat-plan-title">创建执行计划</p>
                        <div class="creat-job">
                            <div class="job-name row">
                                <div class="col-md-8">
                                    <input class="form-control" placeholder="请输入作业名称"></input>
                                </div>
                                <div class="col-md-2">
                                    <span class="creatJob btn btn-pink">创建</span>
                                </div>
                                <div class="throbber-loader hide" style="margin-left: 33%; margin-top: 50px;"></div>
                            </div>
                            <div class="job-manage"></div>
                            <div class="job-set hide">
                                <div class="job-set-left col-md-2">
                                    <div class="job-set-name clearfix" title="作业名称">
                                        <span class="job-img job-img-j"></span>
                                        <p class="job-img-name"></p>
                                    </div>
                                    <div class="job-set-main clearfix">
                                        <ul>
                                            <li>Task<span class="task-num">1</span> <span class="task-name hidden"></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-set-right col-md-10">
                                    <div class="task-set-name clearfix">
                                        <span class="job-img job-img-t"></span>
                                        <p class="job-img-name" title="任务名称">Task<span class="task-num">1</span></p>
                                        <ul class="job-next pull-right">
                                            <li class="creatJobTask">新建任务</li>
                                            <li class="submitJob">保存作业</li>
                                        </ul>
                                    </div>
                                    <div class="task-set-main clearfix">
                                        <form class="form-horizontal">
                                            <div class="form-group">
                                                <lable class="col-md-2 control-lable">Task:</lable>
                                                <div class="col-md-10">
                                                    <select class="form-control taskName">
                                                        <option value="-1" disabled selected hidden>选择任务名称</option>
                                                        <option value="0">因蔓任务1</option>
                                                        <option value="1">因蔓任务2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <lable class="col-md-2 control-lable">UserId:</lable>
                                                <div class="col-md-10">
                                                    <select class="form-control userId">
                                                        <option value="-1" disabled selected hidden>选择公司名称</option>
                                                        <option value="0">公牛</option>
                                                        <option value="1">因蔓</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <lable class="col-md-2 control-lable">Parameter:</lable>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control parameter" placeholder="请输入参数">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <lable class="col-md-2 control-lable">Cmd</lable>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control cmd" placeholder="请输入指令">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="plan-down">
                        <p class="option-plan-title"><span>执行计划调度</span><span class="pull-right plan-manage">执行计划管理</span> </p>
                        <div class="contentshow" style="top: 130%; left: 48%;">
                            <div class="nocontent"></div>
                            <p>没有数据，请先创建并保存作业</p>
                        </div>
                        <table class="table hide">
                            <thead>
                                <tr>
                                    <th>作业名称</th>
                                    <th>任务依赖关系</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<#--<script type="text/javascript" src="js/config/chosen.jquery.js"></script>-->
<#--$('.taskName').chosen();//chosen插件-->
<script>
    $(function () {
        var planUp=$(window).height()*0.5+'px';
        $('.plan-up').css('height',planUp);


        function taskVaild() {//        表单空验证
            if($('.taskName option:selected').val()=='-1' || $('.cmd').val()==''){
                sweetAlert('任务填写不完整！');
                return false;
            }
        }
        function taskReset() {
            $('.taskName').find("option[value='-1']").attr('selected', 'true');
            $('.userId').find("option[value='-1']").attr('selected', 'true');
            $('.parameter').val('');
            $('.cmd').val('');
        }
        function jobReset() {
            taskReset();
            $('.job-set').addClass('hide');
            $('.job-name').removeClass('hide');
            $('.job-set-main ul li:eq(0)').children('.task-name').addClass('hidden');
            $('.job-set-main ul li:gt(0)').remove();
            taskNum=1;
            $('.task-set-name .task-num').html(taskNum);
        }

        //定义json数组

        var jobAll=new Array();
        var taskarr=new Array();//声明任务数组

        function taskValue() {
            var task=$('.taskName option:selected').text();
            var userid=$('.userId option:selected').text();
            var parameters=$('.parameter').val();
            var commond=$('.cmd').val();
            var tasksobj={}; //声明任务对象
            tasksobj.task=task;
            tasksobj.cmd=commond;
            tasksobj.userid=userid;
            tasksobj.parameters=parameters;
            taskarr.push(tasksobj);
            return taskarr;

        }

        //创建作业
        $('.creatJob').click(function () {
            taskarr=[];//task数组清空
            jobName=$('.job-name input').val();
            if(jobName==''){
                sweetAlert('作业名称不能为空！');
                return;
            }
            $(this).html('创建中...').attr('disabled','true');
            $('.job-name .throbber-loader').removeClass('hide');
            $('.job-set-name p').html(jobName);
            setTimeout(function () {
                $('.creatJob').html('创建').removeAttr('disabled');
                $('.job-name').addClass('hide');
                $('.job-set').removeClass('hide');
                $('.job-name .throbber-loader').addClass('hide');
                $('.job-name input').val('');
            },1000)
        });
        //任务select，将值同步到左侧任务列表
        $('.taskName').change(function () {
            var taskName=$(this).find('option:selected').text();
            $('.job-set-main ul li:last .task-name').removeClass('hidden').html(taskName);
        });
        //新建任务
        var taskNum=1;
        $('.creatJobTask').click(function () {
            if(taskVaild()==false) return;

            taskValue();
            taskReset();
            taskNum+=1;
            $('.task-set-name .task-num').html(taskNum);  //任务字母变化
            $('.job-set-main ul').append("<li>Task<span class='task-num'>"+taskNum+"</span> <span class='task-name hidden'></span></li>");
        })
        //提交作业
        $('.submitJob').click(function () {
            if(taskVaild()==false) return;

            $(".contentshow").addClass("hide");
            $(".plan-down table").removeClass("hide");


            var jobtask={}; //声明job对象
            var tasks=taskValue();

            jobtask.job=jobName;
            jobtask.tasks=tasks;

            jobAll.push(jobtask);

            var lastJob=new Array();//存放最后一个作业
            for(var j in jobAll){
                if(j!='remove'){
                    lastJob=jobAll[j].tasks;
                }
            }
            var taskArr=new Array();//存放最后一个作业的所有任务
            for(var j in lastJob){
                if(j!='remove'){
                    taskArr.push(lastJob[j].task);
                }
            }
            var depend=taskArr.join(' <—— ');//显示依赖关系
            jobReset();
            $.Notification.autoHideNotify('success', 'bottom center', '作业创建成功 !');
            $('.plan-down tbody').append("<tr><td>"+jobName+"</td><td>"+depend+"</td></tr>");
        })

        //执行计划管理
        $(".plan-manage").click(function () {
            post("planManage","get",null,function(data){
                $(".panel-body").html(data);
            })
        })
    })

</script>
