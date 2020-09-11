$(".main__faqTab").click(function () {
    if(!$(this).hasClass('main__faqTab-wait'))
    {
        if($(this).hasClass('main__faqTab-active')){
            $(this).find('.main__faqTabText').slideUp();
            $(this).find('.main__faqTabContentArrow').removeClass('main__faqTabContentArrow-active');
            $(this).removeClass('main__faqTab-active');
        } else {
            $(this).find('.main__faqTabText').slideDown();
            $(this).find('.main__faqTabContentArrow').addClass('main__faqTabContentArrow-active');
            $(this).addClass('main__faqTab-active');
        }
    }
});