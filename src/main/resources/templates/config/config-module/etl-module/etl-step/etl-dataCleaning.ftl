<!-- etl-dataCleaning.ftl start-->
<div class="etl-workspace">
    <div class="ext-main-title">数据清洗 (<span class="table-label"></span>)<span class="continutsetp continueClean fa fa-forward" title="继续清洗"></span></div>
    <div class="clearfix ext-margin" style="height:80px;">
        <label class="ext-title control-label label-weight">描述:</label>
        <div class="ext-post">
            <textarea id="" rows="3" class="form-control description-tasks"></textarea>
        </div>
    </div>
    <div class="clear ext-margin" style="height:40px;">
        <label class="ext-title control-label label-weight">清洗:</label>
        <div class="ext-post clear-function">
            <select class="form-control cleanFunction">
                <option value="-1" disabled selected hidden> 选择清洗函数</option>
                <option value="curMonth">curMonth</option>
                <option value="eqFiled">eqFiled</option>
                <option value="eqValue">eqValue</option>
                <option value="gtFiled">gtFiled</option>
                <option value="gtValue">gtValue</option>
                <option value="egtFiled">egtFiled</option>
                <option value="egtValue">egtValue</option>
                <option value="ltFiled">ltFiled</option>
                <option value="ltValue">ltValue</option>
                <option value="eltFiled">eltFiled</option>
                <option value="eltValue">eltValue</option>
                <option value="newest">newest</option>
            </select>
        </div>
        <#--curMonth-->
        <div class="ext-function clean-curmonth-type hide" style="margin-top: 0">
            <select class="form-control type">
                <option value="-1" disabled selected hidden> 选择输入类型</option>
                <option value="1"> 时间字符串</option>
                <option value="2"> 参数列</option>
            </select>
        </div>
        <div class="ext-function ext-margin-fun clean-curmonth-timestring hide">
            <input type="text" class="form-control values" placeholder="yyyy-MM-dd HH:mm:ss"/>
        </div>
        <div class="ext-function ext-margin-fun clean-curmonth-leftcol hide">
            <select class="form-control cleanYear"><option value='-1' disabled selected hidden>年份</option></select>
        </div>
        <div class="ext-function clean-curmonth-rightcol hide">
            <select class="form-control cleanMonth"><option value='-1' disabled selected hidden>月份</option></select>
        </div>
        <#--Filed-->
        <div class="ext-function ext-margin-fun clean-sourceFiled hide">
            <select class="form-control cleanSource"><option value='-1' disabled selected hidden>源列属性</option></select>
        </div>
        <div class="ext-function clean-targetFiled hide">
            <select class="form-control cleanTarget"><option value='-1' disabled selected hidden>结果列属性</option></select>
        </div>
        <#--value-->
        <div class="ext-function ext-margin-fun clean-sourcecurFiled hide">
            <select class="form-control cleancurSource"><option value='-1' disabled selected hidden>源列属性</option></select>
        </div>
        <div class="ext-function clean-value hide">
            <input type="text" class="form-control valuecur" placeholder="结果值"/>
        </div>
        <#--newest-->
        <div class="ext-function ext-margin-fun clean-newFiled hide">
            <select class="form-control cleannewest"><option value='-1' disabled selected hidden>源列属性</option></select>
        </div>
        <div class="ext-function clean-newest hide">
            <input type="text" class="form-control newest" placeholder="最新值"/>
        </div>












        <div class="clearfix columns-select hide">
            <label class="ext-title control-label label-weight">选择列:</label>
            <div class="ext-post" style="">
                <select id="" class="multi-select" multiple=""></select>
            </div>
        </div>
    </div>

</div>
<div class="etl-tableshow">
    <div class="etl-main-title"><div class="output-type">清洗</div> <span class="table-label"></span></div>
    <ul class="output-arr">

    </ul>
    <div class="clearfix extcleanLabel extlabel">
        <div id="" class="ex-expression cleans cleanExpression_1"></div>
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
<!-- etl-dataCleaning.ftl end-->