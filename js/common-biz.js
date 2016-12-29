
//共同JS注册
var common_js_init = function(){
    footer_link_func();
};

//同域地址跳转
var gotoNewUrl = function(newUrl){
    var goUtl = "";
    window.location.href.split("/").forEach(function(item, index){
        if(index === 0) {
            goUtl = goUtl + item;
        } else if(index === 1) {
            goUtl = goUtl + item + "//";
        } else if(index === 2){
            goUtl = goUtl + item + newUrl;
            window.location.href = goUtl;
            return goUtl;
        }
    });
};

//底部连接跳转
var footer_link_func = function(){
    $("#bookin").click(function(){
        gotoNewUrl("/mm/html/index/index.html");
    });
    $("#statistics").click(function(){
        gotoNewUrl("/mm/html/worth/worth.html");
    });
};