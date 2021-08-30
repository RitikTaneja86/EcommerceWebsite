$(window).on('scroll',function(){
    if($(window).scrollTop()) {
        $('.review').css("padding-top","105px");
    }else {
        $('.review').css("padding-top","0px");
    }
})