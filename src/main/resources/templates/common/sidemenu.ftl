<style>
    .nav-menu-footer{
        bottom: 0px;
        width: 100%;
        position: absolute;
        border-top: 1px solid #696969
    }
    .nav-menu-footer-open{
        padding: 0 0 0 20px;
        height: 130px;

    }
    .nav-menu-footer-close{
        padding: 0 6px;
        height: 220px;
    }
    .admia-info{
        overflow: hidden;
        padding-top: 20px;
    }
    .admia-info a.admia-avatar{
        display: inline-block;
        margin-right: 10px;
        text-align: center;
    }
    .admia-info a.admia-avatar img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-repeat: no-repeat;
    }
    .admin-info .userpic {
        display: block;
        float: left;
        width: 36px;
        height: 36px;
        margin: 2px auto 0 2px;
        text-align: center;
        vertical-align: middle;
        border-radius: 50px;
    }
    .user-info{
        color:#fff
    }
    .nav-menu-footer-close .admia-info span{
        display: none;
    }
    .step-pod{
        margin-top: 20px;
    }
    .step-pod a{
        margin-right: 15px;
        color: #fff;
        cursor: pointer;
        margin-left: 3px;
    }
    .step-pod a:hover{
        color: orange;
    }
    .nav-menu-footer-close .step-pod a{
        margin-left: 10px;
    }
    .nav-menu-footer-close .step-pod i{
        margin-bottom: 15px;
    }
    .step-pod i{
        font-size: 18px;
    }
</style>
<div class="left-side sticky-left-side">
    <div class="logo">
        <a href="index.html"><img src="images/logo.png" style="width:130px;height:42px" alt=""></a>
    </div>
    <div class="logo-icon text-center">
        <a href="index.html"><img src="images/logo_icon.png" style="width:40px;height:40px;margin-top: 10px;" alt=""></a>
    </div>
    <div class="left-side-inner">
        <ul class="nav nav-pills nav-stacked custom-nav">
        
            <#--<#list currentUser.user.roleAuthorizations as au>-->
	            <#--<#if au.isMenu == "1">-->
	            	<#--<li class="menu-list"><a onclick="${au.onclick}"><i class="${au.isImg}"></i> <span>${au.menuname}</span></a></li>-->
	            <#--</#if>-->
            <#--</#list>-->
                <li class="menu-list"><a onclick="createtablePage();"><i class="fa fa-list-alt"></i> <span>业务元数据</span></a></li>
                <li class="menu-list"><a onclick="configurationPage();"><i class="fa fa-database"></i> <span>数据源接入</span></a></li>
                <li class="menu-list"><a onclick="tagPage();"><i class="fa fa-tag"></i> <span>标签分类</span></a></li>
                <li class="menu-list"><a onclick="dispatchPage()"><i class="fa fa-clock-o"></i> <span>调度管理</span></a></li>
                <#--<li class="menu-list"><a onclick="automationPage();"><i class="fa fa-code-fork"></i> <span>自动化配置</span></a></li>-->
                <#--<li class="menu-list"></li>-->
                <#--<li class="menu-list"></li>-->
        </ul>
</div>
    <div class="nav-menu-footer nav-menu-footer-open">
        <div class="admia-info">
            <a href="javascript:void(0)" class="admia-avatar" title="${currentUser.username}"><img src="images/tag/default-face.png" class="userpic" alt="${currentUser.username}"></a>
            <span class="user-info">${currentUser.username}</span>
        </div>
        <div class="step-pod">
            <a onclick="loginout()"  title="退出登录"><i class="fa fa-sign-out"></i></a>
            <a class="toggle-btn"  title="折叠"><i class="fa fa-bars"></i></a>
        </div>
    </div>
    <#--<ul class="sub-menu-list" style="display: none;">-->
        <#--<li><a onclick="dispatchCreatePage()">创建作业</a></li>-->
        <#--<li><a onclick="dispatchManagePage()">作业管理</a></li>-->
        <#--<li><a onclick="dispatchResourePage()">资源管理</a></li>-->
    <#--</ul>-->
    
   
      <!--  <div class="left-side-inner">
        <ul class="nav nav-pills nav-stacked custom-nav">
            <li class="menu-list nav-active"><a onclick="indexPage();"><i class="fa fa-home"></i> <span>首页</span></a></li>
            <li class="menu-list"><a onclick="createtablePage();"><i class="fa fa-list-alt"></i> <span>业务元数据</span></a></li>
	            
            <li class="menu-list"><a onclick="configurationPage();"><i class="fa fa-database"></i> <span>数据源接入</span></a></li>
            <#list currentUser.user.roleAuthorizations as au>
	            <#if currentUser?? && au.mid == "ab" && au.pid == "aa">
	            	<li class="menu-list"><a onclick="userRolePage();"><i class="fa fa-sitemap"></i> <span>用户管理</span></a></li>
	            </#if>
	            <#if currentUser?? && au.mid == "af" && au.pid == "ae">
	            	<li class="menu-list"><a onclick="powermanagePage();"><i class="fa fa-sitemap"></i> <span>权限管理</span></a></li>
	            </#if>
            </#list>
            <li class="menu-list"><a onclick="accountspage();"><i class="fa fa-sun-o"></i> <span>账号分配</span></a></li>
            <li><a href="logout"><i class="fa fa-sign-out"></i> 退出登陆</a></li>
            <li><a class="toggle-btn"><i class="fa fa-bars"></i></a></li>

    </div>
    -->
</div>

