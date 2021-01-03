$(document).ready(function(){
    $('.sec-02-box-1').hover(function(){
        $('.sec-02-box-1').toggleClass('hoverred');
    });
    $('.sec-02-box-2').hover(function(){
        $('.sec-02-box-2').toggleClass('hoverred');
    });
    $('.sec-02-box-3').hover(function(){
        $('.sec-02-box-3').toggleClass('hoverred');
    });
    $('.sec-02-box-4').hover(function(){
        $('.sec-02-box-4').toggleClass('hoverred');
    });
    $('.sec-02-box-5').hover(function(){
        $('.sec-02-box-5').toggleClass('hoverred');
    });
    $('.sec-02-box-6').hover(function(){
        $('.sec-02-box-6').toggleClass('hoverred');
    });
    $('.sec-02-box-7').hover(function(){
        $('.sec-02-box-7').toggleClass('hoverred');
    });
    $('.sec-02-box-8').hover(function(){
        $('.sec-02-box-8').toggleClass('hoverred');
    });
    $('.slider__list').slick({
        arrows: false,
        dots: true,
        speed: 550,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.header__burger').click(function(){
        $('.header__burger, .nav__list').toggleClass('active');
        $('body').toggleClass('lock');
    });

});



