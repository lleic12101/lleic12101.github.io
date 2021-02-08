//copy to clipboard
$('.main__referralBtn').click(function () {
    copyToClipboard();
});
$('.main__referralBtn-mobile').click(function () {
    copyToClipboard();
});
function copyToClipboard(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.main__referralInput').val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".main__referralInputCopied").text("copied");
}

//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header__navWrapper').toggleClass("header__navWrapper-active");
    $('.header__closeableMask').addClass("header__closeableMask-active");
});
$('.header__closeableMask').click(function () {
    $('.ham').removeClass("active");
    $('.header__closeableMask').removeClass("header__closeableMask-active");
    $('.header__navWrapper').removeClass("header__navWrapper-active");
    $("html, body").removeClass("body-fixed");
});

//plans slider
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
            730: {
                items: 2,
                dots: true,
            },
            1210: {
                items: 3,
                loop: false,
            }
        }
    });
}