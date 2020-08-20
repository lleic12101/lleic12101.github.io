//burger menu
$('#burger1').click(function(){
    $('.header__closebleMask').toggle();
    $('.header__mobileToggleBlock').slideToggle();
});
$('.header__closebleMask').click(function () {
    $('#burger1').prop('checked', false);
    $('.header__mobileToggleBlock').slideUp();
    $('.header__closebleMask').hide();
});