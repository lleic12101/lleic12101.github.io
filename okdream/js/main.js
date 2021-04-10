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