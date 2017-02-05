// 首页
function indexPage(){
    post("main/index","get",null,function(data){
    	$("html,body").animate({scrollTop:0},'fast');
        $("#main").html(data);
    	$(".main-content").css({
        	"height":"100%"
        })

    })

}

//数据源接入
function configurationPage(){
	post("configuration","get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
}

//业务源接入
function createtablePage(){
	post("createTable","get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
}

//用户管理
function userRolePage(){
	post("user/manager","get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})

	})

}

//权限管理
function powermanagePage(){
	post("powerManage","get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
}


//调度管理
function dispatchPage(){
	post("dispatch","get",null,function(data){
		$("#main").html(data);
	})
}
function dispatchManagePage(){
	post("dispatchManage","get",null,function(data){
		$(".card-box-full").html(data);
	})
}
function dispatchResourePage(){
	post("dispatchResoure","get",null,function(data){
		$(".card-box-full").html(data);
	})
}
function dispatchRebuildPage(){
	post("dispatchRebuild","get",null,function(data){
		$(".card-box-full").html(data);
	})
}


//spark自动化配置
function automationPage(){
	post("automation","get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
}

//标签分类
function tagPage(){
	post("tag","get",null,function(data){
		$("html,body").animate({scrollTop:0},'fast');
		$("#main").html(data);
		$(".main-content").css({
			"height":"100%"
		})
	})
}

//退出登录
function loginout() {
	window.location.href = "login"  //部署前加tag
}


