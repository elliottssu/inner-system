// 初始化config字符串
function config(datasource){
    this.cronExpression="";
    this.datasource=datasource;
    this.company="";
}
function datasource(import1,transform1,menuConfig1){
    this.import=import1;
    this.transform=transform1;
   this.menuConfig=menuConfig1;
}
var datasource =new datasource();
var config=new config(datasource);
var import1={};
import1.parameter=[];
var par={};
par.querySql="";
par.where="";
par.partationKey="";
par.splitPk="";
function saveColumn(){
    columnNames=[].concat(cols);
    // 保存后tableList列表操作按钮变颜色
    var index = tableName.indexOf('.');
    var t = tableName.slice(index + 1);
    etltable[t]=new Array();
    if(columnNames.length>0){
        $("span[id='"+tableName+"_opbtn']").addClass("btn-remove");
        $("span[id='"+tableName+"_opbtn']").html("已操作").removeAttr("disabled");
        $("span[id='"+tableName+"_opbtn']").mouseover(function(){
            $(this).html("修改");
        });
        $("span[id='"+tableName+"_opbtn']").mouseout(function(){
            $(this).html("已操作");
        });
        var column=[];
        var tr;
        var colu;
        for(var i=0;i<columnNames.length;i++){
            tr=document.getElementById(columnNames[i]);
            var convertType=$(tr).children('td').children('select').val();
            var convert=$(tr).children('td').children('.convert').val();
            colu={
                "convertType":convertType,
                "splitter":"",
                "columnName":columnNames[i],
                "convert":convert
            }
            column[i]=colu;
            etltable[t].push(columnNames[i]);
        }
        par=$.extend(true,{},par);
        par.schema=schema;
        par.password=password;
        par.jdbcUrl=jdbcUrl;
        par.column=column;
        par.datasourceName=datasourceName;
        par.description=description;
        //获取splitPK
        var PK=document.getElementsByName('splitPk');
        for(var i=0;i<PK.length;i++){
            var splitPk="";
            if(PK[i].checked==true){
                splitPk=PK[i].value;
                //把值写到相应的splitPK上
                var thistablename=tableName+'_opbtn';
                console.log("这是 分界线");
                console.log(splitPk);
                console.log(thistablename);
               // $('#'+thistablename).parent().next().html(splitPk);
                //$('#'+thistablename).html(splitPk);
                break;
            }
        }
        //获取partationKey
        var key=document.getElementsByName('partationKey');
        for(var i=0;i<key.length;i++){
            var partationKey="";
            if(key[i].checked==true){
                partationKey=key[i].value;
                break;
            }
        }
        //where获取
        var where=$("#where").val();
        par.where=where;
        par.splitPk=splitPk;
        par.partationKey=partationKey;
        par.sourceName=sourceName;
        par.table=tableName;
        par.username=username;
        var length=import1.parameter.length;
        if(length==0){
            import1.parameter[0]=par;
        }else{
            for(var i=0;i<length;i++){
                if(import1.parameter[i].table==par.table){
                    import1.parameter[i]=par;
                    break;
                }
                if((import1.parameter[i]!=par)&&(i==import1.parameter.length-1)){
                    import1.parameter[length]=par;
                }
            }
        }
        console.log("下面是import1.parameter");
        console.log(import1.parameter);
    }else{
        $("span[id='"+tableName+"_opbtn']").removeClass("btn-remove");
        $("span[id='"+tableName+"_opbtn']").html("操作").removeAttr("disabled");
        $("span[id='"+tableName+"_opbtn']").mouseover(function(){
            $(this).html("操作");
        });
        $("span[id='"+tableName+"_opbtn']").mouseout(function(){
            $(this).html("操作");
        });
        var length=import1.parameter.length;
        delete etltable[t];
        if(length>0){
            for(var i=0;i<length;i++){
                if(import1.parameter[i].table=tableName){
                    import1.parameter.splice(i,1);
                    break;
                }
            }
            var b = [];//去除undefined后的结果
            for(var i=0;i<length;i++){
                if(typeof(import1.parameter[i])!='undefined'){
                    b.push(import1.parameter[i]);
                }
            }
            import1.parameter=b;
            console.log(JSON.stringify(import1.parameter));
        }
    }
}
//database汉化
(function () {
    var oLanguage = {
        "oAria": {
            "sSortAscending": ": 升序排列",
            "sSortDescending": ": 降序排列"
        },
        "oPaginate": {
            "sFirst": "首页",
            "sLast": "末页",
            "sNext": ">",
            "sPrevious": "<"
        },
        "sEmptyTable": " ",
        "sInfo": "第 _START_ 到 _END_ 条记录，共 _TOTAL_ 条",
        "sInfoEmpty": "第 0 到 0 条记录，共 0 条",
        "sInfoFiltered": "(从 _MAX_ 条记录中检索)",
        "sInfoPostFix": "",
        "sDecimal": "",
        "sThousands": ",",
        "sLengthMenu": "每页显示条数: _MENU_",
        "sLoadingRecords": "正在载入...",
        "sProcessing": "正在载入...",
        "sSearch": "搜索:",
        "sSearchPlaceholder": "",
        "sUrl": "",
        "sZeroRecords": "没有相关记录"
    }
    $.fn.dataTable.defaults.oLanguage = oLanguage;
    //$.extend($.fn.dataTable.defaults.oLanguage,oLanguage)
})();

