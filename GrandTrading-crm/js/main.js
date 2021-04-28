//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header-nav__wrapper-mobile').toggleClass("header-nav__wrapper-active");
    $('.header-mask').toggleClass("header-mask__active");
});
$('.header-mask').click(function () {
    $('.ham').removeClass("active");
    $('.header-mask').removeClass("header-mask__active");
    $('.header-nav__wrapper').removeClass("header-nav__wrapper-active");
    $("html, body").removeClass("body-fixed");
});

//copy to clipboard
$('.main-link__button').click(function () {
    copyToClipboard();
});
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.main-link__input').val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".main-link__copied").text("copied");
}