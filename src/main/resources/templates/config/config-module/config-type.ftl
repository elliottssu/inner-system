<style>
    .type-choose {
        height: 400px;
        width: 800px;
        position: absolute;
        top:60%;
        left:55%;
        margin-top: -200px;
        margin-left: -400px;
    }
    .type-choose .caption{
        font-weight: 700;
        line-height: normal;
        font-size: 0.7222222222em;
        color: #555;
        text-transform: uppercase;
        z-index: 1;
        padding-top: 10px;
        padding-left: 10px;
    }
    .type-choose1,.type-choose2,.type-choose3{
        width: 200px;
        height: 150px;
        position: relative;
        border: 1px dotted #d3a627;
        cursor: pointer;
    }
    .type-choose1{
        background: url('images/config/config-type1.png') center no-repeat ;
        background-size: 60% 80%;
        margin-right: 10px;

    }
    .type-choose2{
        background: url('images/config/config-type2.png') center no-repeat ;
        background-size: 60% 80%;
        margin-left: 10px;

    }
    .type-choose3{
        background: url('images/config/config-type3.png') center no-repeat ;
        background-size: 59% 73%;
        margin-left: 10px;

    }
    /*隐藏部分*/
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2
    }

    .overlay:before,.overlay:after {
        position: absolute;
        top: 21px;
        right: 21px;
        bottom: 21px;
        left: 21px;
        content: '';
        opacity: 0;
        z-index: 1;
        -webkit-transition: opacity 0.35s ease, -webkit-transform 0.35s ease;
        transition: opacity 0.35s ease, transform 0.35s ease
    }

    .overlay:before {
        border-top: 1px solid #FFF;
        border-bottom: 1px solid #FFF;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1)
    }

    .overlay:after {
        border-right: 1px solid #FFF;
        border-left: 1px solid #FFF;
        -webkit-transform: scale(1, 0);
        transform: scale(1, 0)
    }



    .overlay-color {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #d3a627;
        opacity: 0;
        -webkit-transition: opacity .35s;
        -moz-transition: opacity .35s;
        -ms-transition: opacity .35s;
        -o-transition: opacity .35s;
        transition: opacity .35s
    }

    .overlay-content {
        position: absolute;
        z-index: 4;
        bottom: 65px;
        left: 87px;
        color: #fff;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(-40px, 0, 0);
        transform: translate3d(-40px, 0, 0)
    }


    .fig-hover-item {
        clear: both;
        position: relative;
        line-height: normal;
    }


    .fig-hover-item:hover .overlay-color {
        opacity: .9;
    }

    .no-opacity .fig-hover-item:hover .overlay-color {
        display: block;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)"
    }

    .fig-hover-item:hover .overlay:before,.fig-hover-item:hover .overlay:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: opacity 0.4s ease, -webkit-transform 0.4s ease .2s;
        transition: opacity 0.4s ease, transform 0.45s ease .2s
    }

    .no-opacity .fig-hover-item:hover .overlay:before,.no-opacity .fig-hover-item:hover .overlay:after {
        display: block
    }

    .fig-hover-item:hover .overlay-content {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    .no-opacity .fig-hover-item:hover .overlay-content {
        display: block
    }

    /*数据类型点击时的动画*/
    @keyframes fx-global {
        0% {  opacity: 1;  }
        27% {  color: transparent;  }
        50% {  transform: rotate(360deg) scale(0);  opacity: 0;  }
        100% {  transform: rotate(360deg) scale(0);  opacity: 0;  color: transparent;  }
    }

    .type-choose1.type-inactive {
        animation: fx-global 1.6s 1 ease-in-out;
        -moz-animation: fx-global 1.6s 1 ease-in-out;
        -webkit-animation: fx-global 1.6s 1 ease-in-out;
    }
    .type-choose2.type-inactive {
        animation: fx-global 1.6s 1 ease-in-out;
        -moz-animation: fx-global 1.6s 1 ease-in-out;
        -webkit-animation: fx-global 1.6s 1 ease-in-out;
    }
    .type-choose3.type-inactive {
        animation: fx-global 1.6s 1 ease-in-out;
        -moz-animation: fx-global 1.6s 1 ease-in-out;
        -webkit-animation: fx-global 1.6s 1 ease-in-out;
    }






</style>
<div class="dataSoureType">
    <h3>数据源类型</h3>
    <div class="type-choose">
        <div class="row">
            <div class="col-md-4">
                <div class="fig-hover-item type-choose1">
                    <p class="caption">茵曼</p>
                    <a href="#"></a>
                    <div class="overlay">
                        <div class="overlay-color"></div>
                        <div class="overlay-content">
                            进入
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="fig-hover-item type-choose2">
                    <p class="caption">一般</p>
                    <a href="#"></a>
                    <div class="overlay">
                        <div class="overlay-color"></div>
                        <div class="overlay-content">
                            进入
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="fig-hover-item type-choose3">
                    <p class="caption">执行计划</p>
                    <a href="#"></a>
                    <div class="overlay">
                        <div class="overlay-color"></div>
                        <div class="overlay-content">
                            进入
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    $(function(){
        $(".type-choose1").click(function () {
            $(".type-choose2,.type-choose3").addClass("type-inactive");
            post("config2","get",null,function(data){
                $(".dataSoureType").html(data);
            })
            $(".dataSoureType").show();
            $(".dataSoureType").css('display','block');
            dataType=2;
        })


        $(".type-choose2").click(function () {
            $(".type-choose1,.type-choose3").addClass("type-inactive");

          // setTimeout(function () {
            //    $(".dataSoureType").children().hide();
                post("config","get",null,function(data){
                    $(".dataSoureType").html(data);
             //       $(".dataSoureType").hide();
                })
                 $(".dataSoureType").show();
                 $(".dataSoureType").css('display','block');
                 
          //  },550);

          //  setTimeout(function () {
          //      $(".dataSoureType").fadeIn(400);
        //    },750)

            dataType=1;//定义全局变量用来区分数据源类型
        })

        $(".type-choose3").click(function () {
            $(".type-choose1,.type-choose2").addClass("type-inactive");
            post("config3","get",null,function(data){
                $(".dataSoureType").html(data);
            })
            $(".dataSoureType").show();
            $(".dataSoureType").css('display','block');
            dataType=3;
        })


    })
</script>