//database数据源操作
$(function () {
    $('#data').change(function () {
        var value = $("#data").find("option:selected").val();
        if (value == '1') {
            $('#dataType').removeClass('hide');
            //var dataList=$("#dataList");
            var dataList = document.getElementById("dataList");
            var str;
            post("databaseList", "get", null, function (data) {
                var str = data.data;
                for (var i = 0; i < str.length; i++) {
                    //console.log(dataList)
                    dataList.options.add(new Option(str[i], str[i]));
                }
            }, "json")
        }
    });
    $(".needcenter").hide();
    //$("#tableList_paginate").hide();
    $("#schema").change(function () {
        $(".needcenter").show();
       // $(".schematable #tableList_paginate").show();
        schema = $("#schema").val();
        var tableList = {
            "config": {
                "datasource": {
                    "import": {
                        "parameter": [
                            {
                                "username": username,
                                "password": password,
                                "jdbcUrl": jdbcUrl,
                                "sourceName": sourceName,
                                "schema": schema
                            }
                        ]
                    }
                }
            }
        }
        var tableStr = decodeURI(JSON.stringify(tableList));
        post("queryTables", "post", tableStr, function (data) {
            var tablearray = data.data;
            console.log(tablearray);
            if (data.code != 1) {
                alert(data.msg);
            }
            var t = $('#tableList').DataTable();
            t.clear();
            //$(".pagination").show();
            for (var i = 0; i < tablearray.length; i++) {
                t.row.add([
                    tablearray[i],
                    "<span id='"+tablearray[i]+"_opbtn' class='btn btn-warning btn-sm btn-width' onclick='tableSelect(this)'>操作</span>",
                    //" "
                ]).draw(false);
            }
            console.log("-------下面import1.parameter-------");
            console.log(import1.parameter);
            aloperation(tablearray);
           // $("#tableList_paginate").hide();
        }, "json");
    });
});
//column列选择
var typearray=[];
var columnNames = new Array();
var cols = new Array();
function tableSelect(sel) {
    tableName = $(sel).parent().prev().text();
    $("span[id='"+tableName+"_opbtn']").html("读取中").attr("disabled","true");
//    model关闭时监听事件
    $('#columnModal').on('hidden.bs.modal', function () {
        $("span[id='"+tableName+"_opbtn']").removeAttr("disabled");
//        if(columnNames.length==0){
//            $("span[id='"+tableName+"_opbtn']").html("操作").removeClass("btn-remove");
//        }else{
//            $("span[id='"+tableName+"_opbtn']").html("已操作");
//        }
        if(columnNames.length>0){
            $("span[id='"+tableName+"_opbtn']").html("已操作");
        }else{
        	$("span[id='"+tableName+"_opbtn']").html("操作").removeClass("btn-remove");
        }
    });
    $("#where").val("");
    cols.length=columnNames.length=0;
    $("#content table").remove();
    $(".modal-dialog").removeClass("dialog-width");
    var title = $(".modal-title")[0];
    title.innerHTML = tableName + "列操作";
    var columnList = {
        "config": {
            "datasource": {
                "import": {
                    "parameter": [
                        {
                            "username": username,
                            "password": password,
                            "jdbcUrl": jdbcUrl,
                            "table": tableName,
                            "sourceName": sourceName
                        }
                    ]
                }
            }
        }
    }
    var columnStr = decodeURI(JSON.stringify(columnList));
    console.log(columnStr);
    post("queryColumns", "post", columnStr, function (data) {
        $('#columnModal').modal('show');
        $("span[id='"+tableName+"_opbtn']").html("操作中")
        var columnarray = data.data;
        typearray.length=0;
        var columns = document.getElementById("columns");
        if (data.code != 1) {
            alert(data.msg);
        } else {
            if ($("#columns option").length > 0) {
                $("#columns").empty();
            }
            for (var i = 0; i < columnarray.length; i++) {
                columns.options.add(new Option(columnarray[i].name, columnarray[i].name));
                typearray[columnarray[i].name]=columnarray[i].type;
            }
        }
    /*-------------------multiselect---------------------

     ----------------------------------------start--*/
        $('#columns').multiSelect({
            selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='搜索...'>",
            selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='搜索...'>",
            afterInit: function (ms) {
                var that = this,
                    $selectableSearch = that.$selectableUl.prev(),
                    $selectionSearch = that.$selectionUl.prev(),
                    selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                    selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                    .on('keydown', function (e) {
                        if (e.which === 40) {
                            that.$selectableUl.focus();
                            return false;
                        }
                    });

                that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                    .on('keydown', function (e) {
                        if (e.which == 40) {
                            that.$selectionUl.focus();
                            return false;
                        }
                    });
            },
            afterSelect: function (values) {
                this.qs1.cache();
                this.qs2.cache();
                if ($("#content table").length == 0) {
                    var tab = "<table class='table table-bordered table-striped table-column'><thead><tr><th>columnName</th><th>type</th><th>convertType</th><th>convert</th><th>splitPk</th><th>partationKey</th></tr></thead><tbody></tbody></table>"
                    $("#content").append(tab);
                    $(".modal-dialog").addClass("dialog-width");
                    $("#arrow").removeClass("hide");
                }
                var val;
                var ty;
                for (var i = 0; i < values.length; i++) {
                    cols.push(values[i]);
                    val=values[i]
                    ty=$();
                    $("#content table tbody").css("height","500px")

                    $("#content table tbody").append(
                        "<tr id=" + values[i] + ">" +
                        "<td>" + values[i] + "</td>" +
                        "<td>"+typearray[val]+"</td>" +
                        "<td><select class="+values[i]+"><option value=''></option><option value='string'>string</option><option value='long'>long</option><option value='Double'>Double</option><option value='Date'>Date</option><option value='Boolean'>Boolean</option><option value='Bytes'>Bytes</option></select></td>" +
                        "<td><input type='text' class='convert form-control'/></td>" +
                        "<td><input class='input-ma' type='radio' name='splitPk' value="+values[i]+" data-toggle='tooltip' data-placement='right' title='时间或自增ID'></input></td>" +
                        "<td><input class='input-ma' type='radio' name='partationKey' value="+values[i]+" data-toggle='tooltip' data-placement='right' title='hash'/></td></tr>");
                }
                var radios = document.getElementsByClassName("input-ma");
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].type == "radio") {
                        radios[i].ondblclick = function(){
                            this.checked = false;
                        }
                    }
                }
            },
            afterDeselect: function (values) {
                this.qs1.cache();
                this.qs2.cache();
                for (var i = 0; i < values.length; i++) {
                    var del = document.getElementById(values[i]);
                    del.remove();
                    for (var r = 0; r < cols.length; r++) {
                        if (cols[r] == values[i]) {
                            cols.splice(r, 1);
                        }
                    }
                }
                if (cols.length == 0) {
                    $("#content table").remove();
                    $(".modal-dialog").removeClass("dialog-width");
                    $("#arrow").addClass("hide");
                }
            }
        });
        if ($("#columns option").length > 0) {
            $("#columns").multiSelect('refresh');
            $("#arrow").addClass("hide");
            console.log(import1.parameter);
            if(import1.parameter.length>0){
                console.log(import1.parameter);
                for(var par in import1.parameter){
                    if(import1.parameter[par].table==tableName&&import1.parameter[par].jdbcUrl==jdbcUrl){
                        for(var col in import1.parameter[par].column){
                            var colName=import1.parameter[par].column[col].columnName;
                            var conType=import1.parameter[par].column[col].convertType;
                            var conv=import1.parameter[par].column[col].convert;
                            var splPk=import1.parameter[par].splitPk;
                            var parKey=import1.parameter[par].partationKey;
                            columnNames.push(colName);
                            $('#columns').multiSelect('select', colName);
                            $("."+colName).find("option[value='"+conType+"']").attr("selected",true);
                            if(splPk==colName){
                                $('#'+colName).children().eq(4).children().attr("checked",true);
                            }
                            if(parKey==colName){
                                $('#'+colName).children().eq(5).children().attr("checked",true);
                            }
                            $('#'+colName).children().eq(3).children().val(conv);
                        }
                        if(!import1.parameter[par].where==""){
                            $("#where").val(import1.parameter[par].where);
                        }
                    }
                }
            }
            return false
        }
    }, "json")
}
/*-----------------------------
 modal弹窗内容（点击获取效果）
 ------------------------------- */
