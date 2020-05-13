(function (){
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
})();

var modal = document.querySelector('.modal');
function toggleModal() {
    modal.classList.toggle('show-modal');
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
window.addEventListener("click", windowOnClick);

$('.footer__politic').click(function () {
   $('.modal__contentAccept').hide();
   $('.modal__contentConfidential').show();
   toggleModal();
});

$('.footer__accept').click(function () {
    $('.modal__contentAccept').show();
    $('.modal__contentConfidential').hide();
    toggleModal();
});