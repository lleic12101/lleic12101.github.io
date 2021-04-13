//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//burger menu
$('.header__burger').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header-mobile__toggleBlock').toggleClass("header-mobile__toggleBlock-active");
    $('.header-mask').toggleClass("header-mask__active");
});
$('.header-mask').click(function () {
    $('.header-mobile__toggleBlock').removeClass("header-mobile__toggleBlock-active");
    $('.header-mask').removeClass("header-mask__active");
    $("html, body").removeClass("body-fixed");
});
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//copy to clipboard
$('.header-referral__button').click(function () {
    copyToClipboard();
});
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.header-referral__input').val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".header-referral__copied").addClass("header-referral__copied-active");
}

//aside about open
$('.aside-about .aside-item').click(function () {
    $(this).parent().find('.aside-about__wrapper').slideToggle(300);
    $(this).parent().find('.aside-item__aboutArrow').toggleClass('aside-item__aboutArrow-active');
});

//currency-mobile
$('.header-currency__link-mobile').click(function () {
    // $('.header-currency__dropdown').css({"display": ""});
    $('.header-currency__dropdown').addClass('header-currency__dropdown-active');
});
$('.header-currency__close').click(function (e) {
    // $('.header-currency__dropdown').fadeOut(300, "linear");
    $('.header-currency__dropdown').removeClass('header-currency__dropdown-active');
    // setTimeout(function () {
    //     $('.header-currency__dropdown').css({"display": ""});
    // }, 300);
});

console.log($(window).width());