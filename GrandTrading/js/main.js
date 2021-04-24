//resize func
$(window).on('resize', function () {
    resizeEmptySpace();

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

resizeEmptySpace();

function resizeEmptySpace() {
    // if ($('*').is('.main__certificate')) return;

    $(".main").css("height", "auto");

    var footer = $(".footer").innerHeight();
    var windowHeight = $(window).height();
    var main = $(".main").innerHeight();

    if ($(window).width() >= 1025 && $(window).width() <= 1537) {
        windowHeight += (windowHeight / 100) * 25;
    }
    if ((footer + main) < windowHeight) {
        $(".main").css("height", (windowHeight - footer));
    } else {
        $(".main").css("height", "auto");
    }
}

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

//tabs
$('.main-faq__buttonText').click(function () {
    $('.main-faq__button').removeClass('main-faq__button-active');
    $(this).parent().addClass('main-faq__button-active');

    var id = $(this).parent().attr("id");
    id = id.substr(0, id.length - 3);

    $('.main-faq__tab').removeClass("main-faq__tab-active");
    $("#" + id).addClass("main-faq__tab-active");
});

//faq
$(".main-faq__tabItemHeader").click(function () {
    if ($(this).hasClass("main-faq__tabItemHeader-active")) {
        $(".main-faq__tabItemHeader").removeClass("main-faq__tabItemHeader-active");
        $(".main-faq__tabItemText").slideUp();
    } else {
        $(".main-faq__tabItemHeader").removeClass("main-faq__tabItemHeader-active");
        $(".main-faq__tabItemText").slideUp();
        $(this).parent().find(".main-faq__tabItemText").slideDown();
        $(this).addClass("main-faq__tabItemHeader-active");

        resizeEmptySpace();
    }
});

//plans open
$('.main-plans__show').click(function () {
    $('.main-plans__items-hidden').slideDown();
    $(this).fadeOut();
});

//contacts form
$(".main-contacts__formSuccessIcon").click(function () {
    $(".main-contacts__form")[0].reset();
    $(".main-contacts__formSuccess").removeClass("main-contacts__formSuccess-active");
});
$(".main-contacts__form").submit(function (e) {
    e.preventDefault();
    $(".main-contacts__formSuccess").addClass("main-contacts__formSuccess-active");
});