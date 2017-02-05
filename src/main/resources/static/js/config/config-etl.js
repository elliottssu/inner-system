// config字符串transform
var transform1 = {};
transform1.templates = [];
$(function () {
// 大任务描述保存
    $('#taskContent').delegate('.descriptionUnits', 'keyup', function () {
        transform1.templates[nowTask_num].desciption = $(this).val();
    });
// 模板表选择change事件
    $('#taskContent').delegate('.templateTableSelect', 'change', function () {
        templateTable=$(this).val();
        transform1.templates[nowTask_num].templateTable = templateTable;
    });
// saveUnit 保存
    $('#taskContent').delegate('.ex-expression', 'DOMNodeInserted', function (e) {
        var c = [];
        var exs = $(this).parent().children('.ex-expression');
        for (var i = 0; i < exs.length; i++) {
            c.push($(exs[i]).text());
        }
        transform1.templates[nowTask_num].units[nowStep_num - 1].cells[minStep_num - 1].expression = c.join(" && ");
    });
//描述description保存
    $('#taskContent').delegate('.description-tasks', 'keyup', function () {
        transform1.templates[nowTask_num].units[nowStep_num - 1].cells[minStep_num - 1].description = $(this).val();
    });
//小单元描述
    $('#taskContent').delegate('.description-units', 'keyup', function () {
        transform1.templates[nowTask_num].units[nowStep_num - 1].description = $(this).val();
    });
});
function addEventHandler(target, type, func) {
    if (target.addEventListener) { //addEventListener:监听Dom元素的事件 target：监听对象 type：监听函数类型，如click,mouseover func：监听函数
        target.addEventListener(type, func, false);//监听IE9，谷歌和火狐
    } else if (target.attachEvent) {
        target.attachEvent("on" + type, func);//IE8及更早版本
    } else {
        target["on" + type] = func;
    }
}
function removeEventHandler(target, type, func) {
    if (target.removeEventListener) {
        target.removeEventListener(type, func, false);
    } else if (target.detachEvent) {
        target.detachEvent("on" + type, func);
    } else {
        delete target["on" + type];
    }
}
function refreshStyle() {
    var $mappingContent = $('#task_' + task_num + '_codeMapping_' + nowStep_num + '_' + minStep_num);
    $mappingContent.find('.select-2').next().addClass('ms-container-new-2');
    $mappingContent.find('.select-1').next().addClass('ms-container-new-1');
    $mappingContent.find('.select-2').next().css("padding-left", "40px");
    $mappingContent.find('.select-2').next().find('.ms-selectable').css("width", "50%");
    $mappingContent.find('.select-2').next().find('.ms-selection').addClass('chosen-position');
    $mappingContent.find('.select-1').next().find('.ms-selection').find('.ms-list').addClass('list-height');
    $mappingContent.find('.select-2').next().find('.ms-selection').find('.ms-list').addClass('list-height');
}
$(function () {

    //----------------------------------------------------全局数组定义star------------------------------------------------------
    extrationExpression = new Array();//数据抽取、聚合、映射、加载表达式
    aggregationExpression1 = new Array();
    aggregationExpression2 = new Array();
    mappingExpression = new Array();
    LoadingExpression = new Array();

    loadingArr=new Array();//数据加载--模板列表映射

    selarr = new Array();//存放各个步骤列的数组
    transarr = new Array();
    cleanarr = new Array();

    ETLtableArrs=new Array();// 每个任务里单独出一个数组表用来盛放table和列
    etlTableArr=new Array();

    task_num = 0;
    minUnits_num = 0;
    nowTask_num = 0;
    nowStep_num = 0;
    transform1.templates[nowTask_num] = {};
    nowStep = "";
    extrationTable = new Array();
    aggfun = "";// 数据聚合中选择的函数定义的全局变量

    maptable1 = new Array();// 代码映射中table1 和table2
    maptable2 = new Array();
    mapcels1 = "";
    mapcels2 = ""
    //----------------------------------------------------全局数组定义end-------------------------------------------------------





    //----------------------------------------------------选择模板表star--------------------------------------------------------
    function temTab(id) {
        post("getInternalTemplates", "get", null, function (data) {
            jsonTemplate = JSON.parse(data["templateJson"]);
            for (var key in jsonTemplate) {
                if(key!='remove'){
                    id[0].options.add(new Option(key, key));
                }
            }

        }, "json");
    }

    temTab($('.templateTableSelect'));//加载模板表

    $('#taskContent').delegate('.createEtl', 'click', function () {     // 点击创建
        if($(".templateTableSelect option:selected").text()=="请选择模板表"){
            sweetAlert("模板表不能为空！");
            return;
        }
        $(".etlchoosetable .ball-loader").removeClass('hide');
        minUnits_num = 0;
        minStep_num = 1;
        $(this).html('创建中...').attr('disabled','disabled');
        $(this).parent().prev().children('select').attr('id', 'task_' + task_num + '_modelTable');// 选择模板表id
        var etlw = $(this).parent().parent().parent().next();
        $("#taskList_"+task_num).find("ul").attr('id', 'task_' + task_num + '_items'); // 左侧任务标题items
        etlw.children().eq(0).children('select').attr('id', 'task_' + task_num + '_selectStep');  // 选择下一步selectstep
        etlw.children().eq(0).children('ul').attr('id', 'task_' + task_num + '_selectStepNavs');
        etlw.children().eq(1).attr('id', 'task_' + task_num + '_tabContent');// tabcontent contant面板id
        setTimeout(function () {
            $(".etlchoosetable").hide();
            var TableNameNum=$("#task_"+task_num+" .templateTableSelect option:selected").text();
            $("#tableName_"+task_num).html(TableNameNum);
            $("#tableNavName_"+task_num).html(TableNameNum);
            $("#task_"+task_num+" .chooseTableName").removeClass('hide');     //让任务后面显示模板表
            etlw.attr('id', 'task_' + task_num + '_etlWell').removeClass('hide');// etlWell
            $('#task_' + task_num + '_items').removeClass('hide');
        },1000);

        // 加入数据抽取
        minUnits_num += 1;
        nowStep = "dataExtraction";
        nowTask_num = task_num;
        nowStep_num = minUnits_num;
        addElement("dataExtraction", nowStep_num, "数据抽取", 'dataExtraction', minStep_num);
        htm("task_" + task_num + "_dataExtraction_" + nowStep_num + '_' + minStep_num, 'dataExtraction');
        $(".selectStep").empty();
        $(".selectStep").append("<option disabled selected value='selected'>下一步</option><option value='dataCleaning'>数据清洗</option> <option value='dataConversion'>数据转换</option> <option value='dataAggregation'>数据聚合</option><option value='dataExtraction'>数据抽取</option><option value='codeMapping'>代码映射</option><option value='dataLoading'>数据加载</option>");
        // 对具体内容赋予内容
        var $extractionContent = $('#task_' + task_num + '_dataExtraction_' + nowStep_num + '_' + minStep_num).children();
        // 选择列
        $extractionContent.find('.multi-select').attr('id', 'task_' + task_num + '_etlColumns_' + nowStep_num + '_' + minStep_num);
        // 写入table
        ETLtableArrs[nowTask_num]=new Array();
        ETLtableArrs[nowTask_num]= jQuery.extend(true,{}, etltable);
        sortExtraction=new Array();//对表排序
        for (var tab in ETLtableArrs[nowTask_num]) {
            if(tab!='remove'){
                sortExtraction.push(tab);
            }
        }
        for (var i in sortExtraction.sort()){
            if(i!='remove'){
                $extractionContent.find('.chosen-select')[0].options.add(new Option(sortExtraction[i],sortExtraction[i]));
            }
        }
        $extractionContent.find('.chosen-select').find("option[value='remove']").remove();
        $extractionContent.find('.chosen-select').chosen();
        $extractionContent.find('.chosen-select').next().addClass('chosen-width');
        multiSelect('task_' + task_num + '_etlColumns_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
        transform1.templates[nowTask_num].units = [];
        transUnitAdd("select");
        transformAdd();
        // 各个步骤二维数组初始化"
        selarr[nowTask_num] = new Array();
        selarr[nowTask_num][nowStep_num-1] = {};
        extrationTable[nowTask_num] = new Array();
        extrationExpression[nowTask_num] = new Array();

        cleanarr[nowTask_num] = new Array();

        transarr[nowTask_num] = new Array();

        aggregationExpression2[nowTask_num] = new Array();
        aggregationExpression1[nowTask_num] = new Array();

        LoadingExpression[nowTask_num] = new Array();
        loadingArr[nowTask_num]=new Array();

        etlTableArr[nowTask_num]=new Array();


        transallreset();// 初始化数据转换里的变量
        cleanvalreset();

        // 介于删除操作需要，每个大任务里都产生一个数组用于盛放每一步操作的数组，用于删除操作
        deletlTableArr=new Array();
        delETLtableArrs=new Array();
        deletlTableArr[nowStep_num]=[];
        delETLtableArrs[nowStep_num]=[];
        mapName = new Array();
    });
    //----------------------------------------------------选择模板表end---------------------------------------------------------





    //----------------------------------------------------任务列表操作star---------------------------------------------------
    //任务新建
    $('#createTask').click(function () {
        if(typeof($('#task_' + task_num+'_tabContent').children().last().attr('id'))=='undefined' && $(this).parent().parent().children().length>1){
            sweetAlert('请先完成上一个任务!');
            return;
        }
        $(".templateTableSelect option:selected").text("");
        $('#collapse_' + task_num).removeClass('in');
        task_num += 1;
        var na = task_num + 1
        nowTask_num = task_num;
        $('#taskContent').append("<div id='task_" + task_num + "' class='panel panel-default'></div>");
        var panelHead = "<div id='taskList_"+task_num+"'><div class='panel-heading task-list' role='tab' id='heading_" + task_num + "'>" +
            "<h4 class='panel-title' style='font-size: 14px;display: inline;'>" +
            "<a href='#collapse_" + task_num + "' style='text-decoration: none' class='titlelistname'>任务 </a></h4><div class='chooseTableName choose-nav' id='tableNavName_"+task_num+"' title='当前模板表名称'></div><span id='taskDelite' class='fa fa-close text-pingku pull-right hide' style='font-size: 14px;margin-top: -11px;cursor: pointer' title='删除任务'></span><span id='taskEdit' class='fa fa-pencil text-pingku pull-right hide' style='font-size: 14px;margin-right:12px;margin-top: -11px;cursor: pointer' title='编辑任务'></span></div><div class='taskstep clearfix'> <ul id='' class='nav nav-tabs nav-li unitlist hide'></ul> </div></div>"
        var panelNewHead=" <div class='panel-heading'>" +
            "<h4 class='panel-title'>任务 </h4><div class='chooseTableName' id='tableName_"+task_num+"' title='当前模板表名称'></div></div></div>"
        $('#task_' + task_num).append(panelNewHead);
        $("#tasklist").append(panelHead);
        var panelCollapse = "<div id='collapse_" + task_num + "' class='panel-collapse'></div>";
        $('#task_' + task_num).append(panelCollapse);
        htm('collapse_' + task_num, 'etlTask');
        var tem=$('#collapse_' + task_num).find('.templateTableSelect');
        temTab(tem);
        transform1.templates[nowTask_num] = {};
        $(".titlelistname:last").click();
    });

    //任务操作默认隐藏，悬停显示
    $(".task-list").die().live({
        mouseover:function(){
            $(this).find('#taskDelite').removeClass('hide');
            $(this).find('#taskEdit').removeClass('hide');
        },
        mouseout:function(){
            $(this).find('#taskDelite').addClass('hide');
            $(this).find('#taskEdit').addClass('hide');
        }
    })

    //任务删除
    $("#taskDelite").die().live("click",function () {
        sweetAlert({title:'删除任务成功',type:'success'});
        var taskid=$(this).parent().parent().attr("id");
        var taskorder=taskid.substring(taskid.length-1,taskid.length);//大任务id  包含0
        delete transform1.templates[taskorder];
        $("#taskContent").children("#task_"+taskorder).remove();//删除对应的右边任务
        $(this).parent().parent().remove();//删除左边显示的任务；
        $('#tasklist').children().last().find(".panel-title a").click();
    })

    //任务的编辑
    $("#taskEdit").die().live("click",function () {
        $(this).parent().next().children().each(function () {
            $(this).children().children(".delect-step").remove();
            $(this).children("li:gt(0)").append("<i class='delect-step fa fa-close text-warningu'></i>");
        })
    })

    //步骤删除
    $(".delect-step").die().live("click",function () {
        var taskid=$(this).parent().parent().parent().parent().attr("id");
        var taskorder=taskid.substring(taskid.length-1,taskid.length);//大任务序号（包含0）（有序）
        //当前步骤和单元，从0开始
        if(typeof($(this).parent().prev().attr("id"))!="undefined"){//如果前一个是P元素 这里上限15个
            var unitid=$(this).parent().prev().attr("id");
            var stepid=0;
        }else if(typeof($(this).parent().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().attr("id");
            var stepid=1;
        }else if(typeof($(this).parent().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().attr("id");
            var stepid=2;
        }else if(typeof($(this).parent().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().attr("id");
            var stepid=3;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().attr("id");
            var stepid=4;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=5;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=6;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=7;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=8;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=9;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=10;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=11;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=12;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=13;
        }else if(typeof($(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id"))!="undefined"){
            var unitid=$(this).parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().attr("id");
            var stepid=14;
        }
        var unitorder=unitid.substring(unitid.length-1,unitid.length)-1;//单元序号（不包含0）
        // 删除当前单元的之后所有单元
        if(stepid==0){
            transform1.templates[taskorder].units.splice(unitorder);
//            delETLtableArrs.splice(unitorder+1);
            deletlTableArr.splice(unitorder+1);
            delETLtableArrs.splice(unitorder+2);
            console.log("uuuuuuu");
            console.log(selarr[nowTask_num]);
            var leng2=deletlTableArr[deletlTableArr.length-1].length-1;
            var leng1=deletlTableArr.length-1;
//            etlTableArr=deletlTableArr[leng1][leng2].concat();
            etlTableArr[nowTask_num]=jQuery.extend(true,{},deletlTableArr[leng1][leng2]);
//            ETLtableArrs[nowTask_num]=delETLtableArrs[delETLtableArrs.length-1][0].concat();
            if(delETLtableArrs[delETLtableArrs.length-1][0]!=null){
                ETLtableArrs[nowTask_num]=jQuery.extend(true,{},delETLtableArrs[delETLtableArrs.length-1][0]);
            }
            nowStep_num = minUnits_num = unitorder;
        }else {
            console.log(deletlTableArr);
            transform1.templates[taskorder].units[unitorder].cells.splice(stepid);
            deletlTableArr[nowStep_num].splice(stepid+1);
            var leng2=deletlTableArr[deletlTableArr.length-1].length-1;
            var leng1=deletlTableArr.length-1;
//            etlTableArr=deletlTableArr[leng1][leng2].concat();
            etlTableArr[nowTask_num]=jQuery.extend(true,{},deletlTableArr[leng1][leng2]);
            minStep_num=stepid;
            console.log(333333333333333333333333333333333);
            console.log(deletlTableArr);
            transform1.templates[taskorder].units.splice(unitorder+1);
        }
        console.log(transform1.templates);
        var steporder=$(this).parent().prevAll("li").length;//删除后的序号
        $("#task_"+taskorder+"_tabContent").children().eq(steporder-1).nextAll().remove();//删除对应的右边步骤
        if(typeof($(this).parent().prev().attr("id"))!="undefined"){  //删掉左边的
            $(this).parent().prev().prev().children("a").click();
            $(this).parent().prev().prev().nextAll().remove();
        }else{
            $(this).parent().prev().children("a").click();
            $(this).parent().prev().nextAll().remove();
        }

        $(".taskstep li").find(".delect-step").remove();

        $('#task_'+nowTask_num).find('.step-navs').removeClass('disabled')
        $('#task_'+nowTask_num+'_tabContent').children('div').addClass('disabled');


        // 将nowStep设为空字符串
//        nowStep="";
    })

    //任务点击
    $('#tasklist').delegate('.titlelistname', 'click', function () { //点击不同任务，给nowtask_num付相应的值
        $(this).parent().parent().next().slideDown();
        $(this).parent().parent().parent().siblings().children('.taskstep').slideUp();
        var tasktitle=$(this).attr('href');
        var tasknumClick=tasktitle.substring(tasktitle.length-1,tasktitle.length)-'';//获取任务number
        $('#task_' + tasknumClick).show().siblings().hide();
        //初始化一些参数
        nowTask_num=task_num=tasknumClick;
        var stepnumTitle=$('#task_' + task_num+'_tabContent').children().last().attr('id');
        if(typeof(stepnumTitle)!='undefined'){
            var stepnumClick=stepnumTitle.split('_');//获取步骤和小步骤的number
            nowStep=stepnumClick[2];
            nowStep_num=Number(stepnumClick[3]);
            minStep_num=Number(stepnumClick[4]);
        }else{
            nowStep="";
            nowStep_num = 1;
            minStep_num = 1
        }
        expclean_num=1;
        exptrans_num=1;
        expmap_num = 1;

        minUnits_num=nowStep_num;


    });

    function activeBind(tar) {    //items 绑定 事件监听,当点击时得到对应的变量值，并传给mutil插件
        var d = tar[0].hash;
        nowTask_num = d.slice(6, 7);
        nowStep_num = d.slice(-3,-2);
        nowStep = d.slice(8, -4);// 当前tab面板为哪一步，单独定义全部变量
    }

    //任务列表里面的步骤
    $('#tasklist').delegate('.nav-tabs a', 'click', function () {
        var tar = $(this);
        addEventHandler(tar, "click", activeBind(tar));
        var lis = $(this).parent().parent().children('li.task_' + nowTask_num + '_unit' + nowStep_num);
        for (var i = 0; i < lis.length; i++) {
            var hash = $(lis[i]).find('a')[0].hash; //dom的hash属性读取href锚点#之后的数值
            if (hash == tar[0].hash) {
                minStep_num = i + 1;
            }
        }
        if($(this).html()=='数据加载'){  //当为数据加载是隐藏
            $('#task_'+nowTask_num).find('.etlStep').css('visibility','hidden');
        }else{
            $('#task_'+nowTask_num).find('.etlStep').css('visibility','visible');
        }
        if($(this).parent().index()+1 == $(this).parent().parent().children().length){ //除非为最后一项，否则禁用
            $('#task_'+nowTask_num).find('.step-navs').removeClass('disabled')
        }else{
            $('#task_'+nowTask_num).find('.step-navs').addClass('disabled');
        }
        $('#task_'+nowTask_num+'_tabContent').children('div').not(':last').addClass('disabled'); //以前的步骤不让编辑
    });

    //点击对应的单元，实现显示隐藏功能
    $('#tasklist').delegate('.flip', 'click', function () {
        var id = $(this)[0].id;
        $("." + id).slideToggle();
        $(this).children('i').toggleClass('fa-minus-square-o fa-plus-square-o');
    });

    //控制侧边输出表的显示隐藏
    $(".show-toggle").live("click",function () {
        $(this).parent().next().find('.active .etl-tableshow').toggleClass('show-active')
    })
    //----------------------------------------------------任务列表操作end----------------------------------------------------




    //----------------------------------------------------etl操作按钮start-------------------------------------------------------
    //下拉框change，这里隐藏了
    $('#taskContent').delegate('.selectStep', 'change', function () {
        if(minStep_num==1){
            navToolTip();//显示单元tooltip,一个步骤触发一次即可
        }
        stepToolTip();//显示步骤
        var value = $(this).val();
        if (nowStep == 'dataExtraction') {
            etlTableArr[nowTask_num][extrationTable[nowTask_num][nowStep_num - 1]] = selarr[nowTask_num][nowStep_num - 1][minStep_num].concat();
        }
        if (nowStep == 'codeMapping') {
            // 将映射完的table合并成一个组成一个新的表
            console.log(nowTask_num);
            console.log(nowStep_num);
            var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1;
            var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2;
            ETLtableArrs[nowTask_num][mapName[nowStep_num]] = etlTableArr[nowTask_num][tab1].concat(etlTableArr[nowTask_num][tab2]);
            // // 将映射完的表删除
            // delete etltable[table1.slice(0, -1)];
            // delete etltable[table2.slice(0, -1)];
            delete etlTableArr[nowTask_num][tab1];
            delete etlTableArr[nowTask_num][tab2];
//            etlTableArr = [];
            transform1.templates[nowTask_num].units[nowStep_num - 1].tableName = mapName[nowStep_num];
            extrationTable[nowTask_num][nowStep_num - 1]=mapName[nowStep_num];
//            selarr[nowTask_num][nowStep_num - 1]=etlTableArr[mapName[nowStep_num]]=ETLtableArrs[nowTask_num][mapName[nowStep_num]];
            selarr[nowTask_num][nowStep_num - 1][minStep_num]=ETLtableArrs[nowTask_num][mapName[nowStep_num]].concat();
            etlTableArr[nowTask_num][mapName[nowStep_num]]=ETLtableArrs[nowTask_num][mapName[nowStep_num]].concat();
            // etlTableArr[mapName[nowStep_num]]=selarr[nowTask_num][nowStep_num - 1][minStep_num].concat();
        }
        if(nowStep=='dataAggregation'){
            var tabb=extrationTable[nowTask_num][nowStep_num - 1];
            // for(var i=0;i<aggtds.length;i++){
            //     if((i+1)%2!=0){
            //         for(var c=0;c<selarr[nowTask_num][nowStep_num - 1][minStep_num].length;c++){
            //             if(selarr[nowTask_num][nowStep_num - 1][minStep_num]==aggtds[i]){
            //                 selarr[nowTask_num][nowStep_num - 1][minStep_num][c]=aggtds[i+1];
            //             }
            //         }
            //     }
            // }
            for(var i=0;i<aggtds.length;i++){
                if((i+1)%2!=0){
                    for(var c=0;c<etlTableArr[nowTask_num][tabb].length;c++){
                        if(etlTableArr[nowTask_num][tabb][c]==aggtds[i]){
                            etlTableArr[nowTask_num][tabb][c]=aggtds[i+1];
                        }
                    }
                }
            }
        }
        if(nowStep=='dataConversion'){
            if(transAddcol()==false){
                sweetAlert('添加列已存在，请重新填写！');
                return;
            }
        }

        if (value == 'dataExtraction') {
            //小单元
            minUnits_num += 1;
            //步骤
            minStep_num = 1;
            nowTask_num = task_num;
            nowStep_num = minUnits_num;
            deletlTableArr[nowStep_num]=[];
            deletlTableArr[nowStep_num][minStep_num] = jQuery.extend(true,{},etlTableArr);
            addElement("dataExtraction", nowStep_num, "数据抽取", value, minStep_num);
            htm("task_" + task_num + "_dataExtraction_" + nowStep_num + '_' + minStep_num, 'dataExtraction');
            // 对具体内容赋予内容
            var des = $('#task_' + task_num + '_dataExtraction_' + nowStep_num + '_' + minStep_num).children();
            //选择列
            des.find('.multi-select').attr('id', 'task_' + task_num + '_etlColumns_' + nowStep_num + '_' + minStep_num);
            //写入table
            sortExtraction=[];
            for (var tab in ETLtableArrs[nowTask_num]) {
                if(tab!='remove'){
                    sortExtraction.push(tab);
                }
            }
            for (var i in sortExtraction.sort()){
                if(i!='remove'){
                    des.find('.chosen-select')[0].options.add(new Option(sortExtraction[i],sortExtraction[i]));
                }
            }
            des.find('.chosen-select').chosen();
            des.find('.chosen-select').next().addClass('chosen-width');
            multiSelect('task_' + nowTask_num + '_etlColumns_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
            transUnitAdd("select");
            transformAdd();
            selarr[nowTask_num][nowStep_num - 1]={};
        }
        if (value == 'dataCleaning') {
            // expression会有多个，所以在这定义一个全局变量，用来分辨表达式
            expclean_num = 1;
            minStep_num += 1;
            selarr[nowTask_num][nowStep_num - 1][minStep_num]=selarr[nowTask_num][nowStep_num - 1][minStep_num-1].concat();
            addElement("dataCleaning", nowStep_num, "数据清洗", value, minStep_num);
            htm("task_" + task_num + "_dataCleaning_" + nowStep_num + '_' + minStep_num, 'dataCleaning');
            var $cleanContent = $('#task_' + task_num + '_dataCleaning_' + nowStep_num + '_' + minStep_num);
            $cleanContent.find('.table-label').html(extrationTable[nowTask_num][nowStep_num - 1]);
            $cleanContent.find('.multi-select').attr('id', 'task_' + task_num + '_cleanColumns_' + nowStep_num + '_' + minStep_num);
            for (var i = 0; i < selarr[nowTask_num][nowStep_num - 1][minStep_num].length; i++) {
                $('#task_' + task_num + '_cleanColumns_' + nowStep_num + '_' + minStep_num)[0].options.add(new Option(selarr[nowTask_num][nowStep_num - 1][minStep_num][i], selarr[nowTask_num][nowStep_num - 1][minStep_num][i]));
            }
            cleanarr[nowTask_num][nowStep_num - 1] = new Array();
            multiSelect('task_' + nowTask_num + '_cleanColumns_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
            transformAdd();
            var outputclean=$cleanContent.find('.output-arr');
            //outputTable($outputtrans);
            outputResult(outputclean,selarr[nowTask_num][nowStep_num - 1][minStep_num]);
        }
        if (value == 'dataConversion') {
            // expression会有多个，所以在这定义一个全局变量，用来分辨表达式
            exptrans_num = 1;
            minStep_num += 1;
            selarr[nowTask_num][nowStep_num - 1][minStep_num]=selarr[nowTask_num][nowStep_num - 1][minStep_num-1].concat();
            deletlTableArr[nowStep_num][minStep_num] = jQuery.extend(true,{},etlTableArr);
            addElement("dataConversion", nowStep_num, "数据转换", value, minStep_num);
            htm("task_" + task_num + "_dataConversion_" + nowStep_num + '_' + minStep_num, 'dataConversion');
            var $transContent = $('#task_' + task_num + '_dataConversion_' + nowStep_num + '_' + minStep_num);
            $transContent.find('.table-label').html(extrationTable[nowTask_num][nowStep_num - 1]);
            $transContent.find('.multi-select').attr('id', 'task_' + task_num + '_transColumns_' + nowStep_num + '_' + minStep_num);
            for (var i = 0; i < selarr[nowTask_num][nowStep_num - 1][minStep_num].length; i++) {
                $('#task_' + task_num + '_transColumns_' + nowStep_num + '_' + minStep_num)[0].options.add(new Option(selarr[nowTask_num][nowStep_num - 1][minStep_num][i], selarr[nowTask_num][nowStep_num - 1][minStep_num][i]));
            }
            transarr[nowTask_num][nowStep_num - 1] = new Array();
            multiSelect('task_' + nowTask_num + '_transColumns_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
            transformAdd();
            var outputtrans=$transContent.find('.output-arr');
            outputResult(outputtrans,selarr[nowTask_num][nowStep_num - 1][minStep_num]);
            //outputTable($outputtrans);
        }
        if (value == 'dataAggregation') {
            minStep_num += 1;
            deletlTableArr[nowStep_num][minStep_num] = jQuery.extend(true,{},etlTableArr);
            addElement("dataAggregation", nowStep_num, "数据聚合", value, minStep_num);
            htm("task_" + task_num + "_dataAggregation_" + nowStep_num + '_' + minStep_num, 'dataAggregation');
            var $aggContent = $('#task_' + task_num + '_dataAggregation_' + nowStep_num + '_' + minStep_num);
            $aggContent.find('.multi-select').attr('id', 'task_' + task_num + '_aggColumns_' + nowStep_num + '_' + minStep_num);
            $aggContent.find('.table-label').html(extrationTable[nowTask_num][nowStep_num - 1]);
            $aggContent.find('.function').children().attr('disabled','disabled');
            selarr[nowTask_num][nowStep_num - 1][minStep_num]=selarr[nowTask_num][nowStep_num - 1][minStep_num-1].concat();
            for (var i = 0; i < selarr[nowTask_num][nowStep_num - 1][minStep_num].length; i++) {
                $aggContent.find('.chosen-select')[0].options.add(new Option(selarr[nowTask_num][nowStep_num - 1][minStep_num][i], selarr[nowTask_num][nowStep_num - 1][minStep_num][i]));
                $aggContent.find('.multi-select')[0].options.add(new Option(selarr[nowTask_num][nowStep_num - 1][minStep_num][i], selarr[nowTask_num][nowStep_num - 1][minStep_num][i]));
            }
            $aggContent.find('.chosen-select').chosen().change(function () {
                $aggContent.find('.function').children().removeAttr('disabled');
            });
            $aggContent.find('.chosen-select').next().addClass('chosen-width');
            multiSelect('task_' + nowTask_num + '_aggColumns_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
            transformAdd();
            var outputagg=$aggContent.find('.output-arr');
            //outputTable($outputagg);
            outputResult(outputagg,selarr[nowTask_num][nowStep_num - 1][minStep_num]);
        }
        if (value == 'codeMapping') {
            minUnits_num += 1;
            minStep_num = 1;
            nowTask_num = task_num;
            nowStep_num = minUnits_num;
            expmap_num = 1;
            deletlTableArr[nowStep_num]=new Array();
            delETLtableArrs[nowStep_num] = jQuery.extend(true,{},ETLtableArrs);
            deletlTableArr[nowStep_num][minStep_num] = jQuery.extend(true,{},etlTableArr);
            addElement("codeMapping", nowStep_num, "代码映射", value, minStep_num);
            htm("task_" + task_num + "_codeMapping_" + nowStep_num + '_' + minStep_num, 'codeMapping');
            var $mappingContent = $('#task_' + task_num + '_codeMapping_' + nowStep_num + '_' + minStep_num);
            $mappingContent.find('.select-1').attr('id', 'task_' + task_num + '_mapColumns-1_' + nowStep_num + '_' + minStep_num);
            $mappingContent.find('.select-2').attr('id', 'task_' + task_num + '_mapColumns-2_' + nowStep_num + '_' + minStep_num);
            // “选择映射表” selects加入options
            var $select = $mappingContent.find('.chosen-select');
            for (var key in etlTableArr[nowTask_num]) {
                if(key!='remove'){
                    $select[0].options.add(new Option(key, key));
                    $select[1].options.add(new Option(key, key));
                }
            }
            $select.children().attr('disabled','disabled');
            $mappingContent.find('.mapName').keyup(function(){
                if($(this).val()!=''){
                    $select.children().removeAttr('disabled');
                }
            })
            multiSelect('task_' + task_num + '_mapColumns-1_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
            multiSelect('task_' + task_num + '_mapColumns-2_' + nowStep_num + '_' + minStep_num, nowTask_num, nowStep_num, minStep_num);
            refreshStyle();
            transUnitAdd("join");
            transformAdd();
            mapName[nowStep_num]="";
            extrationTable[nowTask_num][nowStep_num - 1]={};
            extrationTable[nowTask_num][nowStep_num - 1].table1="";
            extrationTable[nowTask_num][nowStep_num - 1].table2="";
            selarr[nowTask_num][nowStep_num - 1]={};
        }
        if(value=='dataLoading'){
            $('#task_'+nowTask_num).find('.etlStep').css('visibility','hidden');
            minStep_num += 1;
            addElement("dataLoading", nowStep_num, "数据加载", value, minStep_num);
            htm("task_" + task_num + "_dataLoading_" + nowStep_num + '_' + minStep_num, 'dataLoading');
            var $mappingContent = $('#task_' + task_num + '_dataLoading_' + nowStep_num + '_' + minStep_num);
            var temtable = $mappingContent.find('.temtable');
            // dataTable插件初始化
            temtable.DataTable({
                "aLengthMenu": [[-1, 5, 10, 20, 30, 40, 50], ["All", "5", "10", "20", "30", "40", "50"]],
                "bAutoWidth": false,
                searching: false,
                ordering:  false,
                info:false,
                lengthChange:false,
            });
            // 插入datatable tbody内容
            var t = temtable.DataTable();
            var temCol=jsonTemplate[templateTable];
            // var temCol=templateJson[templateTable];
            t.clear();
            var op="<option value='-1'></option>";
            if(nowStep!='codeMapping'){
                selarr[nowTask_num][nowStep_num - 1][minStep_num]=selarr[nowTask_num][nowStep_num - 1][minStep_num-1].concat();
                for(var i=0;i<selarr[nowTask_num][nowStep_num - 1][minStep_num].length;i++){
                    op+="<option value="+selarr[nowTask_num][nowStep_num - 1][minStep_num][i]+">"+selarr[nowTask_num][nowStep_num - 1][minStep_num][i]+"</option>";
                }
            }else{
                for(var i=0;i<ETLtableArrs[nowTask_num][mapName[nowStep_num]].length;i++){
                    op+="<option value="+ETLtableArrs[nowTask_num][mapName[nowStep_num]][i]+">"+ETLtableArrs[nowTask_num][mapName[nowStep_num]][i]+"</option>";
                }
            }

            // 模板表里自增列提取出来放到一个数组里
            var addcol=new Array();
            for(var i in temCol){
                if(i!='remove'){
                    if(temCol[i]["c3"]=="YES"){
                        t.row.add([
                            temCol[i]["c0"],temCol[i]["c1"],temCol[i]["c2"],temCol[i]["c4"],"<select  data-placeholder='-请选择-' multiple class='form-sel mapSelect change' tabindex='2'>"+op+"</select>"
                        ]).draw(false);
                        addcol.push(temCol[i]['c0']);
                    }else{
                        t.row.add([
                            temCol[i]["c0"],temCol[i]["c1"],temCol[i]["c2"],temCol[i]["c4"],"<select  data-placeholder='-请选择-' class='form-sel mapSelect' tabindex='2'>"+op+"</select>"
                        ]).draw(false);
                    }
                }
            }
            // select插件初始化
            $mappingContent.find('.mapSelect').chosen();
            var json={};
            for(var i=0;i<addcol.length;i++){
                json[addcol[i]]=1;
            }
            $mappingContent.attr('json',JSON.stringify(json));
            transformAdd();
        }
        nowStep = value;
    });

    //点击展开步骤
    $('#taskContent').delegate('.step-navs', 'click', function () {
        $(this).toggleClass('step-active');
        var selectstep=$(this).children("li");
        if($(this).hasClass('step-active')){
            for(var a in selectstep){
                selectstep.eq(a).css({
                    'transition-delay':""+(30*a)+"ms",
                    'transform':"translate("+(55+38*a)+"px,0)"
//                        var n=selectstep.length-1;
//                        'transform':"translate("+(120*Math.cos(90/n*a*(Math.PI/180)))+"px,"+(-120*Math.sin(90/n*a*(Math.PI/180)))+"px"
                });//弧度=角度*Math.PI/180  弧长L=α（弧度）x r(半径) （弧度制）
            }
        }
        else{selectstep.removeAttr('style');}
    });

    //弹出式导航步骤触发change
    $('#taskContent').delegate('.step-navs li', 'click', function () {
        var navnum=$(this).index();
        var stepnav=navnum+1;//对应select项
        var preid=$(this).parent().parent().next().children().last();//获取上一步骤是操作哪个nav
        var prenav=preid.attr("id").split('_')[2];
        var stepopt=$(this).parent().prev();
        if(prenav=="dataExtraction"){ //抽取
            if(preid.find('.etlSelectTable').val()==-1){
                sweetAlert("请选择抽取函数！");
                return;
            }
            if(preid.find('.output-arr li').length<1){
                sweetAlert("请选择列！");
                return;
            }
        }
        if(prenav=="dataCleaning"){ //清洗
            if(preid.find('.cleanFunction option:selected').val()==-1){
                sweetAlert("请选择清洗函数！");
                return;
            }
            if(preid.find('.extcleanLabel').children().last().html().split('(')[1].length<2){
                sweetAlert("请选择清洗参数！");
                return;
            }
        }
        if(prenav=="dataConversion"){ //转换
            if(preid.find('.transFunction option:selected').val()==-1){
                sweetAlert("请选择转换函数！");
                return;
            }
            if(preid.find('.extTransLabel').children().last().html().split('(')[1].length<2){
                sweetAlert("请选择转换参数！");
                return;
            }
        }
        if(prenav=="codeMapping"){ //映射
            if(preid.find('.mapFunction option:selected').val()==-1){
                sweetAlert("请选择映射函数！");
                return;
            }
            if(preid.find('.mapName').val()==''){
                sweetAlert("请填写别名！");
                return;
            }
            if(preid.find('.chosen-select.m1 option:selected').val()==-1||preid.find('.chosen-select.m2 option:selected').val()==-1){
                sweetAlert("请选择映射表！");
                return;
            }
            if(mapcels1==''||mapcels2==''){
                sweetAlert("映射键不能为空！");
                return;
            }
        }
        if(prenav=="dataAggregation"){ //聚合
            if(typeof(preid.find('.chosen-select option:selected').val())=='undefined'){
                sweetAlert("请选择聚合分组列！");
                return;
            }
            if(preid.find('.function option:selected').val()==-1){
                sweetAlert("请选择聚合函数！");
                return;
            }
            if(preid.find('.table td').length<1){
                sweetAlert("请选择列名！");
                return;
            }
            if(preid.find('.table input').val()==''){
                sweetAlert("别名不能为空！");
                return;
            }
        }

        stepopt.children('option').eq(stepnav).attr('selected','selected');//触发定义好的change事件
        stepopt.trigger('change');
    })
    //----------------------------------------------------etl操作按钮end-------------------------------------------------------




    //----------------------------------------------------抽取star----------------------------------------------------------
    $('#taskContent').delegate('.etlSelectTable', 'change', function () {
        var $para=$(this).parent().parent().parent().parent()
        var outputname=$para.find('.output-name');
        var outputarr=$para.find('.output-arr');
        var outputexpress=$para.find('.extrationExpression');
        var slelctname=$(this).val();
        outputarr.children().remove();//重置
        outputexpress.html('');
        outputname.html(slelctname);
        // 选择的table改变时etlColumns重新加载，初始化
        var columnssel = $(this).parent().parent().next().children('div').children('select');
        if (columnssel.children().length > 0) {
            columnssel.empty();
        }
        var tabb = $(this).val();
        for (var i in ETLtableArrs[nowTask_num][tabb].sort()) {
            if(i!='remove'){
                columnssel[0].options.add(new Option(ETLtableArrs[nowTask_num][tabb][i], ETLtableArrs[nowTask_num][tabb][i]));
            }
        }
        columnssel.multiSelect('refresh');
        // 列拼接的字符串初始化,每次table变化都要置空
        selarr[nowTask_num][nowStep_num - 1][minStep_num] = [];
        // extrationTable初始化,每次nowStep_now变化都要置空
        extrationTable[nowTask_num][nowStep_num - 1] = [];
        // 表达式内容置空
        $tabContent = $(this).parent().parent().parent();
        $tabContent.find('.extrationExpression').text("");
        extrationTable[nowTask_num][nowStep_num - 1] = tabb;
        // 选择table后将表达式项显示出来,并把table拼进去并显示出来
        $tabContent.find('.extExpressionLabel').removeClass('hide');
        extrationExpression[nowTask_num][nowStep_num - 1] = "select(" + extrationTable[nowTask_num][nowStep_num - 1] + ")";
        $tabContent.find('.extrationExpression').text(extrationExpression[nowTask_num][nowStep_num - 1]);
        transform1.templates[nowTask_num].units[nowStep_num - 1].tableName = tabb;
    });
    //----------------------------------------------------抽取end-----------------------------------------------------------




    //----------------------------------------------------清洗star------------------------------------------------------------
    // 清洗函数
    $('#taskContent').delegate('.cleanFunction', 'change', function () {
        cleanExpressions = "";
        cleanfun = $(this).val();
        cleanExpressions = cleanfun + "()";
        var cleanspare = $(this).parent().parent();
        functionOption = cleanspare;//用来重置函数的
        var $expression = cleanspare.parent().parent().find('.cleanExpression_' + expclean_num);
        cleanspare.find('.multi-select').multiSelect('refresh');
        $expression.text(cleanExpressions);
        downselectArr('cleanYear','cleanMonth','cleanSource','cleanTarget','cleannewest','cleancurSource');
        optionReset(cleanspare);//重置函数
        functionReset('values','valuecur','cleanYear','cleanMonth','newest','type','cleanSource','cleanTarget','cleancurSource');
        if (cleanfun == 'curMonth'){
            spiltTwo(cleanspare,'clear-function','clean-curmonth-type');
        }
        if (cleanfun.slice(-5) == 'Filed'){
            spiltTwo(cleanspare,'clean-sourceFiled','clean-targetFiled');
        }
        if (cleanfun.slice(-5) == 'Value'){
            spiltTwo(cleanspare,'clean-sourcecurFiled','clean-value');
        }
        if(cleanfun == 'newest'){
            spiltTwo(cleanspare,'clean-newFiled','clean-newest');
        }
        cleanvalreset();
    });

    // 清洗函数curMonth
    $('#taskContent').delegate('.type', 'change', function () {
        cleanExpressions = cleanfun + "()";
        var cleanspare = $(this).parent().parent();
        functionOption=cleanspare;
        $(this).parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        functionReset('values','cleanYear','cleanMonth');
        valuesClean=cleanYearClean=cleanMonthClean='';
        if ($(this).val() == 1) {
            spiltOne(cleanspare,'clean-curmonth-timestring');
        } else {
            spiltTwo(cleanspare,'clean-curmonth-leftcol','clean-curmonth-rightcol');
        }
        cleanspare.find('.clean-curmonth-type').removeClass('hide');
    });

    cleanExpress();//函数实时输出

    // "继续清洗"操作
    $('#taskContent').delegate('.continueClean', 'click', function () {
        cleannum = ++expclean_num;
        var u1=cleannum-1;
        var $pare = $(this).parent().parent().parent();
        var funval=$pare.find(".cleanExpression_" + u1).html();
        funvaild=$pare;
        namevaild=funval.substring(0,funval.indexOf('('));
        if(funval==''){
            expclean_num=expclean_num-1;
            sweetAlert('请先选择函数！');
            return;
        }
        if(funval.substring(funval.indexOf('('),funval.indexOf(')')).length<2){
            expclean_num=expclean_num-1;
            sweetAlert('请先选择参数！');
            return;
        }
        if(unemptyVaild()==false){
            expclean_num=expclean_num-1;
            sweetAlert('不能有空参数！');
            return;
        }
        var $exhtml = "<div class='ex-add' style='border:1px solid transparent;'>&&</div><div class='ex-expression cleanExpression_" + cleannum + "'></div>";
        $pare.find('.extcleanLabel').append($exhtml);
        var optionfunction=$(this).parent().next().next();
        functionOption=optionfunction;
        $pare.find('.cleanExpression_' + expclean_num).text("");
        optionReset(optionfunction);
        functionReset('cleanFunction','values','cleanYear','cleanMonth','cleannewest','newest','valuecur','type','cleanSource','cleanTarget','cleancurSource');
        cleanvalreset();
    });
    //----------------------------------------------------清洗end------------------------------------------------------------





    //----------------------------------------------------转换star------------------------------------------------------------
    // 选择函数change事件
    $('#taskContent').delegate('.transFunction', 'change', function () {
        transExpressions = "";
        transfun = $(this).val();
        transExpressions = transfun + "()";
        var transpare = $(this).parent().parent();
        functionOption=transpare;
        var $expression = transpare.parent().parent().find('.transExpression_' + exptrans_num);
        $expression.text(transExpressions);
        downselectArr('datayear','datamonth','dataday','transdatafiled','plusfiled','minusfiled','casttoint','casttosrting'
            ,'casttotimestamp','renamefiled','conditioncolumn','conditionvalue','resultcolumn','multiply1','multiply2','divide1','divide2');
        optionReset(transpare);//重置函数
        functionReset('datatype','datayear','datamonth','dataday','datacolumn','transdatafiled','transtype','year','quarter','month'
            ,'plusfiled','transplus','minusfiled','transminus','casttoint','casttosrting','casttotimestamp','currenttime','addcolumnname'
            ,'addcolumnvalue','renamefiled','renameval','conditioncolumn','conditionwhen','conditionvalue','resultcolumn','resultvalue'
            ,'multiply1','multiply2','multiplyvalue','divide1','divide2','dividevalue');
        transallreset();
        switch (transfun){
            case 'currentTime':
                spiltOne(transpare,'trans-currenttime');
                break;
            case 'castToInt':
                spiltOne(transpare,'trans-casttoint');
                break;
            case 'castToString':
                spiltOne(transpare,'trans-casttosrting');
                break;
            case 'castToTimestamp':
                spiltOne(transpare,'trans-casttotimestamp');
                break;
            case 'createDateByYMD':
                spiltTwo(transpare,'trans-function','trans-createdate-type');
                break;
            case 'transDate':
                spiltTwo(transpare,'trans-function','trans-transtype-type');
                break;
            case 'plus':
                spiltTwo(transpare,'trans-plusfiled','trans-transplus');
                break;
            case 'minus':
                spiltTwo(transpare,'trans-minusfiled','trans-transminus');
                break;
            case 'reName':
                spiltTwo(transpare,'trans-renamefiled','trans-renameval');
                break;
            case 'addColumn':
                spiltTwo(transpare,'trans-addcolumnname','trans-addcolumnvalue');
                break;
            case 'ifTrueSet':
                removeHide(transpare,'trans-iftrueset');
                break;
            case 'multiply':
                removeHide(transpare,'trans-multiply');
                break;
            case 'divide':
                removeHide(transpare,'trans-divide');
                break;
        }
    });

    //函数createDateByYMD
    $('#taskContent').delegate('.datatype', 'change', function () {
        var transpare = $(this).parent().parent();
        functionOption=transpare;
        secondReset(transpare,'trans-datayear','trans-datamonth','trans-dataday','trans-datacolumn');
        functionReset('datayear','datamonth','dataday','datacolumn');
        datayearTrans=datamonthTrans=datadayTrans=datacolumnTrans='';
        if ($(this).val() == "type1") {
            spiltThree(transpare,'trans-datayear','trans-datamonth','trans-datacolumn');
        }
        if ($(this).val() == "type2") {
            spiltFour(transpare,'trans-datayear','trans-datamonth','trans-dataday','trans-datacolumn');
        }
        transpare.find('.trans-createdate-type').removeClass('hide');
    });

    //函数transDate
    $('#taskContent').delegate('.transtype', 'change', function () {
        var transpare = $(this).parent().parent();
        functionOption=transpare;
        secondReset(transpare,'trans-transdatafiled','trans-year','trans-quarter','trans-month');
        functionReset('transdatafiled','year','quarter','month');
        transdatafiledTrans=yearTrans=quarterTrans=monthTrans='';
        if ($(this).val() == "1") {
            spiltTwo(transpare,'trans-transdatafiled','trans-year');
        }
        if ($(this).val() == "2") {
            spiltThree(transpare,'trans-transdatafiled','trans-year','trans-month');
        }
        if ($(this).val() == "3") {
            spiltFour(transpare,'trans-transdatafiled','trans-year','trans-quarter','trans-month');
        }
        transpare.find('.trans-transtype-type').removeClass('hide');
    });

    //函数实时输出
    transExpress();
    // "继续转换"的click事件
    $('#taskContent').delegate('.continuetrans', 'click', function () {
        var $pare = $(this).parent().parent().parent();
        var transfunction=$(this).parent().next().next();
        functionOption = transfunction;
        var $output = $pare.find('.output-arr');
        trannum = ++exptrans_num;
        var t1=trannum-1;
        var funvalT=$pare.find(".transExpression_" + t1).html();//必填验证
        funvaild=$pare;
        namevaild=funvalT.substring(0,funvalT.indexOf('('));
        if(funvalT==''){
            exptrans_num=exptrans_num-1;
            sweetAlert('请先选择函数！');
            return;
        }
        if(funvalT.substring(funvalT.indexOf('('),funvalT.indexOf(')')).length<2){
            exptrans_num=exptrans_num-1;
            sweetAlert('请先选择参数！');
            return;
        }
        if(unemptyVaild()==false){
            exptrans_num=exptrans_num-1;
            sweetAlert('不能有空参数！');
            return;
        }
        if(transAddcol()==false){//数组添加值且不能重复
            exptrans_num=exptrans_num-1;
            sweetAlert('添加列已存在，请重新填写！');
            return;
        }
        var $extrhtml = "<div class='ex-add' style='border:1px solid transparent;'>&&</div><div class='ex-expression transExpression_" + trannum + "'></div>";
        $pare.find('.extTransLabel').append($extrhtml);
        outputResult($output,selarr[nowTask_num][nowStep_num - 1][minStep_num]);
        $output.animate({scrollTop: $output.height()},0);
        $pare.find('.transExpression_' + exptrans_num).text("");
        optionReset(transfunction);//重置函数
        functionReset('transFunction','datatype','datayear','datamonth','dataday','datacolumn','transdatafiled','transtype','year','quarter','month'
            ,'plusfiled','transplus','minusfiled','transminus','casttoint','casttosrting','casttotimestamp','currenttime','addcolumnname'
            ,'addcolumnvalue','renamefiled','renameval','conditioncolumn','conditionwhen','conditionvalue','resultcolumn','resultvalue'
            ,'multiply1','multiply2','multiplyvalue','divide1','divide2','dividevalue');
        transallreset()
    });
    //----------------------------------------------------转换end------------------------------------------------------------





    //----------------------------------------------------聚合star------------------------------------------------------------
    // 选择分组列里点击确定按钮后事件
    $('#taskContent').delegate('.groupsel', 'click', function () {
        var $sel = $(this).parent().parent().next().next().find('.multi-select');
        $sel.find('option').removeAttr('disabled');
        for (var i = 0; i < groupArr.length; i++) {
            $sel.find('option[value=' + groupArr[i] + ']').attr('disabled', 'true');
        }
        $sel.multiSelect('refresh');
        aggregationExpression1[nowTask_num][nowStep_num] = "groupBy(" + groupArr.join() + ")";
        $(this).parent().parent().parent().parent().find('.aggregationExpression_1').text(aggregationExpression1[nowTask_num][nowStep_num]);
    });

    // 别名 keyup 事件
    $('#taskContent').delegate('.rename', 'keyup', function () {
        // 循环table
        aggtds=[];
        var tbody=$(this).parent().parent().parent();
        var trs=tbody.find('tr');
        for(var i=0;i<trs.length;i++){
            aggtds.push($(trs[i]).find('td').eq(0).text());
            aggtds.push($(trs[i]).find('td').eq(1).find('input').val());
        }
        aggregationExpression2[nowTask_num][nowStep_num-1]=aggfun+"("+aggtds.join()+")";
        $('#task_'+nowTask_num+'_dataAggregation_'+nowStep_num+ '_' + minStep_num).find('.aggregationExpression_2').text(aggregationExpression2[nowTask_num][nowStep_num-1]);
    });

    // 选择函数change事件
    $('#taskContent').delegate('.function', 'change', function () {
        $(this).parent().parent().parent().find(".groupsel").click();
        aggfun = $(this).val();
        aggregationExpression2[nowTask_num][nowStep_num - 1] = aggfun + "()";
        $('#task_'+nowTask_num+'_dataAggregation_'+nowStep_num+ '_' + minStep_num).find('.aggregationExpression_2').text(aggregationExpression2[nowTask_num][nowStep_num-1]);
        $(this).parent().parent().parent().find('.multi-select').multiSelect('deselect_all');
        $(this).parent().parent().next().removeClass('hide');
    });
    //----------------------------------------------------聚合star------------------------------------------------------------





    //----------------------------------------------------映射star------------------------------------------------------------
    function mappingSel(s, map) {
        s.empty();
        for (var key in etlTableArr[nowTask_num]) {
            if (key == map && key!='remove') {
                for (var i in etlTableArr[nowTask_num][key]) {
                    if(i!='remove'){
                        s[0].options.add(new Option(etlTableArr[nowTask_num][key][i], etlTableArr[nowTask_num][key][i]));
                    }
                }
            }
        }
        s.multiSelect('refresh');
        refreshStyle();
        s.next().find('.custom-header').text(map);
    }

    // “选择映射表”change事件,选择一个tab后对应把列显示出来
    $('#taskContent').delegate('.mappingTables', 'change', function () {
        var maptab = $(this).val();
        var $par = $(this).parent().parent().parent();
        var $output=$par.parent().find('.output-arr');
        var s1 = $par.find('.select-1');
        var s2 = $par.find('.select-2');
        var $expression = $par.parent().find('.mapExpression_' + expmap_num);
        if ($(this).hasClass('m1')) {
            $par.find('.m2').find("option[value='-1']").attr('selected', 'true');
            s2.empty();
            s2.multiSelect('refresh');
            mapcels1 = "";
            mappingSel(s1, maptab);
            marchtable1=new Array(); //存第一个表的数组
            marchtable1=etlTableArr[nowTask_num][maptab].concat();
            extrationTable[nowTask_num][nowStep_num - 1].table1=maptab;
            var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
            var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
            mappingExpression = mapfun + "(" + tab1 + mapcels1 + tab2 + mapcels2 + mapName[nowStep_num] + ")";
            $expression.text(mappingExpression);
            s1.find('.custom-header').text(maptab);
            var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1;
            ETLtableArrs[nowTask_num][mapName[nowStep_num]] = etlTableArr[nowTask_num][tab1];
            //outputMap($output)
            outputResult($output,ETLtableArrs[nowTask_num][mapName[nowStep_num]])
        } else if ($(this).hasClass('m2')) {
            marchtable2=new Array(); //存第二个表的数组
            marchtable2=etlTableArr[nowTask_num][maptab].concat();
            if(marchtable1.toString()==marchtable2.toString()){
                $par.find('.m1').trigger('change');
                sweetAlert('请重新选择不同映射表');
                return;
            }
            mapcels2 = "";
            mappingSel(s2, maptab);
            for(var i=0;i<marchtable1.length;i++){
                var mt1=marchtable1[i];
                for(var j=0;j<marchtable2.length;j++){
                    var mt2=marchtable2[j];
                    if(mt1==mt2){
                        marchtable2.remove(mt2);
                        marchtable2.push(mt2+"_duplicate") ;   //如果table1,table2有重名，则rename
                    }
                }
            }
            etlTableArr[nowTask_num][maptab]=marchtable2.concat();
            extrationTable[nowTask_num][nowStep_num - 1].table2=maptab
            var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
            var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
            mappingExpression = mapfun + "(" + tab1 + mapcels1 + tab2 + mapcels2 + mapName[nowStep_num] + ")";
            $expression.text(mappingExpression);
            s2.find('.custom-header').text(maptab);
            var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1;
            var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2;
            ETLtableArrs[nowTask_num][mapName[nowStep_num]] = etlTableArr[nowTask_num][tab1].concat(etlTableArr[nowTask_num][tab2]);
            //outputMap($output);
            outputResult($output,ETLtableArrs[nowTask_num][mapName[nowStep_num]])
        }
    });

    // “选择函数”change事件
    $('#taskContent').delegate('.mapFunction', 'change', function () {
        $(this).parent().addClass('ext-post-helf-al');
        $(this).parent().next().removeClass('hide');
        //expcleanExpression 数据清洗表达式
        mapfun = $(this).val();
        var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
        var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
        mappingExpression = mapfun + "(" + tab1 + mapcels1 + tab2 + mapcels2 + mapName[nowStep_num] + ")";
        var $pare = $(this).parent().parent().parent();
        var $expression = $pare.find('.mapExpression_' + expmap_num);
        $expression.text(mappingExpression);
        $(this).parent().next().next().val("");
    });

    // “别名value”keyup事件
    $('#taskContent').delegate('.mapName', 'keyup', function () {
        mapName[nowStep_num] = $(this).val();
        $(this).parent().parent().parent().parent().find('.mapname').html(mapName[nowStep_num]);
        var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
        var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
        mappingExpression = mapfun + "(" + tab1 + mapcels1 + tab2 + mapcels2 + mapName[nowStep_num] + ")";
        $(this).parent().parent().parent().parent().find('.ex-expression:last').text(mappingExpression);
    });
    //----------------------------------------------------映射end------------------------------------------------------------




    //----------------------------------------------------加载star------------------------------------------------------------
    $('#taskContent').delegate('.mapSelect', 'change', function () {
        var val=$(this).val();
        var tb=$(this).parent().parent().parent();//tbody
        var index=$(this).parent().parent().index();
        var len=tb.find('tr').length;
        // select option后动态添加下一行
        var sele=tb.find('select');
        //var mtable=$(this).parent().parent().find('.sorting_1').text();
        var mtable=$(this).parent().parent().find("td:first").html();
        for(var i=0;i<sele.length;i++){
            if(val instanceof Array){
                for(var r=0;r<val.length;r++){
                    if($(sele[i]).val() instanceof Array){
                        var sval=$(sele[i]).val();
                        for(var n=0;n<sval.length;n++){
                            if(sval[n]==val[r] && sele[i]!=this){
                                $(sele[i]).val("");
                                $(sele[i]).chosen("destroy");
                                $(sele[i]).chosen();
                                alert("请重新将模板列表 '"+mtable+"' 对应的表列重新选择！");
                                for(var c=0;c<sval.length;c++){
                                    delete loadingArr[nowTask_num][sval[c]];
                                }
                            }
                        }
                    }else{
                        if($(sele[i]).val()==val[r] && sele[i]!=this){
                            $(sele[i]).val("");
                            $(sele[i]).chosen("destroy");
                            $(sele[i]).chosen();
                            alert("请重新将模板列表 '"+mtable+"' 对应的表列重新选择！");
                        }
                    }
                }
            }else{
                if($(sele[i]).val() instanceof Array){
                    var sval=$(sele[i]).val();
                    for(var n=0;n<sval.length;n++){
                        if(sval[n]==val && sele[i]!=this){
                            $(sele[i]).val("");
                            $(sele[i]).chosen("destroy");
                            $(sele[i]).chosen();
                            alert("请重新将模板列表 '"+mtable+"' 对应的表列重新选择！");
                            for(var c=0;c<sval.length;c++){
                                delete loadingArr[nowTask_num][sval[c]];
                            }
                        }
                    }
                }else{
                    if($(sele[i]).val()==val && sele[i]!=this){
                        $(sele[i]).val("");
                        $(sele[i]).chosen("destroy");
                        $(sele[i]).chosen();
                        alert("请重新将模板列表 '"+mtable+"' 对应的表列重新选择！");
                    }
                }
            }
        }
        if(val instanceof Array){
            for(var key in val){
                if(val[key]!='undefined' && key!='remove'){
                    loadingArr[nowTask_num][val[key]]=mtable;
                }
            }
        }else{
            loadingArr[nowTask_num][mtable]=val;
        }
        var names="";
        var $mappingContent = $('#task_' + task_num + '_dataLoading_' + nowStep_num + '_' + minStep_num);
        var json=JSON.parse($mappingContent.attr('json'));
        var templateArr=[];
        for(var key in loadingArr[nowTask_num]){
            if(key!='remove'){
                if(json.hasOwnProperty(loadingArr[nowTask_num][key])){
                    //names+=key+","+loadingArr[nowTask_num][key]+(json[loadingArr[nowTask_num][key]]++)+",";
                    names+=key+","+loadingArr[nowTask_num][key]+(json[loadingArr[nowTask_num][key]]++)+",";
                    templateArr.push(key);
                }else{
                    names+=loadingArr[nowTask_num][key]+","+key+",";
                    templateArr.push(loadingArr[nowTask_num][key]);
                }
            }
        }
        LoadingExpression="selectFileds("+templateArr.join()+") && reName("+names.slice(0,-1)+") && load("+ templateTable +")";
        $('#task_' + task_num + '_dataLoading_' + nowStep_num + '_' + minStep_num).find('.ex-expression').text(LoadingExpression);
    });
    //----------------------------------------------------加载end------------------------------------------------------------







    //----------------------------------------------------数据清洗与转换函数封装star------------------------------------------
    //重置函数
    function optionReset(optionFun) {
        optionFun.find('.ext-post').removeClass('ext-post-helf-l');
        optionFun.children().not('.ext-title').not('.ext-post').addClass('hide');
    }

    //重置二级函数（如年月日）
    function secondReset(optionFun,element1,element2,element3,element4) {
        optionFun.find('.'+element1).removeClass('ext-post-helf-l ext-post-three-l ext-post-four-l');
        optionFun.find('.'+element2).removeClass('ext-post-helf-r ext-post-three-m ext-post-four-m');
        optionFun.find('.'+element3).removeClass('ext-post-three-m ext-post-three-r ext-post-four-m');
        optionFun.find('.'+element4).removeClass('ext-post-three-r ext-post-four-r');
    }

    //函数值清空,使用前要先给functionreset赋值
    function functionReset() {
        for(var i in arguments){
            functionOption.find('.'+arguments[i]).val('');
            functionOption.find('.'+arguments[i]).find("option[value='-1']").attr('selected', 'true');
        }
        functionOption='';
    }

    //下拉框数组
    function downselectArr() {
        for(var i in arguments){
            var ele=arguments[i];
            functionOption.find('.'+arguments[i]+' option:gt(0)').remove();
            $.each(selarr[nowTask_num][nowStep_num - 1][minStep_num],function (key,val) {
                functionOption.find('.'+ele).append("<option value='"+val+"'>"+val+"</option>");
            })
            functionOption.find('.'+ele).children().eq(0).attr("disabled","disabled");
        }
    }

    //移除隐藏
    function removeHide(optionFun,element) {
        optionFun.find('.'+element).removeClass('hide');
    }

    //函数的四种布局布局
    function spiltOne(optionFun,element) {
        optionFun.find('.'+element).removeClass('hide').addClass('ext-post-one');
        optionFun.children().not('.ext-title').not('.ext-post').not('.'+element).addClass('hide');
    }
    function spiltTwo(optionFun,left,right) {
        optionFun.find('.'+left).removeClass('hide').addClass('ext-post-helf-l');
        optionFun.find('.'+right).removeClass('hide').addClass('ext-post-helf-r');
        optionFun.children().not('.ext-title').not('.ext-post').not('.'+left).not('.'+right).addClass('hide');
    }
    function spiltThree(optionFun,one,two,three) {
        optionFun.find('.'+one).removeClass('hide').addClass('ext-post-three-l');
        optionFun.find('.'+two).removeClass('hide').addClass('ext-post-three-m');
        optionFun.find('.'+three).removeClass('hide').addClass('ext-post-three-r');
        optionFun.children().not('.ext-title').not('.ext-post').not('.'+one).not('.'+two).not('.'+three).addClass('hide');
    }
    function spiltFour(optionFun,one,two,three,four) {
        optionFun.find('.'+one).removeClass('hide').addClass('ext-post-four-l');
        optionFun.find('.'+two).removeClass('hide').addClass('ext-post-four-m');
        optionFun.find('.'+three).removeClass('hide').addClass('ext-post-four-m');
        optionFun.find('.'+four).removeClass('hide').addClass('ext-post-four-r');
        optionFun.children().not('.ext-title').not('.ext-post').not('.'+one).not('.'+two).not('.'+three).not('.'+four).addClass('hide');
    }

    //清洗函数表达式
    function cleanExpress(){
        cleanvalreset();
        $('#taskContent').delegate('.values', 'keyup', function () {//curMonth
            valuesClean=$(this).val()
            cleanExpressions = cleanfun + "(" + valuesClean + ")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.cleanYear', 'change', function () {//curMonth
            cleanYearClean=$(this).val();
            cleanExpressions = cleanfun + "(" + cleanYearClean + cleanMonthClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.cleanMonth', 'change', function () {
            cleanMonthClean=','+$(this).val();
            cleanExpressions = cleanfun + "(" + cleanYearClean + cleanMonthClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.cleanSource', 'change', function () {//--Filed
            cleanSourceClean=$(this).val();
            cleanExpressions = cleanfun + "(" + cleanSourceClean + cleanTargetClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.cleanTarget', 'change', function () {
            cleanTargetClean=','+$(this).val();
            cleanExpressions = cleanfun + "(" + cleanSourceClean + cleanTargetClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.cleancurSource', 'change', function () {//--Value
            cleancurSourceClean=$(this).val();
            cleanExpressions = cleanfun + "(" + cleancurSourceClean + valuecurClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.valuecur', 'keyup', function () {
            valuecurClean=','+$(this).val();
            cleanExpressions = cleanfun + "(" + cleancurSourceClean + valuecurClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.cleannewest', 'change', function () {//--newest
            cleannewestClean=$(this).val();
            cleanExpressions = cleanfun + "(" + cleannewestClean + newestClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });
        $('#taskContent').delegate('.newest', 'keyup', function () {
            newestClean=','+$(this).val();
            cleanExpressions = cleanfun + "(" + cleannewestClean + newestClean +")";
            $(this).parent().parent().parent().parent().find('.cleanExpression_' + expclean_num).text(cleanExpressions);
        });

    }

    //转换函数表达式
    function transExpress() {
        transallreset();
        $('#taskContent').delegate('.currenttime', 'keyup', function () {//currentTime
            currenttimeTrans=$(this).val()
            transExpressions = transfun + "(" + currenttimeTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.casttoint', 'change', function () {//castToInt
            casttointTrans=$(this).val()
            transExpressions = transfun + "(" + casttointTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.casttosrting', 'change', function () {//castToString
            casttosrtingTrans=$(this).val()
            transExpressions = transfun + "(" + casttosrtingTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.casttotimestamp', 'change', function () {//castToTimestamp
            casttotimestampTrans=$(this).val()
            transExpressions = transfun + "(" + casttotimestampTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //plus
        $('#taskContent').delegate('.plusfiled', 'change', function () {
            plusfiledTrans=$(this).val();
            transExpressions = transfun + "(" + plusfiledTrans + transplusTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.transplus', 'keyup', function () {
            transplusTrans=','+$(this).val();
            transExpressions = transfun + "("+ plusfiledTrans + transplusTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //minus
        $('#taskContent').delegate('.minusfiled', 'change', function () {
            minusfiledTrans=$(this).val();
            transExpressions = transfun + "(" + minusfiledTrans + transminusTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.transminus', 'keyup', function () {
            transminusTrans=','+$(this).val();
            transExpressions = transfun + "("+ minusfiledTrans + transminusTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //reName
        $('#taskContent').delegate('.renamefiled', 'change', function () {
            renamefiledTrans=$(this).val();
            transExpressions = transfun + "(" + renamefiledTrans + renamevalTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.renameval', 'keyup', function () {
            renamevalTrans=','+$(this).val();
            transExpressions = transfun + "("+ renamefiledTrans + renamevalTrans + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //addColumn
        $('#taskContent').delegate('.addcolumnname', 'keyup', function () {
            addcolumnnameTrans=$(this).val();
            transExpressions = transfun + "(" + addcolumnnameTrans + addcolumnvalue +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.addcolumnvalue', 'keyup', function () {
            addcolumnvalue=','+$(this).val();
            transExpressions = transfun + "("+ addcolumnnameTrans + addcolumnvalue + ")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //multiply
        $('#taskContent').delegate('.multiply1', 'change', function () {
            multiply1Trans=$(this).val();
            transExpressions = transfun + "(" + multiply1Trans + multiply2Trans+ multiplyvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.multiply2', 'change', function () {
            multiply2Trans=','+$(this).val();
            transExpressions = transfun + "(" + multiply1Trans + multiply2Trans+ multiplyvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.multiplyvalue', 'keyup', function () {
            multiplyvalueTrans=','+$(this).val();
            transExpressions = transfun + "(" + multiply1Trans + multiply2Trans+ multiplyvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //divide
        $('#taskContent').delegate('.divide1', 'change', function () {
            divide1Trans=$(this).val();
            transExpressions = transfun + "(" + divide1Trans + divide2Trans+ dividevalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.divide2', 'change', function () {
            divide2Trans=','+$(this).val();
            transExpressions = transfun + "(" + divide1Trans + divide2Trans+ dividevalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.dividevalue', 'keyup', function () {
            dividevalueTrans=','+$(this).val();
            transExpressions = transfun + "(" + divide1Trans + divide2Trans+ dividevalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //createDateByYMD
        $('#taskContent').delegate('.datayear', 'change', function () {
            datayearTrans=$(this).val();
            transExpressions = transfun + "(" + datayearTrans + datamonthTrans+ datadayTrans+ datacolumnTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.datamonth', 'change', function () {
            datamonthTrans=','+$(this).val();
            transExpressions = transfun + "(" + datayearTrans + datamonthTrans+ datadayTrans+ datacolumnTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.dataday', 'change', function () {
            datadayTrans=','+$(this).val();
            transExpressions = transfun + "(" + datayearTrans + datamonthTrans+ datadayTrans+ datacolumnTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.datacolumn', 'keyup', function () {
            datacolumnTrans=','+$(this).val();
            transExpressions = transfun + "(" + datayearTrans + datamonthTrans+ datadayTrans+ datacolumnTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //transData
        $('#taskContent').delegate('.transdatafiled', 'change', function () {
            transdatafiledTrans=$(this).val();
            transExpressions = transfun + "(" + transdatafiledTrans + yearTrans+ quarterTrans+ monthTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.year', 'keyup', function () {
            yearTrans=','+$(this).val();
            transExpressions = transfun + "(" + transdatafiledTrans + yearTrans+ quarterTrans+ monthTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.quarter', 'keyup', function () {
            quarterTrans=','+$(this).val();
            transExpressions = transfun + "(" + transdatafiledTrans + yearTrans+ quarterTrans+ monthTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.month', 'keyup', function () {
            monthTrans=','+$(this).val();
            transExpressions = transfun + "(" + transdatafiledTrans + yearTrans+ quarterTrans+ monthTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        //ifTrueSet
        $('#taskContent').delegate('.conditioncolumn', 'change', function () {
            conditioncolumnTrans='"'+$(this).val();
            transExpressions = transfun + "(" + conditioncolumnTrans + conditionwhenTrans+ conditionvalueTrans+ resultcolumnTrans +resultvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.conditionwhen', 'change', function () {
            conditionwhenTrans=$(this).val();
            transExpressions = transfun + "(" + conditioncolumnTrans + conditionwhenTrans+ conditionvalueTrans+ resultcolumnTrans +resultvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.conditionvalue', 'keyup', function () {
            conditionvalueTrans=$(this).val()+'"';
            transExpressions = transfun + "(" + conditioncolumnTrans + conditionwhenTrans+ conditionvalueTrans+ resultcolumnTrans +resultvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.resultcolumn', 'change', function () {
            resultcolumnTrans=','+$(this).val();
            transExpressions = transfun + "(" + conditioncolumnTrans + conditionwhenTrans+ conditionvalueTrans+ resultcolumnTrans +resultvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
        $('#taskContent').delegate('.resultvalue', 'keyup', function () {
            resultvalueTrans=','+$(this).val();
            transExpressions = transfun + "(" + conditioncolumnTrans + conditionwhenTrans+ conditionvalueTrans+ resultcolumnTrans +resultvalueTrans +")";
            $(this).parent().parent().parent().parent().find('.transExpression_' + exptrans_num).text(transExpressions);
        });
    }

    //数组添加___验证重复添加(添加值，数组push值)
    function transAddcol(){
        var tabb=extrationTable[nowTask_num][nowStep_num - 1];
        console.log('tabb:'+tabb);
        console.log(etlTableArr[nowTask_num]);
        function repeattransAdd(elem) {
            if(elem!=""){
                if($.inArray(elem,selarr[nowTask_num][nowStep_num - 1][minStep_num])>-1) return false;
                selarr[nowTask_num][nowStep_num - 1][minStep_num].push(elem);
                etlTableArr[nowTask_num][tabb].push(elem);
            }
        }
        function repeattransilceAdd(elem) {
            if(elem!=""){
                var add=elem.slice(1);
                if($.inArray(add,selarr[nowTask_num][nowStep_num - 1][minStep_num])>-1) return false;
                selarr[nowTask_num][nowStep_num - 1][minStep_num].push(add);
                etlTableArr[nowTask_num][tabb].push(add);
            }
        }
        function changetransAdd(elem,removearr) {
            if(elem!=""){
                var add=elem.slice(1);
                if($.inArray(add,selarr[nowTask_num][nowStep_num - 1][minStep_num])>-1) return false;
                selarr[nowTask_num][nowStep_num - 1][minStep_num].remove(removearr);
                selarr[nowTask_num][nowStep_num - 1][minStep_num].push(add);
                etlTableArr[nowTask_num][tabb].remove(removearr);
                etlTableArr[nowTask_num][tabb].push(add);
            }
        }
        if(repeattransilceAdd(transplusTrans)==false) return false;
        if(repeattransilceAdd(transminusTrans)==false) return false;
        if(repeattransAdd(currenttimeTrans)==false) return false;
        if(repeattransAdd(addcolumnnameTrans)==false) return false;
        if(repeattransilceAdd(datacolumnTrans)==false) return false;
        if(repeattransilceAdd(multiplyvalueTrans)==false) return false;
        if(repeattransilceAdd(dividevalueTrans)==false) return false;
        if(changetransAdd(renamevalTrans,renamefiledTrans)==false) return false;
        transvalreset();
    }

    //各种函数不为空验证($para,函数名)
    function unemptyVaild() {
        function unempt(f,n){
            switch (n){
                //数据清洗
                case 'eqFiled':
                case 'gtFiled':
                case 'egtFiled':
                case 'ltFiled':
                case 'eltFiled':
                    if(f.find(".cleanSource").val()==null || f.find(".cleanTarget").val()==null) return false;
                    break;
                case 'eqValue':
                case 'gtValue':
                case 'egtValue':
                case 'ltValue':
                case 'eltValue':
                    if(f.find(".cleancurSource").val()==null || f.find(".valuecur").val()=='') return false;
                    break;
                case 'newest':
                    if(f.find(".cleannewest").val()==null || f.find(".newest").val()=='') return false;
                    break;
                case 'curMonth':
                    if(f.find(".values").val()==''&&(f.find(".cleanYear").val()==null || f.find(".cleanMonth").val()==null)) return false;
                    break;
                //数据转换
                case 'plus':
                    if(f.find(".plusfiled").val()==null || f.find(".transplus").val()=='') return false;
                    break;
                case 'minus':
                    if(f.find(".minusfiled").val()==null || f.find(".transminus").val()=='') return false;
                    break;
                case 'castToInt':
                    if(f.find(".casttoint").val()==null) return false;
                    break;
                case 'castToString':
                    if(f.find(".casttosrting").val()==null) return false;
                    break;
                case 'castToTimestamp':
                    if(f.find(".casttotimestamp").val()==null) return false;
                    break;
                case 'currentTime':
                    if(f.find(".renamefiled").val()=='') return false;
                    break;
                case 'addColumn':
                    if(f.find(".addcolumnname").val()=='' || f.find(".addcolumnvalue").val()=='') return false;
                    break;
                case 'reName':
                    if(f.find(".renamefiled").val()==null || f.find(".renameval").val()=='') return false;
                    break;
                case 'multiply':
                    if(f.find(".multiply1").val()==null || f.find(".multiply2").val()==null || f.find(".multiplyvalue").val()=='') return false;
                    break;
                case 'divide':
                    if(f.find(".divide1").val()==null || f.find(".divide2").val()==null || f.find(".dividevalue").val()=='') return false;
                    break;
                case 'ifTrueSet':
                    if(f.find(".conditioncolumn").val()==null || f.find(".conditionwhen").val()==null || f.find(".conditionvalue").val()=='' || f.find(".resultcolumn").val()==null || f.find(".resultvalue").val()=='') return false;
                    break;
                case 'createDateByYMD':
                    if(f.find(".datayear").val()==null || f.find(".datamonth").val()==null || f.find(".datacolumn").val()=='') return false;
                    break;
                case 'transDate':
                    if(f.find(".transdatafiled").val()==null || f.find(".year").val()=='') return false;
                    break;
            }
        }
        if(unempt(funvaild,namevaild)==false) return false;
        funvaild='';
        namevaild='';
    }

    //数据清洗所有函数定义的全局变量清空
    function cleanvalreset() {
        valuesClean=cleanYearClean=cleanMonthClean=valuecurClean=cleanSourceClean=cleanTargetClean=cleannewestClean=newestClean=cleancurSource="";
    }

    //数据转换所有函数定义的全局变量清空（一个push值，一个所有值）
    function transvalreset() {
        transplusTrans=transminusTrans=currenttimeTrans=addcolumnnameTrans=datacolumnTrans=multiplyvalueTrans=dividevalueTrans=renamefiledTrans=renamevalTrans='';
    }
    function transallreset() {
        currenttimeTrans=casttointTrans=casttosrtingTrans=casttotimestampTrans=plusfiledTrans=transplusTrans=minusfiledTrans=transminusTrans=renamefiledTrans=renamevalTrans=addcolumnnameTrans=addcolumnvalue=multiply1Trans=multiply2Trans=multiplyvalueTrans='';
        divide1Trans=divide2Trans=dividevalueTrans=datayearTrans=datamonthTrans=datadayTrans=datacolumnTrans=transdatafiledTrans=yearTrans=quarterTrans=monthTrans=conditioncolumnTrans=conditionwhenTrans=conditionvalueTrans=resultcolumnTrans=resultvalueTrans='';
    }
    //----------------------------------------------------数据清洗与转换函数封装end------------------------------------------




    //----------------------------------------------------step添加步骤封装的函数star-----------------------------------------
    //点击步骤不同生成不同的导航
    function addElement(id, num, name, value, min_num) {
        $('#task_' + task_num + '_items').children('.active').removeClass('active');
        if (value == 'dataExtraction' || value == 'codeMapping') {
            $('#task_' + task_num + '_items').append("<p id='task_" + task_num + "_unit" + num + "' class='flip text-center btn btn-rounded'><i class='fa fa-minus-square-o' style='margin-right:15px;color:#cacaca'></i><span class='fa fa-align-right text-pinku' style='margin-right:5px; font-size: 12px'></span>单元"+num+"</p><li class='active task_" + task_num + "_unit" + num + "' style='margin-top:0;'><a data-toggle='tab' href='#task_" + task_num + '_' + id + '_' + num + '_' + min_num + "'>" + name + "</a></li>");
        } else {
            $('#task_' + task_num + '_items').append("<li class='active task_" + task_num + "_unit" + num + "'><i class='icon-bottom'></i></i><a data-toggle='tab' href='#task_" + task_num + '_' + id + '_' + num + '_' + min_num + "'>" + name + "</a></li>");
        }
        $('#task_' + task_num + '_tabContent').children('.active').removeClass('active');
        $('#task_' + task_num + '_tabContent').append("<div class='tab-pane clear active fade in' id=" + "task_" + task_num + "_" + id + "_" + num + "_" + min_num + "></div>");
        $(".selectStep option[value='selected']").attr('selected', 'true');
    }

    //任务下的导航单元显示tooltip,显示表
    function navToolTip() {
        var unitname=$("#task_" + task_num + "_unit" + nowStep_num);
        var unitstepTable=unitname.next().children().first().attr('href');
        var unitstepName=$(""+unitstepTable).find('.output-name').html();//获取当前单元表名
        var unitmapName=$(""+unitstepTable).find('.mapname').html();
        var unitstableName='';
        if(typeof(unitstepName)=="undefined"){
            unitstableName='表名：'+unitmapName;//如果时代码映射则时显示合并后的表
        }else{
            unitstableName='表名：'+unitstepName;
        }
        unitname.attr("title",unitstableName);
        unitname.tooltip({placement:'right',container: 'body'}); //hover导航时显示表名;
        unitname.removeAttr("title");
    }

    //任务下的导航单元显示tooltip,显示表
    function stepToolTip() {  //任务下的导航步骤显示tooltip，显示描述
        var stepname=$(".active.task_" + task_num + "_unit" + nowStep_num).children('a');
        var stepid=stepname.attr('href')
        var stepdes=$(""+stepid).find('.description-tasks').val();//获取当前步骤描述
        var stepdesp='';
        if(stepdes==""){
            stepdesp='描述：空';
        }else{
            stepdesp='描述：'+stepdes;
        }
        stepname.attr("title",stepdesp);
        stepname.tooltip({placement:'right',container: 'body'}); //hover导航时显示表名;
        stepname.removeAttr("title");
    }

    function transformAdd() {
        transform1.templates[nowTask_num].units[nowStep_num - 1].cells[minStep_num - 1] = {};
        transform1.templates[nowTask_num].units[nowStep_num - 1].cells[minStep_num - 1].orderNumber = minStep_num;
    }

    function transUnitAdd(unType) {
        transform1.templates[nowTask_num].units[nowStep_num - 1] = {};
        transform1.templates[nowTask_num].units[nowStep_num - 1].unitType = unType;
        transform1.templates[nowTask_num].units[nowStep_num - 1].orderNumber = nowStep_num;
        transform1.templates[nowTask_num].units[nowStep_num - 1].cells = [];
    }

    //输出右面的表
    function outputResult(element,arr) {
        element.children().remove();
        $.each(arr,function (key,val) {
            element.append('<li>'+val+'</li>')
        })
    }

    //请求加载视图
    function htm(id, url) {
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            data: null,
            dataType: "html",
            success: function (data) {
                $("#" + id).append(data);
            }
        });
    }
    //----------------------------------------------------step添加步骤封装的函数star-----------------------------------------
});

