function multiSelect(id, task_num, step_num, min_num){
    // multiselect start
    $('#'+id).multiSelect({
        selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder=' 搜索一列'>",
        selectionHeader: function(){
            if(id.indexOf('map')>-1){
                return "<div class='custom-header'>映射键</div>";
            }else{
                return "<input type='text' class='form-control hide search-input' autocomplete='off' placeholder='搜索...'>";
            }
        },
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                .on('keydown', function (e) {
                    if (e.which === 40) {
                        that.$selectableUl.focus();
                        return false;
                    }
                });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                .on('keydown', function (e) {
                    if (e.which == 40) {
                        that.$selectionUl.focus();
                        return false;
                    }
                });
        },
        afterSelect: function (values) {
            this.qs1.cache();
            this.qs2.cache();
            function outputArr(arrname,elementname) {
                $('#'+elementname).parent().parent().parent().next().find('.output-arr').children().remove();
                $.each(arrname[task_num][step_num-1][min_num],function (key,val) {
                    $('#'+elementname).parent().parent().parent().parent().find('.output-arr').append("<li>"+val+"</li>");
                })
            }
            // 数据抽取
            if(id=='task_'+task_num+'_etlColumns_'+step_num + '_' + min_num) {
                for (var i = 0; i < values.length; i++) {
                    selarr[task_num][step_num-1][min_num].push(values[i]);
                    extrationExpression[task_num][step_num-1] = "select(" + selarr[task_num][step_num-1][min_num].join() +","+ extrationTable[task_num][step_num-1] + ")";
                    $('#'+id).parent().parent().parent().parent().find('.extrationExpression').text(extrationExpression[task_num][step_num-1]);
                }
                outputArr(selarr,id);
                var scopeHight=$('#'+id).parent().parent().parent().parent().find('.output-arr').height();//滚动条保持在最底端
                $('#'+id).parent().parent().parent().parent().find('.output-arr').animate({scrollTop: scopeHight},0);
            }
            // 数据聚合
            if(id=='task_' + task_num + '_aggColumns_' + step_num + '_' + min_num){
                // 数据聚合======别名生成的table
                if ($("#task_"+task_num+"_dataAggregation_"+step_num + '_' + min_num + " table").length == 0) {
                    var tab = "<div class='clearfix ext-margin renameContent' style='margin-top:20px;'><label class='ext-title control-label label-weight '>别名:</label><div class='ext-post'><table class='table table-bordered'><thead><tr><th>列名</th><th>别名</th></thead><tbody></tbody></table></div></div>"
                    $("#"+id).parent().parent().after(tab);
                }

                for (var i = 0; i < values.length; i++) {
                    $("#task_"+task_num+"_dataAggregation_"+step_num + '_' + min_num + " table tbody").append(
                        "<tr id=" + values[i] + ">" +
                        "<td>" + values[i] + "</td>" +
                        "<td><input type='text' class='rename form-control'/></td>" +
                        "</tr>"
                    );
                }
                $("#"+id).parent().parent().parent().find('.groupsel').click();//触发隐藏的确定按钮
            }
            // 数据清洗
            if(id=='task_' + task_num + '_cleanColumns_' + step_num + '_' + min_num){
                for (var i = 0; i < values.length; i++) {
                    cleanarr[task_num][step_num-1].push(values[i]);
                }
                cleanExpressions=cleanfun+"("+cleanarr[task_num][step_num-1].join()+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(cleanExpressions);
            }
            // 数据转换
            if(id=='task_' + task_num + '_transColumns_' + step_num + '_' + min_num){
                for (var i = 0; i < values.length; i++) {
                    transarr[task_num][step_num-1].push(values[i]);
                }
                transExpressions=transfun+"("+transarr[task_num][step_num-1].join()+$val+yearName+monthName+dayName+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(transExpressions);
            }
            // 代码映射
            if(id=='task_' + task_num + '_mapColumns-1_' + step_num + '_' + min_num){
                mapcels1=values[0]+",";
                $("#task_"+task_num+"_mapColumns-1_"+step_num + '_' + min_num).children('option:not(option[value='+values[0]+'])').attr('disabled','true');
                var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
                var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
                mappingExpression=mapfun+"("+tab1+mapcels1+tab2+mapcels2+mapName[step_num]+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(mappingExpression);
                $("#"+id).multiSelect('refresh');
                refreshStyle();
            }
            if(id=='task_' + task_num + '_mapColumns-2_' + step_num + '_' + min_num){
                mapcels2=values[0]+",";
                $("#task_"+task_num+"_mapColumns-2_"+step_num + '_' + min_num).children('option:not(option[value='+values[0]+'])').attr('disabled','true');
                var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
                var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
                mappingExpression=mapfun+"("+tab1+mapcels1+tab2+mapcels2+mapName[step_num]+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(mappingExpression);
                $("#"+id).multiSelect('refresh');
                refreshStyle();
            }
        },
        afterDeselect: function (values) {
            this.qs1.cache();
            this.qs2.cache();
            //输出数组列
            function outputArr(arrname,elementname) {
                $('#'+elementname).parent().parent().parent().next().find('.output-arr').children().remove();
                $.each(arrname[task_num][step_num-1][min_num],function (key,val) {
                    $('#'+elementname).parent().parent().parent().parent().find('.output-arr').append("<li>"+val+"</li>");
                })
            }
            // 数据抽取
            if(id=='task_'+task_num+'_etlColumns_'+step_num + '_' + min_num && values!==null) {
                for (var i = 0; i < values.length; i++) {
                    for (var r = 0; r < selarr[task_num][step_num-1][min_num].length; r++) {
                        if (selarr[task_num][step_num-1][min_num][r] == values[i]) {
                            selarr[task_num][step_num-1][min_num].splice(r, 1);
                        }
                    }
                }
                extrationExpression[task_num][step_num-1] = "select(" + selarr[task_num][step_num-1][min_num].join() +","+ extrationTable[task_num][step_num-1] + ")";
                $('#'+id).parent().parent().parent().parent().find('.extrationExpression').text(extrationExpression[task_num][step_num-1]);
                outputArr(selarr,id);
                var scopeHight=$('#'+id).parent().parent().parent().parent().find('.output-arr').height();
                $('#'+id).parent().parent().parent().parent().find('.output-arr').animate({scrollTop: scopeHight},0);
            }
            // 数据聚合
            if(id=='task_' + task_num + '_aggColumns_' + step_num + '_' + min_num && values!==null){
                for (var i = 0; i < values.length; i++) {
                    var del = document.getElementById(values[i]);
                    del.remove();
                    if (aggcol[task_num][step_num-1].length == 0) {
                        $("#task_"+task_num+"_dataAggregation_"+step_num + '_' + min_num + " .renameContent").remove();
                    }
                }
            }
            // 数据清洗
            if(id=='task_' + task_num + '_cleanColumns_' + step_num + '_' + min_num && values!==null){
                for (var i = 0; i < values.length; i++) {
                    for(var r=0;r<cleanarr[task_num][step_num-1].length;r++){
                        if(cleanarr[task_num][step_num-1][r]==values[i]){
                            cleanarr[task_num][step_num-1].splice(r,1);
                        }
                    }
                }
                cleanExpressions=cleanfun+"("+cleanarr[task_num][step_num-1].join()+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(cleanExpressions);
            }
            // 数据转换
            if(id=='task_' + task_num + '_transColumns_' + step_num + '_' + min_num && values!==null){
                for (var i = 0; i < values.length; i++) {
                    for(var r=0;r<transarr[task_num][step_num-1].length;r++){
                        if(transarr[task_num][step_num-1][r]==values[i]){
                            transarr[task_num][step_num-1].splice(r,1);
                        }
                    }
                }
                transExpressions=transfun+"("+transarr[task_num][step_num-1].join()+$val+yearName+monthName+dayName+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(transExpressions);
            }
            // 代码映射
            if(id=='task_' + task_num + '_mapColumns-1_' + step_num + '_' + min_num && values!==null){
                mapcels1=",";
                $("#task_"+task_num+"_mapColumns-1_"+step_num + '_' + min_num).children('option').removeAttr('disabled');
                var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
                var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
                mappingExpression=mapfun+"("+tab1+mapcels1+tab2+mapcels2+mapName[step_num]+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(mappingExpression);
                $("#"+id).multiSelect('refresh');
                refreshStyle();
            }
            if(id=='task_' + task_num + '_mapColumns-2_' + step_num + '_' + min_num && values!==null){
                mapcels2=",";
                $("#task_"+task_num+"_mapColumns-2_"+step_num + '_' + min_num).children('option').removeAttr('disabled');
                var tab1=extrationTable[nowTask_num][nowStep_num - 1].table1 + '.';
                var tab2=extrationTable[nowTask_num][nowStep_num - 1].table2 + '.';
                mappingExpression=mapfun+"("+tab1+mapcels1+tab2+mapcels2+mapName[step_num]+")";
                $('#'+id).parent().parent().parent().parent().find('.ex-expression:last').text(mappingExpression);
                $("#"+id).multiSelect('refresh');
                refreshStyle();
            }
        }
    });
    // multiselect end
}