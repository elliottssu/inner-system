<div class="datasoure">
    <span class="datasourechoice"></span>
    <ul></ul>
</div>

<form class="form-horizontal editor-horizontal">
    <div class="form-group">
        <label class="col-sm-5 control-label">数据源名称：</label>
        <div class="col-sm-7">
            <a href="#" id="datasourceName"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">描述：</label>
        <div class="col-sm-7">
            <a href="#" id="description"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">公司名称：</label>
        <div class="col-sm-7">
            <a href="#" id="company"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">行业：</label>
        <div class="col-sm-7">
            <a href="#" id="industry"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">数据源：</label>
        <div class="col-sm-7">
            <a href="#" id="data"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">数据库类型：</label>
        <div class="col-sm-7">
            <a href="#" id="dataList"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">用户名：</label>
        <div class="col-sm-7">
            <a href="#" id="username"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">密码：</label>
        <div class="col-sm-7">
            <a href="#" id="password"></a>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-5 control-label">jdbcUrl：</label>
        <div class="col-sm-7">
            <a href="#" id="jdbcUrl"></a>
        </div>
    </div>

</form>
<script src="js/config/bootstrap-editable.js"></script>

<script>
    $(function () {
        //定义公用的参数
        $.fn.editable.defaults.validate = function(value) {if($.trim(value) == '') return '不能为空';};
        $.fn.editable.defaults.send = "always";
        $.fn.editable.defaults.url='json/etl-json.json';
        $.fn.editable.defaults.ajaxOptions={type: 'get', dataType: 'json'}

        $('#datasourceName').editable({
            type: 'text',
            title: '数据源名称',
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#description').editable({
            type: 'textarea',
            title: '描述',
            rows: 2,
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#company').editable({
            type: 'text',
            title: '公司名称',
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#industry').editable({
            type: 'select',
            title: '选择行业',
            prepend:'选择行业类型',
            source: [
                {value: 1, text: '服装'},
                {value: 2, text: '快消'}
            ],
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#data').editable({
            type: 'select',
            title: '选择数据源',
            prepend:'选择数据源类型',
            source: [
                {value: 1, text: 'database'},
                {value: 2, text: 'http'},
                {value: 3, text: 'ftp'},
            ],
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#dataList').editable({
            type: 'select',
            title: '选择数据库类型',
            prepend:'选择数据库类型',
            source: [
                {value: 1, text: 'mysql'},
                {value: 2, text: 'tddl'},
                {value: 3, text: 'drds'},
                {value: 4, text: 'oracle'},
                {value: 5, text: 'sqlserver'},
                {value: 6, text: 'postgresql'},
                {value: 7, text: 'sybase'},
                {value: 8, text: 'db2'},
                {value: 9, text: 'ads'},
                {value: 10, text: 'vertica'}
            ],
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#username').editable({
            type: 'text',
            title: '用户名',
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#password').editable({
            type: 'text',
            title: '密码',
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
        $('#jdbcUrl').editable({
            type: 'text',
            title: 'jdbcUrl',
            success: function(response, newValue) {
                console.log(response.config);
                console.log('更改后的值是:'+newValue);
            }
        });
    })
</script>
