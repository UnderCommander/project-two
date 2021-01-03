$(document).ready(function(){
    $('.read__more-one').hover(function(){
        $('.services__item-one').toggleClass('hovered');
    });
    $('.read__more-two').hover(function(){
        $('.services__item-two').toggleClass('hovered');
    });
    $('.read__more-three').hover(function(){
        $('.services__item-three').toggleClass('hovered');
    });

    $('.team__item-one').hover(function(){
        $('.team__item-content-one1, .team__item-content-one2').toggleClass('hovered');
    });
    $('.team__item-two').hover(function(){
        $('.team__item-content-two1, .team__item-content-two2').toggleClass('hovered');
    });
    $('.team__item-three').hover(function(){
        $('.team__item-content-three1, .team__item-content-three2').toggleClass('hovered');
    });
    $('.feedback__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.header__burger').click(function(){
        $('.header__burger, .menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});