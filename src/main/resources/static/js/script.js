
(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"rgb(144, 144, 144)", cursorwidth: '7', cursorborderradius: '5px', background: '#f1f4f5', spacebarenabled:false, cursorborder: '1px solid rgb(241, 244, 245)',  zindex: '100',autohidemode:false});

    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#65cea7", cursorwidth: '3', cursorborderradius: '0px', background: '#424f63', spacebarenabled:false, cursorborder: '0'});


    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }



    // Toggle Left Menu
   jQuery('.menu-list > a').click(function() {

      var parent = jQuery(this).parent();
      var sub = parent.find('> ul');

      if(!jQuery('body').hasClass('left-side-collapsed')) {
         if(sub.is(':visible')) {
            sub.slideUp(200, function(){
               parent.removeClass('nav-active');
               jQuery('.main-content').css({height: ''});
               // mainContentHeightAdjust();
            });
         } else {
            visibleSubMenuClose();
            $(".menu-list").removeClass("nav-active");
            parent.addClass('nav-active');
            sub.slideDown(200, function(){
                // mainContentHeightAdjust();
            });
         }
      }
      return false;
   });
   //  $(".left-side-inner li").bind("click",function(){
   //      $(this).addClass("nav-active").siblings().removeClass("nav-active")
   //  })
   
   jQuery('.sub-menu-list >li> a').click(function(){
	   var parent = jQuery(this).parent();
	   var sub = parent.find('> ul');
	   if(!jQuery('body').hasClass('left-side-collapsed')) {
			$(".sub-menu-list li").removeClass("active");
			parent.addClass('active');
      }
      return false;
   });

   function visibleSubMenuClose() {
      jQuery('.menu-list').each(function() {
         var t = jQuery(this);
         if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
               t.removeClass('nav-active');
            });
         }
      });
   }

   // function mainContentHeightAdjust() {
   //    // Adjust main content height
   //    var docHeight = jQuery(document).height();
   //    if(docHeight > jQuery('.main-content').height())
   //       jQuery('.main-content').height(docHeight);
   // }

   //  class add mouse hover
   jQuery('.custom-nav > li').hover(function(){
      jQuery(this).addClass('nav-hover');
   }, function(){
      jQuery(this).removeClass('nav-hover');
   });


   // Menu Toggle
   jQuery('.toggle-btn').click(function(){
       $(".left-side").getNiceScroll().hide();
       
       if ($('body').hasClass('left-side-collapsed')) {
           $(".left-side").getNiceScroll().hide();
       }
      var body = jQuery('body');
      var bodyposition = body.css('position');

      if(bodyposition != 'relative') {

         if(!body.hasClass('left-side-collapsed')) {
             jQuery(".nav-menu-footer").removeClass("nav-menu-footer-open").addClass("nav-menu-footer-close");
             body.addClass('left-side-collapsed');
            jQuery('.custom-nav ul').attr('style','');

            jQuery(this).addClass('menu-collapsed');

         } else {
             jQuery(".nav-menu-footer").removeClass("nav-menu-footer-close").addClass("nav-menu-footer-open");
             body.removeClass('left-side-collapsed chat-view');
            jQuery('.custom-nav li.active ul').css({display: 'block'});

            jQuery(this).removeClass('menu-collapsed');

         }
      } else {

         if(body.hasClass('left-side-show'))
            body.removeClass('left-side-show');
         else
            body.addClass('left-side-show');

         // mainContentHeightAdjust();
      }

   });
   

   searchform_reposition();

   jQuery(window).resize(function(){

      if(jQuery('body').css('position') == 'relative') {

         jQuery('body').removeClass('left-side-collapsed');

      } else {

         jQuery('body').css({left: '', marginRight: ''});
      }

      searchform_reposition();

   });

   function searchform_reposition() {
      if(jQuery('.searchform').css('position') == 'relative') {
         jQuery('.searchform').insertBefore('.left-side-inner .logged-user');
      } else {
         jQuery('.searchform').insertBefore('.menu-right');
      }
   }

    // panel collapsible
    $('.panel .tools .fa').click(function () {
        var el = $(this).parents(".panel").children(".panel-body");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200); }
    });

    $('.todo-check label').click(function () {
        $(this).parents('li').children('.todo-title').toggleClass('line-through');
    });

    $(document).on('click', '.todo-remove', function () {
        $(this).closest("li").remove();
        return false;
    });

    $("#sortable-todo").sortable();


    // panel close
    $('.panel .tools .fa-times').click(function () {
        $(this).parents(".panel").parent().remove();
    });



    // tool tips

    $('.tooltips').tooltip();

    // popovers

    $('.popovers').popover();


})(jQuery);


// 日期控件初始化
function selectPickerInit(obj){
	obj.selectpicker({
  		//style: 'btn-info',
  		width:'100px'
	});
/*	$(".startDate").val("2014-01-01");
	$(".endDate").val(getCurDate());*/
	
	var startDate=dateAdd(new Date(), "month", -12);
	var endDate=dateAdd(new Date(), "month", 6);
	$(".startDate").val(startDate.format("yyyy-MM-dd"));
	$(".endDate").val(endDate.format("yyyy-MM-dd"));
}

// 日期范围控件初始化
function timeRangePickerInit(){
	var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    // 起始时间
    var checkin = $('.startDate').datepicker({
    	format: 'yyyy-mm-dd',
        onRender: function(date){
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()){
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $('.endDate')[0].focus();
    }).data('datepicker');
    
    // 终止时间
  	var checkout = $('.endDate').datepicker({
  		format: 'yyyy-mm-dd',
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev){
            checkout.hide();
    }).data('datepicker');
}

// 取得当前日期
function getCurDate(){
	var today = new Date();
	
	return today.format("yyyy-MM-dd");	
}
