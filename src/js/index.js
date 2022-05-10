/*import "./slick";
const jquery = require("jquery")
window.$ = window.jQuery = jquery;
*/
$('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    autoplay: true,
    draggable: false,
    swipe: true,
    touchThreshold: 10,
    waitForAnimate: false
});

$('.burger').click(function () {

    if ($(".burger i").hasClass("fa-solid fa-bars")) {
        $('.burger i').removeClass('fa-solid fa-bars');
        $('.burger i').addClass('fa-solid fa-square-xmark');
    } else {
        $('.burger i').removeClass('fa-solid fa-square-xmark');
        $('.burger i').addClass('fa-solid fa-bars');
    }
    $('.wrapper').toggleClass('wrapper-open');
    $('.header__nav').toggleClass('open');
    $('.header__navigation').toggleClass('open');
    $('body').toggleClass('fixed-page');
});

$('.header__navigation-item').click(function () {
    if ($(".burger i").hasClass("fa-solid fa-bars")) {
        $('.burger i').removeClass('fa-solid fa-bars');
        $('.burger i').addClass('fa-solid fa-square-xmark');
    } else {
        $('.burger i').removeClass('fa-solid fa-square-xmark');
        $('.burger i').addClass('fa-solid fa-bars');
    }
    $('.wrapper').toggleClass('wrapper-open');
    $('.header__nav').toggleClass('open');
    $('.header__navigation').toggleClass('open');
    $('body').toggleClass('fixed-page');
});