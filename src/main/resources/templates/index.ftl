<!DOCTYPE html>
<html lang="zh">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" pageEncoding="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta HTTP-EQUIV="pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <meta HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1997 08:21:57 GMT">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon"/>
    <!--插件-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap-select.css" >
    <link rel="stylesheet" type="text/css" href="css/jquery.tagsinput.css" />
    <link rel="stylesheet" type="text/css" href="css/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="css/datepicker-custom.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap-table.min.css" />
    <link rel="stylesheet" type="text/css" href="css/animate.css" />
    <link rel="stylesheet" type="text/css" href="css/notification.css" />
    <link rel="stylesheet" type="text/css" href="css/sweet-alert/sweet-alert.css" />
    <link rel="stylesheet" type="text/css" href="css/spinner/spinners.css" />
    <link rel="stylesheet" type="text/css" href="css/config/chosen.css" >
    <link rel="stylesheet" type="text/css" href="css/bootstrap-tagsinput.css">
    <link rel="stylesheet" href="css/pace/pace-theme-minimal.css">
    <link rel="stylesheet" href="css/fileinput/fileinput.min.css">


    <!--公用-->
    <link rel="stylesheet" type="text/css" href="css/mystyle.css">
    <link rel="stylesheet" type="text/css" href="css/style-responsive.css">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <title>所问数据</title>
</head>
<body class="sticky-header">
    <div class="wrapper">
        <#include "common/sidemenu.ftl"/>
        <div class="main-content">
            <div id="main"></div>
        </div>
    </div>

    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.9.2.custom.min.js"></script>
    <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/modernizr.min.js"></script>
    <script type="text/javascript" src="js/jquery.nicescroll.js"></script>
    <script type="text/javascript" src="js/sweet-alert.js"></script>
    <!--boostrap-table-->
    <script type="text/javascript" src="js/bootstrap-table.js"></script>
    <!-- notifications -->
    <script type="text/javascript" src="js/notifications/notify.min.js"></script>
    <script type="text/javascript" src="js/notifications/notifications.js"></script>
    <script type="text/javascript" src="js/notifications/notify-metro.js"></script>
    <!--common scripts for all pages-->
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/page.js"></script>
    <script type="text/javascript" src="js/util.js"></script>
    <script type="text/javascript" src="js/bootstrap-select.js"></script>
    <script type="text/javascript" src="js/bootstrap-paginator.js"></script>
    <script type="text/javascript" src="js/bootstrap-tagsinput.min.js"></script>
    <script type="text/javascript" src="js/jquery.tagsinput.js"></script>
    <script type="text/javascript" src="js/bootstrap-datepicker.js"></script>
    <script type="text/javascript" src="js/daterangepicker.js"></script>
    <script type="text/javascript" src="js/fileinput/fileinput.min.js"></script>
    <script type="text/javascript" src="js/fileinput/fileinput-zh.js"></script>
    <script type="text/javascript" src="js/pace.min.js"></script>

    <script>
        $(function () {
//            createtablePage();

            $(".toggle-btn").click();
            tagPage();
            $(".left-side-inner ul li").eq(0).addClass("nav-active").siblings().removeClass("nav-active")


        })
    </script>


</body>
</html>
