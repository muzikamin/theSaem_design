$(document).ready(function(){




    // 스크롤
    $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });



    // 헤더
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        if(scrollTop >= 10) {
            $('header').css({
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
            });
        }
    });



});