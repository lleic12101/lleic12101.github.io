//scroll to
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        if (($(window).width() <= 1537 && $(window).width() >= 1459) ||
            ($(window).width() <= 1457 && $(window).width() >= 1025)) {
            top -= (top / 100) * 20;
            console.log(1);
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
    // checkScrollBuy();
});