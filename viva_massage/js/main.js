if (sessionStorage.getItem('opened') != null) {
    var openName = sessionStorage.getItem('opened');
    for (var i = 0; i < $('.section__servicesFilterListLiItem p').length; i++) {
        var text = $('.section__servicesFilterListLiItem p')[i];
        if (text.innerHTML === openName) {
            $(text).parent().parent().parent().show();
            $(text).parent().parent().parent().parent().parent().show();
            $(text).parent().parent().children('.section__servicesFilterList').show();
            $(text).parent().parent().parent().parent().children('.section__servicesFilterList').show();
            $(text).parent().parent().parent().parent().parent().parent().parent().parent().children('.section__servicesFilterList').show();

            $(text).parent().parent().parent().parent().children('.section__servicesFilterItemTitle').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
            $(text).parent().parent().parent().parent().parent().parent().parent().parent().children('.section__servicesFilterItemTitle').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
            $(text).parent().parent().parent().parent().children('.section__servicesFilterListLiItem').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
            $(text).parent().parent().children('.section__servicesFilterListLiItem').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');

            $(text).parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');
            $(text).parent().parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');

            i = $('.section__servicesFilterListLiItem p').length;
        }
    }
}

$('.section__servicesFilterItemTitle').click(function () {
    if ($(this).parent().children('.section__servicesFilterList').length > 0) {
        $(this).parent().children('.section__servicesFilterList').slideToggle();
        $(this).children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
    }
});
$('.section__servicesFilterListLiItem').click(function () {
    if ($(this).parent().children('.section__servicesFilterList').length > 0) {
        $(this).parent().children('.section__servicesFilterList').slideToggle();
        $(this).children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
    }
    $('.section__servicesFilterListLiItem').removeClass('section__servicesFilterListLiItem-active');
    $(this).addClass('section__servicesFilterListLiItem-active');
    $(this).parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');
    $(this).parent().parent().parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');

    var name = $(this).children('p').html();
    sessionStorage.setItem('opened', name);
    window.location.reload();
});
$('.section__serviceItemText-show').click(function () {
    $(this).parent().children(".section__serviceItemText-show").hide();
    $(this).parent().children(".section__serviceItemText-short").hide();
    $(this).parent().children(".section__serviceItemText-full").show();
});
