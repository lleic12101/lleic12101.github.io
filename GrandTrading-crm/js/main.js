//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.aside').toggleClass("aside-active");
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