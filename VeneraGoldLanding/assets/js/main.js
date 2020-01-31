(function (){
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
})();

$('.hamburger').click(function () {
    $('.headerNavBlock').slideToggle();
});

var header = document.querySelector('header');
document.onscroll = function() {
    if(pageYOffset >= document.documentElement.clientHeight - 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

$('.main__faqItemHeader').click(function () {
    if($(this).hasClass('active')){
        $(this).parent().find('.main__faqItemContent').slideUp();
        $(this).find('.main__faqItemSignPlus').show();
        $(this).removeClass('active');
    } else {
        $('.main__faqItemContent').slideUp();
        $('.main__faqItemSignPlus').show();
        $('.main__faqItemHeader').removeClass('active');

        $(this).parent().find('.main__faqItemContent').slideDown();
        $(this).find('.main__faqItemSignPlus').hide();
        $(this).addClass('active');
    }
});