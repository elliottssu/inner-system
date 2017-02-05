<!-- etl-codeMapping.ftl start-->
<div class="etl-workspace">
    <div class="ext-main-title">代码映射</div>
    <div class="clearfix ext-margin hide">
        <label class="col-md-2 control-label label-weight">单元描述:</label>
        <div class="col-md-5">
            <textarea id="" rows="2" class="form-control description-units"></textarea>
        </div>
    </div>
    <div class="clearfix ext-margin" style="height:80px;">
        <label class="ext-title control-label label-weight">描述:</label>
        <div class="ext-post-a">
            <textarea id="" rows="3" class="form-control description-tasks"></textarea>
        </div>
    </div>
    <div class="clearfix ext-margin">
        <label class="ext-title control-label label-weight">映射:</label>
        <div class="ext-post-a">
            <select id="" class="form-control mapFunction">
                <option value="-1" disabled selected> 选择映射函数</option>
                <option value="innerJoin">innerJoin</option>
                <option value="outerJoin">outerJoin</option>
                <option value="leftJoin">leftJoin</option>
                <option value="rightJoin">rightJoin</option>
            </select>
        </div>
        <div class="ext-post-helf-r hide" style="float: left;width: 200px">
            <input type="text" class="val mapName form-control" name="" placeholder="别名" style="width: 100%"/>
        </div>
    </div>
    <div class="clear ext-margin map-chosenselect" style="height:40px; ">
        <label class="ext-title control-label label-weight">映射表:</label>
        <div style="width: 200px;float: left;margin-right: 10px">
            <select id="" class="chosen-select mappingTables m1 form-control">
                <option value="-1" disabled selected hidden>选择一张表</option>
            </select>
        </div>
        <div style="width: 200px;float: left;">
            <select id="" class="chosen-select mappingTables m2 form-control">
                <option value="-1" disabled selected hidden>选择一张表</option>
            </select>
        </div>
    </div>
    <div class="clearfix ext-margin columns-select" style="width: 550px;">
        <label class="ext-title control-label label-weight" style="margin-left: 0px;">选列:</label>
        <div class="ext-post-a map-multiselect" style="width: 465px;">
            <select id="" name="country" class="multi-select select-1" multiple=""></select>
            <select id="" name="country" class="multi-select select-2" multiple=""></select>
        </div>
    </div>

</div>
<div class="etl-tableshow">
    <div class="etl-main-title"><div class="output-type">映射</div> <span class="mapname"></span></div>
    <ul class="output-arr">

    </ul>
    <div id="" class="clearfix extTransLabel extlabel">
        <div id="" class="ex-expression cleans mapExpression_1"></div>
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
<!-- etl-codeMapping.ftl end-->