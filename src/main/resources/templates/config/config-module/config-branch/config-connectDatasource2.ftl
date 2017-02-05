<!-- config-connectDatasource start-->
<style>
    .inman-part{
        height: 150px;
        width: 580px;
        top:54%;
        left: 50%;
        margin-top: -75px;
        margin-left: -290px;
        position: absolute;


    }
</style>
<div class="inman-part">
    <div class="col-md-12">
        <div class="form-group">
            <label class="col-md-3 control-label">公司名称:</label>
            <div class="col-md-7">
                <select id="company" name="company" title="不能为空!" required class="selectpicker">
                    <option disabled class="" value="" selected>请选择公司</option>
                </select>
            </div>
        </div>

    </div>
</div>


<script>
    $(function () {
        post("queryCompanys", "get", null, function (data) {
            $.each(data.data,function (key,val) {
                $("#company").append('<option id="'+val+'">'+val+'</option>');
            })
            $('.selectpicker').selectpicker({width:'100%'});
        }, "json");


    })

</script>