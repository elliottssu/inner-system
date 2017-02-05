<!-- config-databaseSelect start-->
<div class="row full-hight"style="margin: 0;overflow: hidden;">
    <div id="schemaDiv" class="col-md-2 step-left">
        <div class="step-left-content">
            <p for="schema" class="schema-label"style="font-weight: 400px;font-size:16px;color:#555;margin-bottom:30px ">选择schema</p>
            <select id="schema" class="form-control"
                    style="margin-top:10px;position:relative;width:80%;">
                <option disabled class="" value="" selected>请选择
                </option>
            </select>
        </div>
    </div>
    <div class="col-md-10  step-right">
        <div class="step-right-content schematable"style="margin-top: 38px;margin-bottom: 0px">
            <#--<label for="tableList" class="table-label">选择表</label>-->
            <table id="tableList"
                   class="table table-hover"
                   cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th class="col-md-10">表名</th>
                    <th class=" col-md-2 text-center">列选择</th>
                    <#--<th class=" col-md-1 ">splitPk</th>-->
                </tr>
                </thead>
                <tbody class="needcenter">
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- config-databaseSelect end-->