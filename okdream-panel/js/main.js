//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//modal
$('.modal__close, .main-delete__button').click(function () {
    toggleModal();
});
function toggleModal(id) {
    if (id == null) {
        $('.modal').removeClass('show-modal');
    } else {
        var modal = document.querySelector('#' + id);
        modal.classList.add('show-modal');
    }
}
function windowOnClick(event) {
    var modal = document.querySelectorAll('.modal');
    for (var i = 0; i < modal.length; i++) {
        if (event.target === modal[i]) {
            toggleModal();
        }
    }
}
window.addEventListener("click", windowOnClick);

//modal event
$('.button-modal1').click(function () {
    toggleModal('modal1');
});
$('.button-modal2').click(function () {
    toggleModal('modal2');
});
$('.button-modal3').click(function () {
    toggleModal('modal3');
});

//table select
$('.main-table__selectHeader').click(function () {
    $(this).parent().find('.main-table__selectListWrapper').slideToggle();
});
$('.main-table__selectList .main-table__selectItem').click(function () {
    $(this).parent().parent().slideUp();
    $(this).parent().parent().parent().find('.main-table__selectHeader').find('.main-table__selectItemText')[0].innerHTML =
        $(this).find('.main-table__selectItemText')[0].innerHTML;
});