$(function () {
    $('#select-all').click(function () {
        $('#columns').multiSelect('select_all');
        return false;
    });
    $('#deselect-all').click(function () {
        $('#columns').multiSelect('deselect_all');
        return false;
    });
});
/*-------------------multiselect---------------------

 ----------------------------------------end--*/
function clearOp(){
    while(length!==1) {
        var sch = $('#schema')[0].options;
        var length = sch.length;
        for (var i = 1; i < length; i++) {
            sch.remove(i);
            length = length / 2;
        }
    }
    $('#tableList tbody').empty();
}
//继续连接数据源
// $("#continues").click(function () {
//     sweetAlert({
//         title:"保存成功!",
//         text:"接下来您可新建或查看模板表",
//         type:"success"},function () {
//
//     })
// });
function continueConnect(){

    // sweetAlert({
    //     title: "创建新的数据源?",
    //     text: "所填记录将被清空",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     closeOnConfirm: false }, function(){
    //     sweetAlert({
    //         title:"删除成功!",
    //         text: "您可以重新新建或查看模板表",
    //         //timer: 2000,
    //         type:"success"
    //     });
    //
    // });

   // sweetAlert('创建新的数据源,所填记录将被清空');
    alert('创建新的数据源,所填记录将被清空');
    $(".top_datasoure").hide();
    if($('#alreadyOpera').hasClass('hide')){
        $('#alreadyOpera').removeClass('hide');
    }
    var li="<li id="+datasourceName+" class='sourcename list-group-item' data-toggle='tooltip' data-placement='right' title="+description+">"+datasourceName+"<span onclick='deleteSource(this)' class='btn btn-warning pull-right btn-pad'>删除</span><span  onclick='nameSelect(this)' class='btn btn-warning pull-right btn-pad'>修改</span></li>";
    var list=$('#datanameList li');
    if(list.length==0){
        $('#datanameList').append(li);
    }else{
        for(var i in list){
            if(list[i].id==datasourceName){
               break;
            }
            if((list[i].id!==datasourceName)&&(i==list.length-1)){
                $('#datanameList').append(li);
            }
        }
    }
    $('#stepy_form')[0].reset();
    while(len!==1) {
        var sel = $('#dataList')[0].options;
        var len = sel.length;
        for (var i = 1; i < len; i++) {
            sel.remove(i);
            length = length / 2;
        }
    }
    $('#dataType,#schemaDiv').addClass('hide');
    $('#connect').html('连接').removeAttr('disabled');
    $('#stepy_form-next-0').attr('disabled','true');
    clearOp();
}
// 当修改已经定义的数据源时，需要重新更改一下局部变量
function Source(sel){
    opRm=options[$(sel).parent()[0].id];
    var parRm=opRm.config.datasource.import.parameter;
    datasourceName=$(sel).parent()[0].id;
    username=parRm[0].username;
    password=parRm[0].password;
    jdbcUrl=parRm[0].jdbcUrl;
    sourceName=parRm[0].sourceName;
    description=parRm[0].description;
}
function arrayPrototype(){
    // 给JS的数组对象定义一个函数，用于查找指定的元素在数组中的位置，即索引
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    // 使用通过得到这个元素的索引，使用js数组自己固有的函数去删除这个元素：
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };
}
function deleteSource(sel){
        arrayPrototype();
        Source(sel);
        var Sure = confirm("确认将数据源名称为" + datasourceName +"的包含的全部操作删除吗?");
        if (Sure) {
            $(sel).parent().remove();
            if($('#alreadyOpera').children('.panel-body').children().children().length==0){
                $('#alreadyOpera').addClass('hide');
            }
            delete options[datasourceName];
            console.log(import1.parameter);
            var length=import1.parameter.length;
            var a=[];
            for(var i=0;i<length;i++){
                if(import1.parameter[i].jdbcUrl==jdbcUrl&&import1.parameter[i].username==username&&import1.parameter[i].sourceName==sourceName){
                    a.push(import1.parameter[i]);
                }
            }
            for(var r in a){
                import1.parameter.remove(a[r]);
            }
            console.log("------------删除后的import1.parameter-----------");
            console.log(import1.parameter);
        }
}
function nameSelect(sel) {
    clearOp();
    $("#stepy_form-step-0").css('display','none');
    $("#stepy_form-step-1").css('display','block');
    $('#stepy_form-title-0').removeClass('current-step');
    $('#stepy_form-title-1').addClass('current-step');
    Source(sel);
    var Str = decodeURI(JSON.stringify(opRm));
    if (sourceName == "mysql") {
        schema="";
        //当数据库类型为mysql时，直接获取tableName
        post("queryTables", "post", Str, function (data) {
            var tablearray = data.data;
            if (data.code != 1) {
                alert(data.msg);
            } else {
                var t = $('#tableList').DataTable();
                t.clear();
                for (var i = 0; i < tablearray.length; i++) {
                    t.row.add([
                        tablearray[i],
                        "<span id='"+tablearray[i]+"_opbtn' class='btn btn-warning btn-sm btn-width' onclick='tableSelect(this)'>操作</span>",
                       // " "
                    ]).draw(false);
                }
                aloperation(tablearray);
                $("#stepy_form-next-0").click();
            }
        }, "json");
    } else {
        //除了mysql外的数据库类型时，请求schema列表
        post("querySchemas", "post", Str, function (data) {
            var arr = data.data;
            var schema = document.getElementById("schema");
            if (data.code != 1) {
                alert(data.msg);
            } else {
                $("#schemaDiv").removeClass("hide");
                for (var i = 0; i < arr.length; i++) {
                    schema.options.add(new Option(arr[i], arr[i]));
                }
            }
        }, "json")
    }
    //将input的内容重新填入
    $("#datasourceName").val(datasourceName);
    $("#data").find("option[value=1]").attr("selected",true);
    $('#dataType').removeClass('hide');
    var dataList = document.getElementById("dataList");
    var str;
    post("databaseList", "get", null, function (data) {
        var str = data.data;
        for (var i = 0; i < str.length; i++) {
            dataList.options.add(new Option(str[i], str[i]));
        }
        $("#dataList").find("option[value='"+sourceName+"']").attr("selected",true);
    }, "json")
    $("#username").val(username);
    $("#password").val(password);
    $("#jdbcUrl").val(jdbcUrl);
    $('#datasourceName').val(datasourceName);
    $('#description').val(description);
}
// import1.parameter 写入操作需要页面加载时table列表里显示出操作过的标志，这里把按钮改为“已操作”，因为调用多次，所以在这单独写了一个函数
function aloperation(tablearray){
    if(import1.parameter.length>0){
        for(var r in import1.parameter){
            for(var i in tablearray) {
                if (import1.parameter[r].table == tablearray[i]&&import1.parameter[r].jdbcUrl==jdbcUrl) {
                    $("span[id='"+tablearray[i]+"_opbtn']").html('已操作').addClass('btn-remove');
                }
            }
        }
    }
}
/*-------------------corn表达式---------------------

 ----------------------------------------start--*/
