
$(function () {
    // 给JS的数组对象定义一个函数，用于查找指定的元素在数组中的位置，即索引
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    // 使用通过得到这个元素的索引，使用js数组自己固有的函数去删除这个元素：
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    //tableJSON字符串拼接
    mt={};
    $('#createTableModule').click(function(){
        if($('#tableModuleName').val()==""){
            $.Notification.autoHideNotify('error', 'top center', '创建失败,内容不能为空 !');
        }else{
            $("#createLabel .ball-loader").removeClass("hide");
            $(this).html("创建中").attr("disabled","disabled");
            setTimeout(function () {
                var tableModuleName=$.trim($('#tableModuleName').val());
                mt[tableModuleName]=[];
                htm(tableModuleName);
            },4000)

        }
    });
    function htm(tableModuleName) {
        post('tableModule', "get", null, function (data) {
            var htm=data;
            var tab_num=-1;
            $("#container").append(htm);
            var ing=$("#createLabel").prev().children('div:last-child');
            ing.find('button').attr('id',tableModuleName+"_new");
            ing.find('table').attr('id',tableModuleName);
            ing.find('.name').html('模板表名称：'+tableModuleName);
            $('#createLabel').addClass('hide');
            $('#continueCreate,#saveTables').removeClass('hide');
            EditableTable.init(tableModuleName,tab_num);
            //删除不必要的
            $('#container .dataTables_length').remove();
            $('#container .dataTables_filter').remove();
            $('#container .dataTables_info').remove();

        }, "html");
    }
    $('#continueCreate').click(function(){
        $('#createLabel,#saveTables').removeClass('hide');
        $('#tableModuleName').val('');
        $('#continueCreate').addClass('hide');
        console.log(JSON.stringify(mt));
        $(".panel").children(".panel-body").slideUp(200);
        $('a.fa-chevron-down').removeClass("fa-chevron-down").addClass("fa-chevron-up");
    });
    // panel collapsible
    $('#container').delegate('.panel .tools .fa','click',function(){
        var el = $(this).parents(".panel").children(".panel-body");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200); }
    });
    // panel close
    $('#container').delegate('.panel .tools .fa-times','click',function(){
        if (confirm("您确定要删除table吗?") == false) {
            return;
        }else{
            $(this).parents(".panel").parent().remove();
            var na=$(this).parents(".panel").find('span.name').text();
            console.log(na);
            delete mt[na];
        }
    });

    //保存table模板
    $('#saveTables').click(function(){
        if($('.edit').html()=='保存'||$('.edit.setsave').html()=='保存'){
            // alert("请先保存每一行数据");
            $.Notification.autoHideNotify('error', 'top center', '保存失败,请先保存每一行数据 !');
            return;
        }else if($('.dataTable tbody td:first').html()=="请添加行"){
        	// alert("请先添加数据");
            $.Notification.autoHideNotify('error', 'top center', '保存失败,请先添加数据 !');
            return;
        }
        sweetAlert({
            title:"保存成功!",
            text:"接下来您可新建或查看模板表",
            type:"success"},function () {
            location.reload();
            //createtablePage();
        })

        console.log(JSON.stringify(mt));
        post("saveInternalTemplate", "post",JSON.stringify(mt), function () {
            
        },"json");
    });


});
//database汉化
(function () {
    var oLanguage = {
        "oAria": {
            "sSortAscending": ": 升序排列",
            "sSortDescending": ": 降序排列"
        },
        "oPaginate": {
            "sFirst": "首页",
            "sLast": "末页",
            "sNext": "下页",
            "sPrevious": "上页"
        },
        "sEmptyTable": "请添加行",
        "sInfo": "第 _START_ 到 _END_ 条记录，共 _TOTAL_ 条",
        "sInfoEmpty": "第 0 到 0 条记录，共 0 条",
        "sInfoFiltered": "(从 _MAX_ 条记录中检索)",
        "sInfoPostFix": "",
        "sDecimal": "",
        "sThousands": ",",
        "sLengthMenu": "每页显示条数: _MENU_",
        "sLoadingRecords": "正在载入...",
        "sProcessing": "正在载入...",
        "sSearch": "搜索:",
        "sSearchPlaceholder": "",
        "sUrl": "",
        "sZeroRecords": "没有相关记录"
    }
    $.fn.dataTable.defaults.oLanguage = oLanguage;
    //$.extend($.fn.dataTable.defaults.oLanguage,oLanguage)

})();