//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//burger menu
$('.header-burger').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header-nav__wrapper').toggleClass("header-nav__wrapper-active");
    $('.header-mask').toggleClass("header-mask__active");
});
$('.header-mask').click(function () {
    $('.header-nav__wrapper').removeClass("header-nav__wrapper-active");
    $('.header-mask').removeClass("header-mask__active");
    $("html, body").removeClass("body-fixed");
});