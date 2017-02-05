<!-- etl-dataAggregation.ftl start-->
<div class="etl-workspace" style="min-height: 500px;">
    <div class="ext-main-title">数据聚合 (<span class="table-label"></span>)</div>

    <div class="clearfix ext-margin" style="height:80px;">
        <label class="ext-title control-label label-weight">描述:</label>
        <div class="ext-post">
            <textarea id="" rows="3" class="form-control description-tasks"></textarea>
        </div>
    </div>

    <div class="clear ext-margin">
        <label class="ext-title control-label label-weight">分组列:</label>
        <div class="ext-post agg-select-choose" style="width: 410px;margin-right: 5px">
            <select  data-placeholder="选择分组的列" id="" multiple class="chosen-select" tabindex="2">
                <option value="-1"></option>
            </select>
        </div>
        <div class="ext-post hide" style="width: 50px"><span class="btn btn-pinku groupsel">确定</span></div>
    </div>

    <div class="clear ext-margin" style="height:40px;">
        <label class="ext-title control-label label-weight">聚合:</label>
        <div class="ext-post" style="padding-left:0px;">
            <select id="" class="form-control function">
                <option value="-1" disabled selected hidden>选择聚合函数</option>
                <option value="sum">sum</option>
                <option value="max">max</option>
                <option value="min">min</option>
                <option value="mean">mean</option>
            </select>
        </div>
    </div>

    <div class="clearfix ext-margin hide">
        <label class="ext-title control-label label-weight">选列:</label>
        <div class="ext-post" style="">
            <select id="" class="multi-select" multiple=""></select>
        </div>
    </div>

    <#--<div style="position:relative;left:18%;top:10px;">-->
        <#--<a href='#' id='' class="selectAll btn btn-pinku" style="padding: 1px 7px;">全选</a>-->
        <#--<a href='#' id='' class="deselectAll btn btn-pinku" style="padding: 1px 7px;">全不选</a>-->
    <#--</div>-->

</div>
<div class="etl-tableshow">
    <div class="etl-main-title"><div class="output-type">聚合</div> <span class="table-label"></span></div>
    <ul class="output-arr">

    </ul>
    <div id="" class="clearfix extAggregationLabel extlabel">
        <div id="" class="ex-expression aggregationExpression_1"></div>
        <div class="ex-add" style="border:1px solid transparent;">&&</div>
        <div id="" class="ex-expression aggregationExpression_2"></div>
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
<!-- etl-dataAggregation.ftl end-->