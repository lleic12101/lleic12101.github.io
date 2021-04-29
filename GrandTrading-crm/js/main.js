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

//withdraw
$('.main-output__item').click(function () {
    $('.main-output__item').removeClass('main-output__item-active');
    $(this).addClass('main-output__item-active');
});

//plan
$('.main-plans__itemButton').click(function () {
    $('.main-plans__item').removeClass('main-plans__item-active');
    $('.main-plans__itemButton').html("Select plan");
    $(this).parent().parent().addClass('main-plans__item-active');
    $(this).html("Selected");
});

//team
$('.main-title__button-team').click(function () {
    $('.main-title__button').removeClass('button-active');
    $(this).addClass('button-active');
});