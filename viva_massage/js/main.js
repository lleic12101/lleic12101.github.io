//filter open lists
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

//show full number
$('.section__serviceItemText-show').click(function () {
    $(this).parent().children(".section__serviceItemText-show").hide();
    $(this).parent().children(".section__serviceItemText-short").hide();
    $(this).parent().children(".section__serviceItemText-full").show();
});

//filter storage
if (sessionStorage.getItem('opened') != null) {
    var width = $(window).width();
    if (width > 656) {
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
}

//show filter
$('.header__navCityBtn').click(function () {
    $('.section__servicesFilter').toggle();
    $(this).toggleClass('header__navBtn-active');
});

//resize func
$(window).on('resize', function () {
    onResize();
});
onResize();

function onResize() {
    var width = $(window).width();
    if (width <= 656) {
        $('.header__navListBlock-gender').removeClass('header__navListBlock-opened');
    } else $('.header__navListBlock-gender').addClass('header__navListBlock-opened');
}

//mobile menu
var modal = document.querySelector('.modal');

function toggleModal() {
    modal.classList.toggle('show-modal');
    $('html, body').toggleClass('body-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

$('.header__navBurgerLink').click(function () {
    toggleModal();
});
$('.modal__contentHeaderClose').click(function () {
    toggleModal();
});
window.addEventListener("click", windowOnClick);

$('.modal__contentNavLiBtn').click(function () {
    $(this).parent().children('.modal__contentNavListBlock').slideToggle();
    $(this).toggleClass('modal__contentNavLiBtn-active');
});
