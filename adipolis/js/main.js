//burger menu
$('.checkbox1').click(function () {
    $('.header__closebleMask').toggleClass("header__closebleMask-active");
    $('.header__navToggleBlock-mobile').slideToggle();
});
$('.header__closebleMask').click(function () {
    $('.header__closebleMask').removeClass("header__closebleMask-active");
    $('.header__navToggleBlock-mobile').slideUp();
    $('.checkbox1').prop("checked", false);
});

//scroll to
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        if ($(window).width() < 768) {
            top -= 60;
            $('.header__closebleMask').removeClass("header__closebleMask-active");
            $('.header__navToggleBlock-mobile').slideUp();
            $('.checkbox1').prop("checked", false);
        }
        $('body,html').animate({scrollTop: top}, 1500);
    });
})();

//tabs
$('.main__footerContentBtn').click(function () {
    $('.main__footerContentBtn').removeClass('main__footerContentBtn-active');
    $(this).addClass('main__footerContentBtn-active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.main__footerContentTab').removeClass("main__footerContentTab-active");
    $("#" + id + "tab").addClass("main__footerContentTab-active");
});