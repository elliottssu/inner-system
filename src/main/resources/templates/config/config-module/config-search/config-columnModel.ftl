<!-- config-columnModel start-->
    <!--columnmodal---start-->
        <div id="columnModal" aria-hidden="true" aria-labelledby="myModalLabel"
             role="dialog"
             tabindex="-1" class="modal fade">
            <div class="modal-dialog" style="">
                <div class="modal-content" style="padding-bottom:100px;">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"
                                aria-hidden="true">&times;</button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group" style="padding-left:60px;">
                                <div id="content" style="overflow:hidden;">
                                    <select id="columns" name="country"
                                            class="multi-select"
                                            multiple="">

                                    </select>
                                </div>
                                <i id="arrow" class="ms-container-right hide"></i>
                            </div>
                            <div class="wh-position">
                                <div>
                                    <a href='#' id='select-all'>全选</a>/
                                    <a href='#' id='deselect-all'>删除全部所选</a>
                                </div>
                                <div class="form-group" style="margin-top:30px;">
                                    <label for="input"
                                           class="col-md-2 control-label">where:</label>
                                    <div class="col-md-10">
                                        <input type="text" class="form-control"
                                               id="where"
                                               placeholder="请输入where语句...">
                                    </div>
                                </div>
                            </div>

                            <div class="btn-position">
                                <button data-dismiss="modal"
                                        class="btn btn-green pull-right"
                                        onclick="saveColumn()"
                                        type="button">保存
                                </button>
                                <button class="btn btn-default pull-right"
                                        data-dismiss="modal"
                                        type="button" style="margin-right:10px;">返回
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--columnmodal---end-->
<!-- config-columnModel end-->