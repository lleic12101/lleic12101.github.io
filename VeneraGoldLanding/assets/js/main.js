(function (){
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
})();

$('.hamburger').click(function () {
    $('.headerNavBlock').slideToggle();
});
