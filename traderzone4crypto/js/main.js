content_size();

window.onload=function(){
    content_size();
};

$(window).resize(function() {
    content_size();
});

//account slider
$('.main__accountSliderItems').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 644,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                variableWidth: false
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    prevArrow: $('.main__accountSliderArrow-left'),
    nextArrow: $('.main__accountSliderArrow-right'),
});

//burger menu
$('#burger1').click(function(){
    $('.sidebar__closebleMask').toggle();
    $('.sidebar__items').slideToggle();
});
$('.sidebar__closebleMask').click(function () {
    $('#burger1').prop('checked', false);
    $('.sidebar__items').slideUp();
    $('.sidebar__closebleMask').hide();
});

//size of content windows
function content_size() {
    if( window.innerWidth > 1420 ){
        $('.sidebar__content').css({marginLeft:(window.innerWidth - ($('.sidebar__content').outerWidth()) - ($('.main__content').outerWidth())) / 2});
        $('.main__content').css({marginRight:(window.innerWidth - ($('.sidebar__content').outerWidth()) - ($('.main__content').outerWidth())) / 2});

        if(($('.sidebar__content').outerHeight()) < ($('.main__content').outerHeight())){
            $('.sidebar__content').css({
                height:($('.main__content').outerHeight())
            });
        } else {
            $('.main__content').css({
                height:($('.sidebar__content').outerHeight())
            });
        }
    } else if (window.innerWidth > 968 ) {
        if(($('.sidebar__content').outerHeight()) < ($('.main__content').outerHeight())){
            $('.sidebar__content').css({
                height:($('.main__content').outerHeight())
            });
        } else {
            $('.main__content').css({
                height:($('.sidebar__content').outerHeight())
            });
        }
    } else {
        $('.sidebar__content').css({
            height:84
        });
    }
}

//gray disabled input
$('input:disabled').css('background-color', '#f0f0f0');