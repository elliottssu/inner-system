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
        /*height: 200px;*/
        /*width: 600px;*/
        /*position: absolute;*/
        /*left: 50%;*/
        /*top:57%;*/
        /*margin-top: -100px;*/
        /*margin-left: -300px;*/
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
        /*width: 600px;*/
        /*height: 250px;*/
        /*margin:0 auto;*/
        /*margin-top: 2%;*/
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
    .dispatch .search-field,.dispatch .chosen-single,.create-job-task .search-field{
        height: 34px;
        line-height: 37px;
    }
    .dispatch .search-choice,.create-job-task .search-choice{
        line-height: 20px!important;
    }
    .dispatch .chosen-choices,.create-job-task .chosen-choices{
        border: 1px solid #ccc!important;
        border-radius: 4px;
    }
    .submit_spark{
        margin-right: 10px;
    }
    .cron-express{
        cursor: pointer;
    }
    .dispatch-job-create{
        top: 26%;
        left: 32%;
        position: absolute;
    }
    .dispatch-job-create .col-md-1 span{
        cursor: pointer;
        line-height: 35px;
        font-size: 18px;
    }
    .dispatch-job-create .bootstrap-tagsinput{
        width:100%;
    }
    .ipgroup{
        padding: 0;
    }
    .job-creata-opt{
        margin-top: 20px;
        float: right;
        padding: 0;
    }
</style>

<div class="dispatch">

    <div class="dispatch-job-create col-md-5">
        <div class="task-set-main clearfix">
            <form class="form-horizontal">
                <div class="form-group">
                    <lable class="col-md-2 control-lable text-right">作业名称:</lable>
                    <div class="col-md-9">
                        <input type="text" class="form-control jobName">
                    </div>
                </div>

                <div class="form-group">
                    <lable class="col-md-2 control-lable text-right">任务依赖:</lable>
                    <div class="col-md-9">
                        <select data-placeholder=" " class="form-control tasks" multiple="multiple">
                            <option value="-1"></option>
                        </select>
                    </div>
                    <div class="col-md-1">
                        <span class="fa fa-plus text-info " title="添加任务" data-toggle="modal" data-target="#addTask"></span>
                    </div>
                </div>

                <div class="form-group">
                    <lable class="col-md-2 control-lable text-right">cron:</lable>
                    <div class="col-md-9">
                        <select class="cron form-control"></select>
                    </div>
                    <div class="col-md-1">
                        <span class="fa fa-list-alt text-info" title="cron表达式" data-toggle="modal" data-target="#cronsexpress"></span>
                    </div>
                </div>

                <div class="form-group">
                    <lable class="col-md-2 control-lable text-right">分片数量:</lable>
                    <div class="col-md-9">
                        <input type="number" class="form-control shardingCnt" value="1">
                    </div>
                </div>

                <div class="form-group">
                    <lable class="col-md-2 control-lable text-right">ip选择:</lable>
                    <div class="col-md-9 ipgroup">

                    </div>
                    <div class="col-md-offset-2">
                        <lable class="col-md-6"><input type="checkbox" class="ifChecked"> 全选/全不选</lable>
                    </div>
                </div>
            </form>
            <ul class='job-operation job-creata-opt col-md-10 '>
                <li class='submit_spark'>提交spark</li>
                <li class='submit' style="margin-left: 10px">通用提交</li>
            </ul>
        </div>
    </div>
