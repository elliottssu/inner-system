<div class="header-section">
    <div class="left-name-normal pull-left">
        <i class="fa fa fa-clock-o"></i> <span> 调度管理</span>
    </div>
    <div class="right-head-nav pull-right">
        <ul class="header-nav">
            <li class="option-active" onclick="dispatchPage()">作业创建</li>
            <li onclick="dispatchManagePage()">查看作业</li>
            <li onclick="dispatchResourePage()">资源管理</li>
            <li onclick="dispatchRebuildPage()">作业修复</li>
        </ul>
    </div>
</div>
<div class="card-box card-box-full">
    <#include "./dispatch-create.ftl"/>
</div>

<script>
    $(function () {
        function heightAuto(){
            var fullheight=$(window).height()-72+'px';
            $(".card-box-full").css('height',fullheight);
        }
        heightAuto();
        $(window).resize(function(){
            heightAuto()
        });


        $(".right-head-nav li").click(function () {
            $(this).addClass('option-active').siblings().removeClass('option-active');
        })
    })
</script>