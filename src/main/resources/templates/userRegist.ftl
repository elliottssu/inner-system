<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<title>用户注册</title>
  	<link rel="stylesheet" href="css/common.css">
  	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
  	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
	<script src="js/respond.min.js"></script>
	<![endif]-->
</head>
<body class="login-body">
	<nav class="navbar">
	  <div class="container">
	      <a href="#">
	        <!--若LOGO是图片，必须手工控制器位置-->
	        <img style="width: 210px;height:60px;margin-top:30px;" src="images/logo.png" alt=""/>
	      </a>
	  </div>
	</nav>
    <div class="container">
        <form id="registrationForm" class="form-signin form-horizont" action="user/save" method="post" style="margin: 2vh auto 3vh auto;">
            <div class="form-signin-heading text-center" style="padding-bottom:5px;">
                <h1 class="sign-title">用户注册</h1>
            </div>
            <div class="login-wrap">
                <div class="form-group">
                    <label for="name">用户名:</label>
                    
                    <input id="username" type="text" class="form-control" name="username" placeholder="用户名">
                </div>
    
                <div class="form-group">
                    <label for="pwd">密码:</label>
                    <input id="password" type="password" class="form-control" name="password" placeholder="密码">
                </div>
                <div class="form-group">
                    <label for="repwd">确认密码:</label>
                    <input id="repassword" type="password" class="form-control" name="passwordRepeated" placeholder="确认密码">
                </div>
                <button type="submit" class="btn btn-lg btn-login btn-block submit" style="margin-top:30px;">
                    	注册
                </button>
                <div class="registration">
                  	  已经注册.
                    <a href="loginPage" class="">
                       	 登录
                    </a>
                </div>
            </div>
        </form>
    </div>
	<footer>
		<div style="text-align:center;">
			<span class="copyright">
					&nbsp;&nbsp;Copyright &copy; 2016 北京所问数据科技有限公司 (askingdata.com) 京ICP备16004320号 <br>
				010-56579694 support@askingdata.com 北京市朝阳区广渠门外名敦道2号楼1503 100022
			</span>
		</div>
	</footer>
  <!-- Placed js at the end of the document so the pages load faster -->
  <script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
  <script src="js/bootstrap.min.js" type="text/javascript"></script>
  <script src="js/jquery.cookies.js" type="text/javascript"></script>
  <script type="text/javascript" src="js/jquery.validate.min.js"></script>  
  <script>
		$().ready(function(){
		    $("#registrationForm").validate({
		        rules:{
		            username:{
		                required: true,
		                minlength: 2,
		                checkUsername:true		                		      
		            },
		            email: {
		                required: true,
		                email: true,
		                checkEmail:true
		            },
		            password: {
		                required: true,
		                minlength: 5
		            },
		            reppassword: {
		                required: true,
		                minlength: 5,
		                equalTo: "#password"
		            }
		        },
		        messages:{
		            username:{
		                required:"请输入用户名",
		                minlength:"您的用户名必须至少包括2个字符"
		            },
		            email:{
		                required:"请输入邮箱地址",
		                email:"请输入一个正确的邮箱地址"
		            },
		            password:{
		                required:"请输入密码",
		                minlength:"您的密码必须至少5个字符"
		            },
		            reppassword: {
		                required: "请再次输入密码",
		                minlength: "您的密码必须至少5个字符",
		                equalTo: "请输入相同的密码"
		            }
		            
		        },
		        success:function(label){
		        	if(label.attr("for")=="username"){
		        		$("label[for='username']").html("<span style=\"color:green;\">用户名可用！</span>");
		        	}else if(label.attr("for")=="email"){
		        		$("label[for='email']").html("<span style=\"color:green;\">邮箱可用！</span>");
		        	}else if(label.attr("for")=="password"){
		        		$("label[for='password']").remove();
		        	}else if(label.attr("for")=="repassword"){
		        		$("label[for='repassword']").remove();
		        	}																				
				}
		    });
		    // 自定义用户名验证规则————检查用户名是否被注册
		    jQuery.validator.addMethod("checkUsername", function (value, element){
				var result=true;
				$.ajax({
						url:'checkUsername?username='+ value,
						method : 'get',
						async:false,
						success : function(data) {
							if(data==0){
							   result=false;
							}
						}
				})
				return result;
			},"用户名已经被注册");
			
			// 自定义邮箱验证规则————检查邮箱是否被注册
			jQuery.validator.addMethod("checkEmail", function (value, element){
				var result=true;
				$.ajax({
						url:'checkEmail?email='+ value,
						method : 'get',
						async:false,
						success : function(data) {
							if(data==0){
							   result=false;
							}
						}
				})
				return result;
			},"邮箱已经被注册");
		});
  </script>
</body>
</html>