</div>
<div class="modal" id="addTask" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">新建任务</h4>
            </div>
            <div class="modal-body">
                <div class="dispatch-left">
                    <div class="create-job-task clearfix">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <lable class="col-md-2 control-lable">任务:</lable>
                                <div class="col-md-10">
                                    <input type="text" name="taskName" class="form-control taskName" placeholder="请输入任务名称">
                                </div>
                            </div>
                            <div class="form-group">
                                <lable class="col-md-2 control-lable">资源:</lable>
                                <div class="col-md-10">
                                    <select data-placeholder=" 选择资源" class="form-control resource" multiple="multiple">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <lable class="col-md-2 control-lable">命令：</lable>
                                <div class="col-md-10">
                                    <input type="text" name="command" class="form-control cmd" placeholder="请输入指令">
                                </div>
                            </div>

                            <span class="btn btn-pink pull-right saveTask">添加</span>
                            <div class="throbber-loader hidden" style="margin-left: 55%; margin-top: 50px;"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="cronsexpress" tabindex="-1" role="dialog" aria-labelledby="custom-width-modalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">cron表达式生成器</h4>
            </div>
            <div class="modal-body">
                <!-- config-corn start-->

                <div class="corn" id="a8">
                    <input type="hidden" id="nowdisplay" value="Daily">
                    <ul class="nav-tabs nav-border-none corn_ul"style="margin: 10px 0 33px -22px;">
                        <li class="active"><a data-toggle="tab" href="#tc00">时</a></li>
                        <li><a data-toggle="tab" href="#tc10"
                               onClick="display('Daily')">天</a></li>
                        <li><a data-toggle="tab" href="#tc20"
                               onClick="display('Weekly')">周</a></li>
                        <li><a data-toggle="tab" href="#tc30"
                               onClick="display('Monthly')">月</a></li>
                    </ul>
                    <!--每个标签页对应一个面板-->
                    <div class="tab-content">
                        <div id="tc00" class="tab-pane active fade in  corn_run">
                            <div class="">
                                <div class=" well well-small" style="min-height: 332px;">
                                    <div style="height: 40px"></div>
                                    执行时间：
                                    <select id="hourPart" class="sel">
                                        <option value="0">00</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>

                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>

                                        <option selected="selected" value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>

                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                    </select>点</td>

                                    <td><select id="minutePart" class="sel">
                                        <option selected="selected" value="0">00</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>

                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>

                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>

                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>

                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>

                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>

                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                    </select> 分
                                </div>
                            </div>

                        </div>
                        <div id="tc10" class="tab-pane fade in  corn_run">
                            <div class="">
                                <div class="well well-small">
                                    <input class="pad_input" type="radio" name="day"
                                           checked onclick="everyTime(this)"> 每天
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="day" id="latestDay"
                                           class="pad_input"> 从
                                    <input class="day1 input_com" type="number" max="31"
                                           min="1" value="1" id="dayStart_1"> 日开始,每
                                    <input class="day1 input_com" type="number" max="31"
                                           min="1" value="1" id="dayEnd_1"> 天执行一次
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="day" id="every_day"
                                           class="pad_input">
                                    每月<input id="eve_day" class="input_com" value="1"
                                             type="number" max="31" min="1"> 号最近的那个工作日
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small" class="pad_input">
                                    <input type="radio" name="day" onclick="lastDay()">
                                    每月的最后一天执行
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="day" id="day_appoint"
                                           class="pad_input">
                                    <span>指定</span>
                                    <div class="dayList list"
                                         style="padding-left:15px;">
                                        <label class="">
                                            <input type="checkbox" value="1">01
                                        </label>
                                        <label class=" ">
                                            <input type="checkbox" value="2">02
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="3">03
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="4">04
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="5">05
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="6">06
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="7">07
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="8">08
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="9">09
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="10">10
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="11">11
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="12">12
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="13">13
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="14">14
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="15">15
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="16">16
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="17">17
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="18">18
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="19">19
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="20">20
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="21">21
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="22">22
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="23">23
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="24">24
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="25">25
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="26">26
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="27">27
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="28">28
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="29">29
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="30">30
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="31">31
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tc20" class="tab-pane fade corn_run">
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="week" checked
                                           onclick="everyTime(this)" class="pad_input">每周
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="week" id="weekOfDay"
                                           class="pad_input">
                                    每月第<input class="week1 input_com" type="number"
                                              max="4" min="1" value="1"
                                              id="weekStart_1"> 周的星期<input
                                        class="week1 input_com" style="width: 60px;"
                                        type="number" max="7" min="1" id="weekEnd_1"
                                        value="1">
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="week" id="lastweek"
                                           class="pad_input">每月月最后一个星期<input
                                        class="input_com" type="number" max="7" min="1"
                                        id="weekStart_2" value="1">
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="week" id="week_appoint"
                                           class="pad_input">指定
                                    <div class="weekList list"
                                         style="text-align:center;">
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox1"
                                                   name="txtWeekly" value="2">周一
                                        </label>
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox2"
                                                   name="txtWeekly" value="3">周二
                                        </label>
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox3"
                                                   name="txtWeekly" value="4">周三
                                        </label>
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox4"
                                                   name="txtWeekly" value="5">周四
                                        </label>
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox1"
                                                   name="txtWeekly" value="6">周五
                                        </label>
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox2"
                                                   name="txtWeekly" value="7">周六
                                        </label>
                                        <label class="">
                                            <input type="checkbox" id="inlineCheckbox3"
                                                   name="txtWeekly" value="1">周日
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tc30" class="tab-pane fade  corn_run">
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="month" id="optionsRadios3"
                                           checked onclick="everyTime(this)"
                                           class="pad_input">每月
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="month" id="optionsRadios2"
                                           class="pad_input">
                                    从<input class="month1  input_com"
                                            style="width: 60px;" type="number" max="31"
                                            min="1" value="1" id="monthStart_1">日开始，每
                                    <input class="month1  input_com"
                                           style="width: 60px;" type="number" max="12"
                                           min="1" value="1" id="monthEnd_1">
                                    个月执行一次
                                </div>
                            </div>
                            <div class="">
                                <div class="well well-small">
                                    <input type="radio" name="month" id="month_appoint"
                                           class="pad_input"> 指定月份
                                    <div class="imp monthList list"
                                         style="width:95%;text-align:center;">
                                        <label class="">
                                            <input type="checkbox" value="1"
                                                   name="txtMonth">1
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="2"
                                                   name="txtMonth">2
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="3"
                                                   name="txtMonth">3
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="4"
                                                   name="txtMonth">4
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="5"
                                                   name="txtMonth">5
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="6"
                                                   name="txtMonth">6
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="7"
                                                   name="txtMonth">7
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="8"
                                                   name="txtMonth">8
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="9"
                                                   name="txtMonth">9
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="10"
                                                   name="txtMonth">10
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="11"
                                                   name="txtMonth">11
                                        </label>
                                        <label class="">
                                            <input type="checkbox" value="12"
                                                   name="txtMonth">12
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="corn_succ" style="margin: 20px 0;text-align: center;">
                        <input type="text" class="form-control" name="mycron" value="0 0 12 * * ?" id="mycron" style="text-align:center;margin-bottom: 20px;"/>
                        <span name="btnGenerate" class="btn btn-pink btn-sm" onClick="getExp()" >生成</span>
                        <span id="btnCopy" class="btn btn-pink btn-sm">写入</span>
                    </div>

                </div>

                <!-- config-corn end-->
            </div>
        </div>
    </div>
