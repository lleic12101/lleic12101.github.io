﻿//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//plans
$('.main-plans__item').click(function () {
    $('.main-plans__item').removeClass('selected');
    $(this).addClass('selected');
});

//systems
$('.main-systems__item').click(function () {
    $('.main-systems__item').removeClass('selected');
    $(this).addClass('selected');
});