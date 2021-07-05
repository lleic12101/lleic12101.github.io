//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//conversation video change
$('#conversation-change').click(function () {
    $('.main-conversation').toggleClass('main-conversation-video');
});