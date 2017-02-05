<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>登录</title>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
   <link rel="stylesheet" href="css/mystyle.css">
    <style>
        .error-login{
            color: orange;
            text-align: center;
            font-weight: 400;
            margin-top: 20px;
        }

    </style>
</head>
<body class="login-body">
    <div class="container-fulid">
        <a href="#"><img style="width: 210px;height:60px;margin-top:30px;margin-left: 20px;" src="images/logo.png" alt=""/></a>
        <span class="system pull-right">后台管理系统</span>
        <div class="login-main">
            <div id="loginForm" class="login-form">
                <div class="row">
                    <div class="col-md-5">
                        <div class="input-part">
                            <span class="lg-icon fa fa-user"> </span>
                            <input type="text" id="username" name="username" placeholder="请输入用户名" required>
                            <span class="botton-line1"></span>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="input-part">
                            <span class="lg-icon fa fa-lock"> </span>
                            <input type="password" id="password" name="password" placeholder="请输入密码" required>
                            <span class="botton-line2"></span>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="button button--antiman login-btn">登陆</button>
                    </div>
                </div>
            </div>
            <p class="error-login hidden">用户名或密码错误</p>
        </div>
    </div>
<script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script>
        $(function () {
            $('#username').focus(function () {
                $('.botton-line1').addClass('active');
            }).blur(function () {
                $('.botton-line1').removeClass('active');
            });
            $('#password').focus(function () {
                $('.botton-line2').addClass('active');
            }).blur(function () {
                $('.botton-line2').removeClass('active');
            });
        });
        $(".login-btn").click(function(){
            var username=$("#username").val();
            var password=$("#password").val();
            user={
                username:username,
                password:password
            }
            $.ajax({
                type: "POST",
                url: 'login',
                data: user,
                dataType: "json",
                success: function (data) {
                    if(data.code==0){
                        $(".error-login").removeClass("hidden")
                    }else{
                        window.location.href="index"
                    }
                }
            })
        })



    </script>

</body>
</html>