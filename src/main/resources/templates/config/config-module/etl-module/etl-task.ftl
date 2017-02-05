<!-- etl-task.ftl start-->
<style>
    .unitlist{
        margin-left: 0px;
        margin-top: 10px;
    }
    .unitlist a{
        margin-left: 20px!important;
        padding: 0px 10px!important;
    }
    .unitlist li{
        width: 140px!important;
        margin-top: 0px!important;
    }
    .unitlist li a:hover{
        background-color: orange!important;
        color: white!important;
    }
    .chooseTableName{
        color: #ff9283;
        font-weight: 400;
        font-size: 12px;
        margin-top: -17px;
        margin-left: 36px;
        height:15px;

    }
    .choose-nav{
        margin-top: -20px;
        margin-left: 33px;
    }
    #taskContent .ms-container{
        width: 100%;
    }
    #taskContent .ms-container-new-1,#taskContent .ms-container-new-2{
        width: 42%;
    }
    .etlchoosetable{
        height: 300px;
        width: 600px;
        margin-top: -150px;
        margin-left: -300px;
        top: 60%;
        left: 50%;
        position: absolute;
    }
    .etl-workspace{
        /*width: 550px;*/
        /*float: left;*/
    }
    .ext-margin{
        margin: 15px auto;
        width: 500px;
    }
    .well .tab-content{
        margin-top: 40px;
    }
    .etl-tableshow{
        width: 265px;
        z-index: 10;
        position: fixed;
        background: #fff;
        box-shadow: -8px 10px 12px rgba(0,0,0,.06);
        border-left: 1px solid #e2eaec;
        border-bottom: 1px solid #e2eaec;
        right: 46px;
        top: 343px;
        -webkit-transform: translate3d(360px,0,0);
        -moz-transform: translate3d(360px,0,0);
        -ms-transform: translate3d(360px,0,0);
        -o-transform: translate3d(360px,0,0);
        transform: translate3d(360px,0,0);
        -webkit-transition: all 600ms cubic-bezier(0.215,.61,.355,1);
        -moz-transition: all 600ms cubic-bezier(0.215,.61,.355,1);
        -o-transition: all 600ms cubic-bezier(0.215,.61,.355,1);
        transition: all 600ms cubic-bezier(0.215,.61,.355,1);
        /*折叠展开*/
    }
    .etl-tableshow.show-active{
         -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    .ext-main-title{
        line-height: 30px;
        height: 30px;
        text-align: center;
        padding-left: 20px;
        margin-bottom: 50px;
        color: rgb(255, 255, 255);
        background: #6AC1B8;
        font-size: 13px;
        margin-left: 0px;
        border-radius: 10px;
    }
    .etl-main-title{
        line-height: 48px;
        height: 50px;
        padding-left: 20px;
        margin-bottom: 20px;
        color: rgb(255, 255, 255);
        font-size: 13px;
        border-bottom: 1px solid #e2eaec;
        background: #ececec;
    }
    .etl-main-function{
        line-height: 30px;
        height: 30px;
        text-align: center;
        padding-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #fff;
        background: orange;
        font-size: 13px;
        margin-left: 2px;
        border-radius: 10px;
    }
    .output-type{
        height: 40px;
        width: 40px;
        display: inline-block;
        line-height: 40px;
        border-radius: 20px;
        background-color: #6AC1B8;
        text-align: center;
        font-size: 13px;
    }
    .output-name,.etl-tableshow .table-label,.etl-main-title .mapname{
        color: #e66;
        margin-left: 10px;
    }
    .output-arr{
        height: 200px;
        width: 200px;
        margin: 0 auto;
        padding: 8px;
        border: 1px dotted rgb(197, 197, 197);
        overflow-x: hidden;
    }
    .output-arr li{
        border-bottom: 1px solid #eee;
        line-height: 23px;
    }
    .output-arr li:last-child{
        border-bottom: none;
    }
    .extlabel{
        height: 170px;
        width: 200px;
        margin: 0 auto;
        padding: 10px 5px 5px 5px;
        border-top: 1px solid #e66;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .ext-post .ms-selection{
        margin-top: 44px;
    }
    .ext-post .ms-container input{
        width:410px
    }
    .agg-select-choose .search-field{
        height: 34px;
        line-height: 34px;
    }
    .agg-select-choose .search-choice{
        line-height: 20px!important;
    }
    .map-chosenselect .m1 .chosen-container.chosen-container-single{
        width: 190px!important;
    }
    /*.ext-post.map-multiselect .ms-container input{*/
        /*width: 170px!important;*/
    /*}*/
    .ext-post-a.map-multiselect .ms-container.ms-container-new-1{
        width: 241px!important;
    }
    .ext-post-a.map-multiselect .ms-container.ms-container-new-1 .ms-selectable{
        width: 127px!important;
    }
    .ext-post-a.map-multiselect .ms-container.ms-container-new-1 .ms-selection{
        width: 73px!important;
    }
    .ext-post-a.map-multiselect .ms-container.ms-container-new-2{
        width: 223px!important;
    }
    .ext-post-a.map-multiselect .ms-container.ms-container-new-2 .ms-selectable{
        width: 128px!important;
    }
    .ext-post-a.map-multiselect .ms-container.ms-container-new-2 .ms-selection{
        width: 73px!important;
        margin-left: 94px!important;
    }
    .loading-table .chosen-container.chosen-container-single,.loading-table .chosen-container.chosen-container-multi{
        width: 160px!important;
    }
    .continutsetp{
        display: inline-block;
        float: right;
        height: 30px;
        width: 30px;
        cursor: pointer;
        line-height: 32px;
        font-size: 13px;
        margin-right: 5px;

    }


    .step-navs{
        position: relative;
        width: 28px;
        height: 28px;
        line-height: 28px;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
    .step-navs>li,.step-navs:after{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        border-radius:50%;
        -webkit-border-radius:50%;
        background-color:#ff9283;
    }
    .step-navs>li{
        transition:all .6s;
        -webkit-transition:all .6s;
        -moz-transition:.6s;
    }
    .step-navs>li a:hover {
        background-color: #ff9283;

    }
    .step-navs:after{
        content: url(././images/config/nextstep.png);
        line-height: 38px;
        z-index: 1;
        border-radius: 50%;
        width: 32px;
        -webkit-border-radius: 50%;
        height: 32px;
        margin: -1px;
    }
    .step-navs.step-active:after{
        content:url(././images/config/stepopen.png);
        line-height: 35px
    }
    .step-navs a{
        width:30px;
        height:30px;
        display:inline-block;
        border-radius:50%;
        -webkit-border-radius:50%;
        text-decoration:none;
        color:#fff;
        background: #6AC1B8;
        font-size:0.5em;
    }

    .show-toggle{
        position: relative;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        list-style-type: none;
        margin-top: -20px;
        margin-right: 11%;
        float: right;
        text-align: center;
        background-color:#ff9283;
        cursor: pointer;

    }
    .show-toggle span{
        background: url(././images/config/show-toggle.png);
        background-repeat: no-repeat;
        width: 32px;
        height: 32px;
        margin-top: 8px;
        margin-left: -8px;
        line-height: 34px;
        position: absolute;

    }
    .taskstep li a{
        background: white!important;
        color: #7a7676!important;
        height: 27px;
    }
    .taskstep li.active a,.taskstep li a:hover{
        background-color: white!important;
        color: orange!important;
    }
    .taskstep li a:before{
        content:url(././images/config/tree-limb.png);
        margin-right: 7px;
    }
    .taskstep li .delect-step{
        float: right;
        margin-right: -40px;
        margin-top: -14px;
        cursor: pointer;

    }






</style>
    <div class="panel-body" style="border: 1px solid #fff;">
        <#--选择模板表-->
        <div class="clear etlchoosetable">
            <div class="clear ext-margin">
                <label class="col-md-2  control-label label-weight" style="line-height: 18px;">模板表:</label>
                <div class="col-md-6">
                    <select id="" class="form-control templateTableSelect">
                        <option value="0" disabled selected hidden>请选择模板表</option>
                    </select>
                </div>

                <div class="col-md-2"><span class="btn btn-pinku createEtl">创建</span></div>

            </div>
            <div class="form-group hide">
                <label class="col-md-2 col-md-offset-1 control-label" style="line-height: 30px;">描述:</label>
                <div class="col-md-6">
                    <textarea id="" rows="2" class="form-control descriptionUnits" style="resize: none"></textarea>
                </div>
            </div>
            <div class="ball-loader hide" style="margin-left: 36%"></div>

        </div>

          <#--任务操作  -->
        <div id="" class="well hide clear" style="padding:20px!important;border:none;">
           <#--每个标签页对应一个面板-->
               <div id="" class="form-group etlstep-position clear etlStep">
                   <select class="selectStep form-control hide"></select>
                   <ul class="step-navs">
                       <li><a href="javascript:void(0)" title="数据清洗">清洗</a></li>
                       <li><a href="javascript:void(0)" title="数据转换">转换</a></li>
                       <li><a href="javascript:void(0)" title="数据聚合">聚合</a></li>
                       <li><a href="javascript:void(0)" title="数据抽取">抽取</a></li>
                       <li><a href="javascript:void(0)" title="代码映射">映射</a></li>
                       <li><a href="javascript:void(0)" title="数据加载">加载</a></li>
                   </ul>
                   <div class="show-toggle"><span></span></div>
               </div>
               <div id="" class="tab-content clear"></div>
        </div>
    </div>
<!-- etl-task.ftl end-->

