<!-- etl-dataExtraction.ftl start-->
<div class="etl-workspace">
    <div class="ext-main-title">数据抽取</div>
    <div class="clearfix ext-margin hide">
        <label class="ext-title control-label label-weight">单元描述:</label>
        <div class="ext-post">
            <textarea id="" rows="2" class="form-control description-units"></textarea>
        </div>
    </div>

    <div class="clearfix ext-margin" style="height:80px;">
        <label class="ext-title control-label label-weight">描述:</label>
        <div class="ext-post">
            <textarea id="" rows="3" class="form-control description-tasks"></textarea>
        </div>
    </div>

    <div class="clear ext-margin" style="height:40px;">
        <label class="ext-title control-label label-weight">抽取:</label>
        <div class="ext-post" style="padding-left:0px;">
            <select  data-placeholder="选择一张表" id="" class="chosen-select etlSelectTable" tabindex="2">
                <option value="-1"></option>
            </select>
        </div>
    </div>

    <div class="clearfix ext-margin">
        <label class="ext-title control-label label-weight">选列:</label>
        <div class="ext-post" style="">
            <select id="" class="multi-select" multiple=""></select>
        </div>
    </div>
<#--<div style="position:relative;left:80px;top:10px;">-->
<#--<a href='#' id='' class="selectAll btn btn-pinku" style="padding: 1px 7px;">全选</a>-->
<#--<a href='#' id='' class="deselectAll btn btn-pinku" style="padding: 1px 7px;">全不选</a>-->
<#--</div>-->
</div>
<div class="etl-tableshow ">
    <div class="etl-main-title"><div class="output-type">抽取</div> <span class="output-name"></span></div>
    <ul class="output-arr">
        <span></span>
    </ul>
    <div id="" class="clearfix extExpressionLabel extlabel">
        <div id="" class="ex-expression extrationExpression"></div>
    </div>
</div>
<script type="text/javascript" src="js/config/chosen.jquery.js"></script>
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
    $('.output-arr').animate({scrollTop: $(this).height()}, 50);
</script>
<!-- etl-dataExtraction.ftl end-->