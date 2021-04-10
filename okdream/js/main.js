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

//scroll to
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        if ($(this).hasClass('header-mobile__navLink')) {
            $('.header-mobile__toggleBlock').removeClass("header-mobile__toggleBlock-active");
            $('.header-mask').removeClass("header-mask__active");
            $("html, body").removeClass("body-fixed");
        }
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        if (($(window).width() <= 1537 && $(window).width() >= 1459) ||
            ($(window).width() <= 1457 && $(window).width() >= 1025)) {
            top -= (top / 100) * 20;
        }
        if ($(window).width() <= 1160) {
            top -= 58;
        }
        $('body,html').animate({scrollTop: top}, 1500);
    });
})();

//scrollup btn
$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
})
function checkScroll() {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').addClass('scrollup-active');
    } else {
        $('.scrollup').removeClass('scrollup-active');
    }
}

//sticky header
// var c, currentScrollTop = 0, navbar = $("header");
$(window).scroll(function () {
    // var a = $(window).scrollTop();
    // var b = 60;
    //
    // currentScrollTop = a;
    //
    // if (c < currentScrollTop && a > b + b && !$("body").hasClass("body-fixed")) {
    //     navbar.addClass("scrollUp");
    //     $("header .navbar-collapsed-nav").slideUp(300);
    // } else if (c > currentScrollTop && !(a <= b)) {
    //     navbar.removeClass("scrollUp")
    // }
    //
    // c = currentScrollTop;

    checkScroll();
});