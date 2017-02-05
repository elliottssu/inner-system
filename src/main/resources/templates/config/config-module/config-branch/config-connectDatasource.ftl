<!-- config-connectDatasource start-->
<div style="height: 100px"></div>
<div class="col-md-6 col-md-offset-3">
    <div class="form-group">
        <label class="col-md-3 control-label">数据源名称:</label>
        <div class="col-md-7">
            <input id="datasourceName" type="text" name="datasourceName"
                   placeholder="请定义数据源名称..."
                   class="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">描述:</label>
        <div class="col-md-7">
            <textarea  id='description' rows="2" class="form-control"></textarea>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">选择公司:</label>
        <div class="col-md-7">
            <input id="company" type="text" name="company"
                   placeholder="请输入公司名称..."
                   class="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">选择行业:</label>
        <div class="col-md-7">
            <select class="form-control char_input">
                <option value="1" selected>
                    服装
                </option>
                <option value="2">快消品</option>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">选择数据源:</label>
        <div class="col-md-7">
            <select id="data" name="jungle" title="不能为空!" required
                    class="form-control char_input"
                    data-live-search="true">
                <option disabled class="op1" value="" selected>
                    ------请选择------
                </option>
                <option class="op1 op2" value="1">database</option>
                <option disabled class="op1 op2" value="2">
                    http
                </option>
                <option disabled class="op1 op2" value="3">ftp
                </option>
            </select>

        </div>
    </div>
    <div class="form-group hide" id="dataType">
        <label class="col-md-3 control-label">选择数据库类型:</label>
        <div class="col-md-7">
            <select id="dataList" name="jungle" title="不能为空!" required
                    class="form-control char_input "
                    data-live-search="true">
                <option disabled class="" value="" selected>
                    ------请选择------
                </option>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">username:</label>
        <div class="col-md-7">
            <input id="username" type="text" name="username"
                   placeholder="请输入用户名..."
                   class="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">password:</label>
        <div class="col-md-7">
            <input id="password" type="password" name="password"
                   placeholder="请输入密码..." class="form-control"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">jdbcUrl:</label>
        <div class="col-md-7">
            <input id="jdbcUrl" type="text" name="jdbcUrl"
                   placeholder="请输入数据源..."
                   class="form-control"/>
        </div>
    </div>
</div>

    <#--<div class="col-lg-4 col-md-4">-->
        <#--<div id="alreadyOpera" class="panel hide" style="width:70%;">-->
            <#--<div class="panel-heading btn-green panel-padding">已定义的数据源</div>-->
            <#--<div class="panel-body" style="padding: 0px">-->
                <#--<div id="datanameList" class="list-group">-->

                <#--</div>-->
            <#--</div>-->
        <#--</div>-->
    <#--</div>-->

<!-- config-connectDatasource end-->
<script>
    $(function () {
        $('#datasourceName').val('广州汇美');
        $('#description').val('库存信息');
        $('#company').val('广州汇美集团');
        $('#username').val('lizengfa');
        $('#password').val('123456');
        $('#jdbcUrl').val('jdbc:mysql://192.168.1.109:3306/test');
    })
</script>