//charDate表单验证
$(document).ready(function () {
    //指定固定天数函数
    var dayList = $(".dayList").children().children();
    $("#day_appoint").click(function () {
        if (this.checked) {
            if ($(dayList).filter(":checked").length == 0) {
                $(dayList.eq(0)).attr("checked", true);
            }
            dayList.eq(0).change();
        }
    });

    var monthList = $(".monthList").children().children();
    $("#month_appoint").click(function () {
        if (this.checked) {
            if ($(monthList).filter(":checked").length == 0) {
                $(monthList.eq(0)).attr("checked", true);
            }
            monthList.eq(0).change();
        }
    });
    var weekList = $(".weekList").children().children();
    $("#week_appoint").click(function () {
        if (this.checked) {
            if ($(weekList).filter(":checked").length == 0) {
                $(weekList.eq(0)).attr("checked", true);
            }
            weekList.eq(0).change();
        }
    });
});
//corn
/*****按天算片段*******/
$(function () {
    var dayList = $(".dayList").children().children();
    $("#day_appoint").click(function () {
        if (this.checked) {
            dayList.eq(0).change();
            return txtDaily;
        }
    });
    dayList.change(function () {
        var day_appoint = $("#day_appoint").prop("checked");
        if (day_appoint) {
            var vals = [];
            dayList.each(function () {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            function compare(a, b) {
                return a - b
            }

            vals.sort(compare);
            txtDaily = "?";
            if (vals.length > 0 && vals.length < 31) {
                txtDaily = vals.join(",");
            } else if (vals.length == 31) {
                txtDaily = "*";
            }
        }
        return txtDaily;
    });
    $("#latestDay").click(function () {
        if (this.checked) {
            day1.eq(0).change();
        }
        return txtDaily;
    });
    var day1 = $(".day1");
    day1.change(function () {
        var latestDay = $("#latestDay").prop("checked");
        if (latestDay) {
            var dayStart_1 = $("#dayStart_1").val();
            var dayEnd_1 = $("#dayEnd_1").val();
            txtDaily = dayStart_1 + "/" + dayEnd_1;
        }
        return Weekly;
    });
    var eve_day = $("#eve_day");
    $("#every_day").click(function () {
        if (this.checked) {
            eve_day.change();
        }
        return txtDaily;
    });
    eve_day.change(function () {
        var every_day = $("#every_day").prop("checked");
        if (every_day) {
            var eve_day = $("#eve_day").val();
            txtDaily = eve_day + "W";
        }
        return txtDaily;
    });
    $("#weekOfDay").click(function () {
        if (this.checked) {
            week1.eq(0).change();
        }
        return Weekly;
    });
    var week1 = $(".week1");
    week1.change(function () {
        var weekOfDay = $("#weekOfDay").prop("checked");
        if (weekOfDay) {
            var weekStart_1 = $("#weekStart_1").val();
            var weekEnd_1 = $("#weekEnd_1").val();
            Weekly = weekStart_1 + "#" + weekEnd_1;
        }
        return Weekly;
    });
    $("#lastWeek").click(function () {
        if (this.checked) {
            week1.eq(0).change();
        }
        return Weekly;
    });
    var week1 = $(".week1");
    week1.change(function () {
        var weekOfDay = $("#weekOfDay").prop("checked");
        if (weekOfDay) {
            var weekStart_1 = $("#weekStart_1").val();
            var weekEnd_1 = $("#weekEnd_1").val();
            Weekly = weekStart_1 + "#" + weekEnd_1;
        }
        return Weekly;
    });
    var weekStart_2 = $("#weekStart_2");
    $("#lastweek").click(function () {
        if (this.checked) {
            weekStart_2.change();
        }
        return Weekly;
    });
    weekStart_2.change(function () {
        var lastweek = $("#lastweek").prop("checked");
        if (lastweek) {
            var weekStart_2 = $("#weekStart_2").val();
            Weekly = weekStart_2 + "L";
        }
        return Weekly;
    });
    //month
    $("#optionsRadios2").click(function () {
        if (this.checked) {
            month1.eq(0).change();
        }
        return Monthly;
    });
    var month1 = $(".month1");
    month1.change(function () {
        var month = $("#optionsRadios2").prop("checked");
        if (month) {
            var monthStart_1 = $("#monthStart_1").val();
            var monthEnd_1 = $("#monthEnd_1").val();
            Monthly = monthStart_1 + "/" + monthEnd_1;
        }
        return Monthly;
    });
});
var txtDaily = "*";
var Weekly = "?";
var Monthly = "*";
var Yearly = " ";
function everyTime(dom) {
    if (dom.name == "day") {
        txtDaily = "*";
        return txtDaily;
    } else if (dom.name == "week") {
        Weekly = "*";
        return Weekly;
    } else if (dom.name == "month") {
        Monthly = "*";
        return Monthly;
    } else if (dom.name == "year") {
        Yearly = "*";
        return yearly;
    }
}
function lastDay() {
    txtDaily = "L"
    return txtDaily;
}
function getExp() {
    var mycron = "-1";
    var nowdisplay = $("#nowdisplay").val();
    if (nowdisplay == "Daily") {
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " " + txtDaily
            + " * ?";
    } else if (nowdisplay == "Weekly") {
        var week = "";
        var huang = document.all['txtWeekly'];
        for (i = 0; i < huang.length; i++) {
            if (huang[i].checked == true) {
                week = week + huang[i].value + ",";
            }
        }
        if ($("#week_appoint").prop("checked")) {
            Weekly = week.substring(0, week.length - 1);
        }
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " ? * " + Weekly;
    } else if (nowdisplay == "Monthly") {
        var month = "";
        var months = document.all['txtMonth'];
        for (var i = 0; i < months.length; i++) {
            if (months[i].checked == true) {
                month = month + months[i].value + ",";
            }
        }
        if ($("#month_appoint").prop("checked")) {
            Monthly = month.substring(0, month.length - 1);
        }
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " " + "* "
            + Monthly + " ?";
    } else if (nowdisplay == "Year") {
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " * * ? "
            + Yearly;
    }
    if (mycron != "-1") {
        document.getElementById("mycron").value = mycron;
    }
    console.log(transform1);
}
function display(nowdisplay) {
    var cronThis = $("#nowdisplay").val();
    if (nowdisplay != cronThis) {
        document.getElementById("nowdisplay").value = nowdisplay;
    }

}
function ret() {
    var mycron = document.getElementById("mycron").value;
    var isSure = confirm('确认将corn表达式: \"' + mycron + "\" 返回给config并将config提交?");
    if (isSure) {
        $(".result-menu").click();
        config.cronExpression=mycron;
        config.company=company;
        datasource.import=import1;
        datasource.transform=transform1;
        datasource.menuConfig=menuConfig1;
        var tarinfo={config:config}
        console.log(JSON.stringify(tarinfo));
        // console.log(config);
        // alert("哈哈哈");
        post("sumitJob", "post", JSON.stringify(tarinfo), function (data) {
            if (data.code != 1) {
                alert(data.msg);
            }else{
                alert("success");
            }
        },"json")
    }
}
/*-------------------corn表达式---------------------

 ----------------------------------------end--*/

//----------------菜单配置--------------------

//----------------菜单配置--------------------end