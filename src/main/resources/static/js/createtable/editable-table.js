var EditableTable = function () {

    return {
        //main function to initiate the module
        init: function (tableId,tab_num) {
            function restoreRow(oTable, nRow) {
                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);

                for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                    oTable.fnUpdate(aData[i], nRow, i, false);
                }

                // oTable.fnDraw();
            }

            function editRow(oTable, nRow) {

                var aData = oTable.fnGetData(nRow);
                var jqTds = $('>td', nRow);
                jqTds[0].innerHTML = '<input type="text" class="form-control small" value="' + aData[0] + '">';
                var numtype='<select name="" class="form-control small">' +'<option value="int">int</option>'
                    +'<option value="string">String</option>'
                    +'<option value="double">double</option>'
                    +'<option value="ISODate">ISODate</option>'
                    +'<option value="boolean">boolean</option>'
                    +'</select>';
                jqTds[1].innerHTML = numtype.replace('value="'+aData[1]+'"','value="'+aData[1]+'" selected');
                var maptype='<select name="" class="form-control small">' +'<option value="ID">ID</option>'
                    +'<option value="AREA">AREA</option>'
                    +'<option value="NAME">NAME</option>'
                    +'<option value="PRICE">PRICE</option>'
                    +'<option value="UNIT">UNIT</option>'
                    +'<option value="TIME">TIME</option>'
                    +'<option value="CATEGORY">CATEGORY</option>'
                    +'<option value="FACTOR">FACTOR</option>'
                    +'<option value="SAIL">SAIL</option>'
                    +'<option value="AMOUNT">AMOUNT</option>'
                    +'<option value="GIFT">GIFT</option>'
                    +'<option value="DESCRIPTION">DESCRIPTION</option>'
                    +'</select>';
                jqTds[2].innerHTML =maptype.replace('value="'+aData[2]+'"','value="'+aData[2]+'" selected');
                var changetype='<select name="" class="form-control small">'
                    +'<option value="NO">NO</option>'
                    +'<option value="YES">YES</option>'
                    +'</select>';
                jqTds[3].innerHTML =changetype.replace('value="'+aData[3]+'"','value="'+aData[3]+'" selected');
                jqTds[4].innerHTML = '<input type="text" class="form-control small" value="' + aData[4] + '">';
                jqTds[5].innerHTML = '<a class="edit" href="">保存</a>';
                jqTds[6].innerHTML = '<a class="cancel" data-mode="new" href="">取消</a>';
            }

            function saveRow(oTable, nRow) {
                var jqInputs = $('.form-control', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 5, false);
                oTable.fnUpdate('<a class="delete" href="">删除</a>', nRow, 6, false);
                // oTable.fnDraw();
                var row={};
                row.c0=jqInputs[0].value;
                row.c1=jqInputs[1].value;
                row.c2=jqInputs[2].value;
                row.c3=jqInputs[3].value;
                row.c4=jqInputs[4].value;
                mt[tableId][$(nRow).index()]=row;
            }

            function cancelEditRow(oTable, nRow) {
                var jqInputs = $('.form-control', nRow);
                oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
                oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
                oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
                oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
                oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
                oTable.fnUpdate('<a class="edit" href="">编辑</a>', nRow, 5, false);
                // oTable.fnDraw();
            }
            var oTable = $('#'+tableId).dataTable({
                "aLengthMenu": [
                    [50, 100, -1],
                    [50, 100, "All"] // change per page values here
                ],
                "bSort":false,
                // set the initial value
                "iDisplayLength": -1,
                "bPaginate" : false,
                "sDom": "<'row'<'col-lg-6 gone'l><'col-lg-6 gone'f>r>t<'row'<'col-lg-6 gone'i><'col-lg-6'p>>",
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ 每页显示行数",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumnDefs": [{
                    'bSortable': false,
                    'aTargets': [0]
                }
                ]
            });

            jQuery('#'+tableId+'_wrapper'+' .dataTables_filter input').addClass("form-control medium"); // modify table search input
            jQuery('#'+tableId+'_wrapper'+' .dataTables_length select').addClass("form-control xsmall"); // modify table per page dropdown

            var nEditing = null;

            $('#'+tableId+'_new').click(function (e) {
                e.preventDefault();
                //有问题'.edit,.setsave').html()=='保存'
                if($('.dataTable tbody tr:last-child').find("td").eq(5).find("a").html()=='保存'){
                    sweetAlert("请先保存上一行内容");
                    return;
                }
                var aiNew = oTable.fnAddData(['', '', '', '', '',
                    '<a class="edit" href="">编辑</a>', '<a class="cancel" data-mode="new" href="">取消</a>'
                ]);
                var nRow = oTable.fnGetNodes(aiNew[0]);
                editRow(oTable, nRow);
                nEditing = nRow;
                $('.left-side').scrollTop( $('.left-side')[0].scrollHeight );//让页面始终保持在最底部
                $('.dataTable tbody tr:last-child').find("td").eq(5).find("a").addClass('setsave');
                $('.dataTable tbody tr:last-child').find("td").eq(6).find("a").addClass('setsave');
            });

            $('#'+tableId+' a.delete').live('click', function (e) {
                e.preventDefault();
                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
                //alert("Deleted! Do not forget to do some ajax to sync with backend :)");
                for(var i in mt[tableId]){
                    console.log($(this).parents('tr').eq(0).children('.sorting_1').text());
                    if(mt[tableId][i].c0==$(this).parent().parent().find('td:first').text()){
                        mt[tableId].remove(mt[tableId][i]);
                    }
                }
                // sweetAlert({
                //     title: "确定要删除?",
                //     text: "包括该行以及所有字段",
                //     type: "warning",
                //     showCancelButton: true,
                //     confirmButtonColor: "#DD6B55",
                //     confirmButtonText: "确定",
                //     cancelButtonText: "取消",
                //     closeOnConfirm: false },function(){
                //     sweetAlert({
                //         title:"删除成功!",
                //         text:"您可继续编辑或添加其他行",
                //         type:"success"});
                //
                //
                // });
            });

            $('#'+tableId+' a.cancel').live('click', function (e) {
                e.preventDefault();
                if ($(this).attr("data-mode") == "new") {
                    var nRow = $(this).parents('tr')[0];
                    oTable.fnDeleteRow(nRow);
                } else {
                    restoreRow(oTable, nEditing);
                    nEditing = null;
                }
            });

            $('#'+tableId+' a.edit').live('click', function (e) {

                e.preventDefault();

                /* Get the row as a parent of the link that was clicked on */
                var nRow = $(this).parents('tr')[0];

                if (nEditing !== null && nEditing != nRow) {
                    /* Currently editing - but not this row - restore the old before continuing to edit mode */
                    restoreRow(oTable, nEditing);
                    editRow(oTable, nRow);
                    nEditing = nRow;
                } else if (nEditing == nRow && this.innerHTML == "保存") {
                    /* Editing this row and want to save it */
                    if($('.dataTable tbody tr:last-child').find("td:first-child").find("input").val()==""){
                        sweetAlert("字段名称不能为空!");
                        return;
                    }

                    // if($(".editable-table table tr").eq(0).val()==""){$('.dataTable tbody td').find('td:first').text()==''
                    //     sweetAlert("字段名称不能为空!");
                    //     return;
                    //
                    // }
                    saveRow(oTable, nEditing);
                    nEditing = null;
                   // $('.editable-table table td a').removeClass('setsave');
                    //alert("Updated! Do not forget to do some ajax to sync with backend :)");
                } else {
                    /* No edit in progress - let's start one */
                    editRow(oTable, nRow);
                    nEditing = nRow;
                    // $('.dataTable tbody tr').find("td").eq(5).find("a").addClass('setsave');
                    // $('.dataTable tbody tr').find("td").eq(6).find("a").addClass('setsave');
                }
            });
        }

    };

}();