</div>




<script type="text/javascript" src="js/config/chosen.jquery.js"></script>
<script type="text/javascript" src="js/common/corn.js"></script>


<script>
    $(function () {
        function taskVaild() {//        表单空验证
            if($('.taskName').val()==''){
                sweetAlert('任务填写不完整！');
                return false;
            }
        }
        function jobVaild() {
            if($('.jobName').val()==''||$(".shardingCnt").val()==''||$(".task-set-main .bootstrap-tagsinput").children().length<2||$(".ipgroup input:checked").length<1||$(".task-set-main .chosen-choices").children().length<2){
                sweetAlert('作业填写不完整！');
                return false;
            }
        }
        function taskReset() {
            $('.taskName').val("");
            $('.cmd').val("");
            $('.resource').chosen("destroy");
            $('.resource option:gt(0)').remove();
            allResource()

        }

        //获取所有资源
        function allResource(){
            post("resourcemanager/allresource","get",null,function (data) {
                var allresource=JSON.parse(data);
                for(var i in allresource){
                    if(i!="remove"){
                        $(".resource").append("<option>"+allresource[i].resource+"</option>")
                    }
                }
                $(".resource").chosen({no_results_text: "没有匹配结果",width:"100%"});
            })
        }

        //初始化
        $('.cron').tagsinput();
        $(".tasks").chosen({no_results_text: "没有匹配结果",width:"100%"});
        allResource()

        //写入corn表达式
        $("#btnCopy").click(function () {
            $('.cron').tagsinput('add',$("#mycron").val());
            $(".close").click();
        });

        //获取所有ip
        post("clusterManager/ips","get",null,function (data) {
            var allIp=JSON.parse(data);
            var mode;
            for(var i in allIp){
                if(i!="remove"){
                    if(allIp[i].mode=="0"){
                        mode="本地"
                    }else{
                        mode="云端"
                    }
                     $(".ipgroup").append('<lable class="col-md-6"><input type="checkbox" value="'+allIp[i].ip+'">'+allIp[i].ip+'（'+mode+'）</lable>')
                }
            }
        })

        $(".ifChecked").click(function(){
            if(this.checked){
                $(".ipgroup input:checkbox").attr("checked",true);
            }else{
                $(".ipgroup input:checkbox").attr("checked",false);
            }
        })
        $(".ipgroup input").die().live('click',function(){
            var chknum = $(".ipgroup input:checked").length;
            var allnum = $(".ipgroup input").length;
            if(chknum==allnum){
                $(".ifChecked").attr("checked",true);
            }else{
                $(".ifChecked").attr("checked",false);
            }
        })



        //创建任务
        $(".saveTask").click(function(){
            if($(".jobName").val()==""){
                sweetAlert('作业名称不能为空');
                return false;
            }
            if(taskVaild()==false) return false;

            $(".saveTask").html('创建中...');
            $('.create-job-task .throbber-loader').removeClass('hidden');
            var resourceList=[];
            $('.create-job-task ul').find(".search-choice").each(function () {
                resourceList.push($(this).text())
            })
            var resource=resourceList.join(",");
            var jobName=$(".jobName").val();
            var taskName=$(".taskName").val();
            var command=$(".cmd").val();

            var tasks={
                jobName:jobName,
                taskName:taskName,
                resource:resource,
                command:command
            }
            post("resourcemanager/regesiterTask","get",tasks,function (data) {
                $.Notification.autoHideNotify('success', 'top right', '任务创建成功!');
                $(".saveTask").html('创建任务');
                $('.create-job-task .throbber-loader').addClass('hidden');
            $(".tasks").append("<option selected>"+taskName+"</option>");
            $(".tasks").trigger("chosen:updated");
            $(".close").click();
                taskReset();
            })
        });


        //创建作业
        $(".job-creata-opt li").click(function () {
            if(jobVaild()==false) return false;

            var taskDependance=[];
            $('.task-set-main ul').find(".search-choice").each(function () {
                taskDependance.push($(this).text())
            })
            var tasks=taskDependance.join(",");

            var ipSelect=[];
            $(".ipgroup input:checked").each(function () {
                ipSelect.push($(this).val())
            })
            var ips=ipSelect.join(",")

            var cron=$(".cron").val();
            var jobName=$(".jobName").val();
            var shardingCnt=$(".shardingCnt").val();
            var operation=$(this).attr("class");

            var _this=this;

            $(this).html('作业提交中...').attr('disabled','true');
            var jobs={
                jobName:jobName,
                cron:cron,
                shardingCnt:shardingCnt,
                operation:operation,
                tasks:tasks,
                ips:ips,
                type:'SCRIPT'
            }
            console.log(jobs)
            $.ajax({
                type: "POST",
                url: 'jobmanager/etljob',
                data: jobs,
                dataType: "json",
                success: function (data) {
                    if(data.code==1){
                        setTimeout(function(){
                            $.Notification.autoHideNotify('success', 'top right', '作业提交成功!');
                            dispatchPage();
                        },1000)
                    }
                },
                error:function () {
                    $(_this).html('提交spark').removeAttr('disabled');
                    $.Notification.autoHideNotify('error', 'top right', '作业提交失败!');
                }
            })
        })


    })

</script>