$(window).on('scroll',function(){
    if($(window).scrollTop()) {
        $('.contact').css("padding-top","105px");
    }else {
        $('.contact').css("padding-top","0px");
    }
})