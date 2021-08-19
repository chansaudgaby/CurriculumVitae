$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else {
            $('nav').removeClass("sticky");
        }
    })
    //toggle button menu
    $('.menu-btn').click(function() {
        $('nav .nav_links').toggleClass("active"); 
    })
})