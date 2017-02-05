<link rel="stylesheet" href="css/config/bootstrap-editable.css">
<link rel="stylesheet" href="css/config/config-search.css">
<h3>数据源树形结构</h3>
<form class="form-inline config-companyname pull-right" role="form" style="margin-top: -30px; margin-right: 10px;">
    <div class="form-group">
        <lable class="col-md-5 control-label">公司名称：</lable>
        <div class="col-md-7">
            <select name="" id="companyname" class="selectpicker">
            </select>
        </div>
    </div>
</form>
<div class="contentshow">
    <div class="nocontent"></div>
    <p>没有数据，选择一项刷新试试</p>
</div>
<div class="datatree">
    <div class="col-md-12">
        <p class="companyname "></p>
    </div>
    <div class="col-md-3 m-min-h">
        <p>连接数据源 <span class="datasourcenumber" title="数据源数"></span></p>
    <#include "config-search/config-connectDatasource.ftl"/>
    </div>
    <div class="col-md-3 m-min-h">
        <p>数据选择 <span class="datachoosenumber" title="表数"></span></p>
    <#include "config-search/config-databaseSelect.ftl"/>
    </div>
    <div class="col-md-3 m-min-h">
        <p>ETL操作 <span class="etlnumber" title="模板表数">1</span></p>
    <#include "config-search/config-etlModel.ftl"/>
    </div>
    <div class="col-md-3 m-min-h">
        <p>作业周期</p>
    <#include "config-search/config-corn.ftl"/>
    </div>
