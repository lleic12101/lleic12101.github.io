//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.aside__navWrapper').toggleClass("aside__navWrapper-active");
    $('.aside__closeableMask').addClass("aside__closeableMask-active");
});
$('.aside__closeableMask').click(function () {
    $('.ham').removeClass("active");
    $('.aside__closeableMask').removeClass("aside__closeableMask-active");
    $('.aside__navWrapper').removeClass("aside__navWrapper-active");
    $("html, body").removeClass("body-fixed");
});