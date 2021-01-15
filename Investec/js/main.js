//tariffs slider
if ($('*').is('.owl-carousel')) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                dots: true,
            },
            1024: {
                items: 3,
                loop: false,
            }
        }
    });
}

//autoscroll
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        if (id == "#about" && $(window).width() > 480) {
            top -= 90;
        } else if (id == "#about") {
            top += 135;
        }
        $('body,html').animate({scrollTop: top}, 1500);
    });
})();

//burger menu
$('.header__burger').click(function () {
    $(this).toggleClass("header__burger-active");
    $("html, body").toggleClass("body-fixed");
    $('.header__nav-mobile').slideToggle();
    $('.header__closeableMask').addClass("header__closeableMask-active");
});
$('.header__closeableMask').click(function () {
    $(".header__burger").removeClass("header__burger-active");
    $('.header__closeableMask').removeClass("header__closeableMask-active");
    $('.header__nav-mobile').slideUp();
    $("html, body").removeClass("body-fixed");
});

//FAQ btns
$(".main__questionsItemHeader").click(function () {
    $(this).parent().toggleClass("main__questionsItem-active");
    $(this).parent().find(".main__questionsItemAnswer").slideToggle();
});