$(function() {

    /* Fixed Header */ 
    let header = $("#header");
    let headerH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    


    $(document).ready(function(){
        $('nav a').each(function () {
        if (this.href == location.href) $(this).addClass('active');
        });
    });

});