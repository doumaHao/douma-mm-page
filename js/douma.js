
/*
 屏幕宽高
 */
var window_width = $(window).width();
var window_height = $(window).height();

/*
 初始化必须设置
 */
$(function(){
    $(".douma-show").css("height", window_height+"px");
    $(".douma-hide").click(function(){
        $(this).parents(".douma-show").removeClass("douma-doShow");
    });
});

(function ($) {

    /*
     不同方向的拉入展现
     type:
     hide:隐藏
     show:显示
     */
    $.fn.doumaShowHide = function (type) {
        var thiz = $(this);
        // douma-show-right2left 说明要求从右到左显示，或者从左到右隐藏
        if(thiz.hasClass("douma-show-right2left")){
            if(type === "show") {
                thiz.addClass("douma-doShow");
            } else if(type === "hide"){
                thiz.removeClass("douma-doShow");
            }
        }
    };
})(jQuery);