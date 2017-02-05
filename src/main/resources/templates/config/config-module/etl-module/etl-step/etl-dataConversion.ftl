<!-- etl-dataConversion.ftl start-->
<div class="etl-workspace">
    <div class="ext-main-title">数据转换 (<span class="table-label"></span>)<span class="continutsetp continuetrans fa fa-forward" title="继续转换"></span></div>
    <div class="clearfix ext-margin" style="height:80px;">
        <label class="ext-title control-label label-weight">描述:</label>
        <div class="ext-post">
            <textarea id="" rows="3" class="form-control description-tasks"></textarea>
        </div>
    </div>


    <div class="clearfix ext-margin">
        <label class="ext-title control-label label-weight">转换:</label>
        <div class="ext-post trans-function">
            <select class="form-control transFunction">
                <option value="-1" disabled selected hidden>选择转换函数</option>
                <option value="plus">plus</option>
                <option value="minus">minus</option>
                <option value="currentTime">currentTime</option>
                <option value="addColumn">addColumn</option>
                <option value="ifTrueSet">ifTrueSet</option>
                <option value="createDateByYMD">createDateByYMD</option>
                <option value="transDate">transDate</option>
                <option value="castToInt">castToInt</option>
                <option value="castToString">castToString</option>
                <option value="castToTimestamp">castToTimestamp</option>
                <option value="multiply">multiply</option>
                <option value="divide">divide</option>
                <option value="reName">reName</option>
            </select>
        </div>


        <#--createDateByYMD-->
        <div class="ext-function trans-createdate-type hide" style="margin-top: 0">
            <select class="form-control datatype">
                <option value="-1" disabled selected hidden> 选择时间类型</option>
                <option value="type1">年/月</option>
                <option value="type2">年/月/日</option>
            </select>
        </div>
        <div class="ext-function ext-margin-fun trans-datayear hide">
            <select class="datayear form-control"><option value="-1" disabled selected hidden>选择年</option></select>
        </div>
        <div class="ext-function trans-datamonth hide">
            <select class="datamonth form-control"><option value="-1" disabled selected hidden>选择月</option></select>
        </div>
        <div class="ext-function trans-dataday hide">
            <select class="dataday form-control"><option value="-1" disabled selected hidden>选择日</option></select>
        </div>
        <div class="ext-function trans-datacolumn hide">
            <input type="text" class="datacolumn form-control" placeholder="生成日期列" name="column"/>
        </div>

        <#--transDate-->
        <div class="ext-function trans-transtype-type hide" style="margin-top: 0">
            <select class="form-control transtype">
                <option value="-1" disabled selected hidden>选择时间类型</option>
                <option value="1">年</option>
                <option value="2">年/月</option>
                <option value="3">年/季度/月</option>
            </select>
        </div>
        <div class="ext-function ext-margin-fun trans-transdatafiled hide">
            <select class="transdatafiled form-control"><option value="-1" disabled selected hidden>选择列</option></select>
        </div>
        <div class="ext-function trans-year hide">
            <input type="text" class="year form-control" placeholder="年份"/>
        </div>
        <div class="ext-function trans-quarter hide">
            <input class="quarter form-control" type="text"  placeholder="季度"/>
        </div>
        <div class="ext-function trans-month hide">
            <input type="text" class="month form-control" placeholder="月份"/>
        </div>

        <#--plus-->
        <div class="ext-function ext-margin-fun trans-plusfiled hide">
            <select class="plusfiled form-control"><option value="-1" disabled selected hidden>选择列</option></select>
        </div>
        <div class="ext-function trans-transplus hide">
            <input type="text" class="transplus form-control" placeholder="别名"/>
        </div>

        <#--minus-->
        <div class="ext-function ext-margin-fun trans-minusfiled hide">
            <select class="minusfiled form-control"><option value="-1" disabled selected hidden>选择列</option></select>
        </div>
        <div class="ext-function trans-transminus hide">
            <input type="text" class="transminus form-control" placeholder="别名"/>
        </div>

        <#--castToInt-->
        <div class="ext-function ext-margin-fun trans-casttoint hide">
            <select class="casttoint form-control"><option value="-1" disabled selected hidden>转换为int列</option></select>
        </div>

        <#--castToString-->
        <div class="ext-function ext-margin-fun trans-casttosrting hide">
            <select class="casttosrting form-control"><option value="-1" disabled selected hidden>转换为string列</option></select>
        </div>

        <#--castToTimestamp-->
        <div class="ext-function ext-margin-fun trans-casttotimestamp hide">
            <select class="casttotimestamp form-control"><option value="-1" disabled selected hidden>转换为timestamp列</option></select>
        </div>

        <#--currentTime-->
        <div class="ext-function ext-margin-fun trans-currenttime hide">
            <input type="text" class="currenttime form-control" placeholder="当前时间列"/>
        </div>

        <#--addColumn-->
        <div class="ext-function ext-margin-fun trans-addcolumnname hide">
            <input type="text" class="addcolumnname form-control" placeholder="列名"/>
        </div>
        <div class="ext-function trans-addcolumnvalue hide">
            <input type="text" class="addcolumnvalue form-control" placeholder="列值"/>
        </div>

       <#--reName-->
        <div class="ext-function ext-margin-fun trans-renamefiled hide">
            <select class="renamefiled form-control"><option value="-1" disabled selected hidden>选择列</option></select>
        </div>
        <div class="ext-function trans-renameval hide">
            <input type="text" class="renameval form-control" placeholder="重命名结果"/>
        </div>

        <#--ifTrueSet-->
        <div class="ext-post-a ext-margin-fun trans-iftrueset hide">
            <select class="conditioncolumn ext-post-express form-control"style="margin-right: 5px"><option value="-1" disabled selected hidden>选择条件列</option></select>
            <select class="conditionwhen ext-post-if form-control">
                <option value="-1"disabled selected hidden>等式</option><option value=" > ">></option><option value=" > ">></option><option value=" = ">=</option><option value=" >= ">>=</option><option value=" <= "><=</option><option value=" != ">!=</option>
            </select>
            <input type="text" class="conditionvalue ext-post-express form-control"/>
            <select class="resultcolumn ext-post-express form-control">
                <option value="-1" disabled selected hidden>选择结果列</option>
            </select>
            <span class="ext-post-eq"> = </span>
            <input type="text" class="resultvalue ext-post-express form-control"/>
        </div>

        <#--multiply-->
        <div class="ext-post-a ext-margin-fun trans-multiply hide">
            <select class="multiply1 ext-post-math form-control"><option value="-1" disabled selected hidden>选择乘数列</option></select>
            <span class="ext-post-cc"> x </span>
            <select class="multiply2 ext-post-math form-control"><option value="-1" disabled selected hidden>选择乘数列</option></select>
            <span class="ext-post-cc"> = </span>
            <input type="text" class="multiplyvalue ext-post-math form-control"/>
        </div>

        <#--divide-->
        <div class="ext-post-a ext-margin-fun trans-divide hide">
            <select class="divide1 ext-post-math form-control"><option value="-1" disabled selected hidden>选择除数列</option></select>
            <span class="ext-post-cc"> ÷ </span>
            <select class="divide2 ext-post-math form-control"><option value="-1" disabled selected hidden>选择除数列</option></select>
            <span class="ext-post-cc"> = </span>
            <input type="text" class="dividevalue ext-post-math form-control"/>
        </div>
    </div>
    <div class="clearfix columns-select hide">
        <label class="ext-title control-label label-weight">选择列:</label>
        <div class="ext-post" style="">
            <select id="" class="multi-select" multiple=""></select>
        </div>
    </div>

</div>
<div class="etl-tableshow">
    <div class="etl-main-title"><div class="output-type">转换</div> <span class="table-label"></span></div>
    <ul class="output-arr">

    </ul>
    <div class="clearfix extTransLabel extlabel">
        <div id="" class="ex-expression cleans transExpression_1"></div>
    </div>
</div>
<script>
    $(".output-arr").niceScroll({
        styler:"fb",
        cursorcolor:"rgb(197, 197, 197)",
        cursorwidth: '9',
        cursorborderradius: '5px',
        background: '#fff',
        spacebarenabled:false,
        cursorborder: '2px solid #fff',
        zindex: '100',
        autohidemode:true,
    });
    $(".extlabel").niceScroll({
        styler:"fb",
        cursorcolor:"rgb(197, 197, 197)",
        cursorwidth: '9',
        cursorborderradius: '5px',
        background: '#fff',
        spacebarenabled:false,
        cursorborder: '2px solid #fff',
        zindex: '100',
        autohidemode:true,
    });
</script>

<!-- etl-dataConversion.ftl end-->