</div>
<script>

    //初始化
    $(function () {
        $('.datatree').hide();


    })
    //设置div高度自适应
    $(function () {
        var fullheight=$(document).height()-163+'px';
        $(".card-box-full").css('min-height',fullheight);
    })
    //数据元树形结构展示
    $(function () {
        $.ajax({
            url:"../json/etl-json.json",
            dataType:'json',
           // async:false,
            success:function (data) {
                $("#companyname").append("<option value=''>请选择</option>");
                $.each(data.config,function (key,value) {
                    $("#companyname").append('<option value="' + key + '">'+value.company+'</option>');
                });
                $("#companyname option:first").attr("disabled", "disabled");
                $('.selectpicker').selectpicker({width:'auto'});

                //选择请求到的公司名称
                var choosecompany= function(){
                    $(".contentshow").hide();
                    $(".datasoure li").remove();
                    $(".tablename li").remove();
                    $(".etltemplate li").remove();
                    $('.unlitsdetailinfo li').remove();
                    $(".unitsstepinfo p").remove();
                    var options=$("#companyname option:selected");
                    var jsonData=data.config[options.val()];
                    if(!options.val()){
                        $('.datatree').hide()
                    }else
                        $('.datatree').show();
                    $('.companyname').html(jsonData.company);
                    $('.cronExpression').html(jsonData.cronExpression);
                    //---------------------------------连接数据源----------------------------------
                    var jsonParameter=jsonData.datasource.import.parameter;
                    $('#company').html(jsonData.company);
                    //console.log(jsonParameter);
                    var jdbcUrl={};//保存统计数据
                    $.each(jsonParameter,function (key,value) {
                        //$(".datasoure ul").append('<li id="'+key+'">'+value.datasourceName+'</li>');
                        jdbcUrl[value.datasourceName]=(jdbcUrl[value.datasourceName]||0)+1;//判断重复的
                    });
//                    console.log(jdbcUrl);
                    //输出结果
                    for(var k in jdbcUrl){
                        //console.log(k,jdbcUrl[k]);
                        $(".datasoure ul").append('<li id="'+k+'" name="'+jdbcUrl[k]+'">'+k+'</li>');
                    }
                    $('.datasourcenumber').html($(".datasoure li").length);
                    $('.datasoure ul li').click(function () {
                        $(".tablename li").remove();
                        var datasouroption=$(this).attr("id");
                        var datanumberoption=$(this).attr("name");
                        $('.datachoosenumber').html(datanumberoption);
                       var choosenamesort=[];//存放数据源名称
                        $.each(jsonParameter,function (key,value) {
                            choosenamesort.push(value.datasourceName);
                        });
                        //---------------------------------数据源选择-------------------------------
                        var tablenamesort = jsonParameter;//根据数据源名称写表名
                        var filterarray = $.grep(tablenamesort,function(value){
                            return value.datasourceName == datasouroption;//根据数据源名称筛选
                        });
                        for (key in filterarray){
                            $(".tablename ul").append('<li>'+filterarray[key].table+'</li>');
                        }
                        //-----------------------------数据源选择结束-------------------------------

                        var datasournameoption=$.inArray(datasouroption,choosenamesort);//返回与选择相匹配的位置
                        var jsonDataParameter=jsonParameter[datasournameoption];
                        $('.schema').html(jsonDataParameter.schema);
                        $('#datasourceName').html(jsonDataParameter.datasourceName);
                        $('#description').html(jsonDataParameter.description);
                        $('#industry').html(jsonDataParameter.industry);
                        $('#data').html(jsonDataParameter.data);
                        $('#dataList').html(jsonDataParameter.dataList);
                        $('#username').html(jsonDataParameter.username);
                        $('#password').html(jsonDataParameter.password);
                        $('#jdbcUrl').html(jsonDataParameter.jdbcUrl);
                        $('.datasourechoice').html(jsonDataParameter.datasourceName);//显示当前li的值
                        $('.datasoure ul').hide();
                        $('.datasourechoice').show();
                    });
                    $('.datasoure ul li:first').click();  //加载完成后自动点击一次
                    $('.datasourechoice').click(function () {
                        $('.datasourechoice').hide();
                        $('.datasoure ul').show();
                    });
                    //---------------------------------ETL操作----------------------------------

                    $('.etltemplate ul').hide();
                    $('.unlitsdetailinfo ul').hide();
                    var jsonTemplates=jsonData.datasource.transform.templates;
                    $.each(jsonTemplates,function (key,value) {
                        $(".etltemplate ul").append('<li class="'+key+'">'+value.templateTable+'</li>');
                    });
                    $('.temlatechoice').click(function () {
                        $('.temlatechoice').hide();
                        $('.etltemplate ul').show();
                    });
                    $('.etltemplate ul li').click(function () {
                        $('.unlitsdetailinfo li').remove();
                        var etlorder=jsonTemplates[$(this).attr("class")];
                        $('.temlatechoice').html(etlorder.templateTable);
                        $('.temlatechoice').show();
                        $('.etltemplate ul').hide();
                        $('.templatetable').html(etlorder.templateTable);
                        $('.templatedetail').html(etlorder.desciption);
                        $('.unitscount').html(etlorder.units.length);
                        //操作单元
                        $.each(etlorder.units,function (key,value) {
                            $(".unlitsdetailinfo ul").append('<li class="'+key+'">'+'单元'+value.orderNumber+'</li>');
                        })
                        $('.detailunits').click(function () {
                            $('.detailunits').hide();
                            $('.unlitsdetailinfo ul').show();
                        });
                        $('.unlitsdetailinfo ul li').click(function () {
                            $(".unitsstepinfo p").remove();
                            var unitsorder=etlorder.units[$(this).attr("class")];
                            $('.detailunits').html('单元'+unitsorder.orderNumber);
                            $('.detailunits').show();
                            $('.unlitsdetailinfo ul').hide();

                            $('.unittype').html(unitsorder.unitType);
                            $('.unitdesperate').html(unitsorder.desciption);
                            $('.unitname').html(unitsorder.tableName);
                            //操作每个单元的步骤
                            var unitstep =unitsorder.cells;
                            $.each(unitstep,function (key,value) {
                                $(".unitsstepinfo").append('<p>'+'步骤'+value.orderNumber+'：'+value.desciption+'<br/>表达式：'+value.expression+'</p>');
                            })
                        });

                    })
                    $('.etltemplate ul li:first').click();
                    $('.unlitsdetailinfo ul li:first').click();


                    //------------------------------------作业周期---------------------
                    var str=jsonData.cronExpression;
                    var array = str.split(' ');
                    var minutes=array[1]+'分';
                    var hours=array[2]+'点';
                    var day=array[3];
                    var month=array[4];
                    var week=array[5];
                    var myday;
                    var mymonth;
                    var myweek;
                    //日
                    (function myDay(day) {
                        switch (day){
                            case "*":
                                myday="每日";
                                break;
                            case "?":
                                myday="";
                                break;
                            case "L":
                                myday="最后一日";
                                break;
                            case /,/:
                                myday="每天的";
                                break;
                            default :
                                validDay();
                        }
                    }(day));
                    //判断其他情况的
                    function validDay() {
                        if(day.indexOf(',')>0){
                            var eachday=day.replace(/,/g, "、");
                            myday='第'+eachday+'号';
                        }else if(/^\d+$/.test(day)){
                            var eachday=day;
                            myday='第'+eachday+'号';

                        }else if(day.indexOf('/')>0){
                            var fromeachday=day.split("/");
                            var fromeeach1=fromeachday[0];
                            var fromeeach2=fromeachday[1];
                            myday='从'+fromeeach1+'日开始,每'+fromeeach2+'天执行一次'
                        }else if(day.indexOf('W')>0){
                            var last=week.split("");
                            var last1=last[0];
                            myday='每月'+last1+'最近的那个工作日'
                        }
                    }
                    //月
                    (function myMonth(month) {
                        switch (month){
                            case "*":
                                mymonth="每月";
                                break;
                            default :
                                validMonth();
                        }
                    }(month));
                    function validMonth() {
                        if(month.indexOf(',')>0){
                            var eachmonth=day.replace(/,/g, "、");
                            mymonth='每'+eachmonth+'月';
                        }else if(/^\d+$/.test(day)){
                            var eachmonth=month;
                            mymonth='每'+eachmonth+'月';

                        }else if(month.indexOf('/')>0){
                            var fromeach=month.split("/");
                            var fromeeach1=fromeach[0];
                            var fromeeach2=fromeach[1];
                            mymonth='从'+fromeeach1+'日开始，每'+fromeeach2+'个月执行一次'
                        }
                    }
                    //周
                    (function myWeek(week) {
                        switch (week){
                            case "*":
                                myweek="每周";
                                break;
                            case "?":
                                myweek="";
                                break;
                            default :
                                validWeek();
                        }
                    }(week));
                    function validWeek() {
                        if(week.indexOf(',')>0){
                            var weekdown=week.split(',');
                            var weeknew=[];
                            for(i=0;i<weekdown.length;i++){
                                weeknew.push(weekdown[i]-1+',')
                            }
                            //  把值减1来对齐周
                            var week1=weeknew.join('');
                            var week2=week1.split(',');
                            var week3=week2.pop();
                            var week4=week2.join(',');
                            var eachweek=week4.replace(/,/g, "、");
                            myweek='周'+eachweek;
                        }else if(/^\d+$/.test(day)){
                            var eachweek=week;
                            myweek='周'+eachweek;
                        }else if(week.indexOf('/')>0){
                            var fromeach=week.split("/");
                            var fromeeach1=fromeach[0];
                            var fromeeach2=fromeach[1];
                            myweek='每月第'+fromeeach1+'周的星期'+fromeeach2;
                        }else if(week.indexOf('L')>0){
                            var last=week.split("");
                            var last1=last[0];
                            myweek='每月最后一个星期'+last1
                        }else if(week.indexOf('#')>0){
                            var fromweek=week.split("#");
                            var week1=fromweek[0];
                            var week2=fromweek[1];
                            myweek='每月第'+week1+'周的星期'+week2;
                        }

                    }

                    $('.tragetime').html(mymonth+myweek+myday+hours+minutes);
                    $('#hour').html(hours+minutes);
                    $('#day').html(myday);
                    $('#month').html(mymonth);
                    $('#week').html(myweek);
                    if(myweek==''){
                        $('#week').html('无指定星期');
                    }else if(myday==''){
                        $('#day').html('无指定日期');
                    }
                    //------------------------------------数据选择---------------------


                }

                $("#companyname").change(choosecompany);
            }
        });

    })
</script>





