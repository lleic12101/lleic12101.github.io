﻿//resize func
$(window).on('resize', function () {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//burger menu
$('.header__burger').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header-mobile__toggleBlock').toggleClass("header-mobile__toggleBlock-active");
    $('.header-mask').toggleClass("header-mask__active");
});
$('.header-mask').click(function () {
    $('.header-mobile__toggleBlock').removeClass("header-mobile__toggleBlock-active");
    $('.header-mask').removeClass("header-mask__active");
    $("html, body").removeClass("body-fixed");
});
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//copy to clipboard
$('.header-referral__button').click(function () {
    copyToClipboard();
});
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.header-referral__input').val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".header-referral__copied").addClass("header-referral__copied-active");
}

//aside about open
$('.aside-about .aside-item').click(function () {
    $(this).parent().find('.aside-about__wrapper').slideToggle(300);
    $(this).parent().find('.aside-item__aboutArrow').toggleClass('aside-item__aboutArrow-active');
});

//currency-mobile
$('.header-currency__link-mobile').click(function () {
    // $('.header-currency__dropdown').css({"display": ""});
    $('.header-currency__dropdown').addClass('header-currency__dropdown-active');
});
$('.header-currency__close').click(function (e) {
    // $('.header-currency__dropdown').fadeOut(300, "linear");
    $('.header-currency__dropdown').removeClass('header-currency__dropdown-active');
    // setTimeout(function () {
    //     $('.header-currency__dropdown').css({"display": ""});
    // }, 300);
});

//modal
$('.modal__close, .modal__button').click(function () {
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
// toggleModal('modal5');

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
$('.button-modal4').click(function () {
    toggleModal('modal4');
});
$('.button-modal5').click(function () {
    toggleModal('modal5');
});

//phone number
if ($('*').is('.main-input__input-phone')) {
    var maskList = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
    var maskOpts = {
        inputmask: {
            definitions: {
                '#': {
                    validator: "[0-9]",
                    cardinality: 1
                }
            },
            //clearIncomplete: true,
            showMaskOnHover: false,
            autoUnmask: true
        },
        match: /[0-9]/,
        replace: '#',
        list: maskList,
        listKey: "mask",
        onMaskChange: function (maskObj, completed) {
            // if (completed) {
            //     var hint = maskObj.name_ru;
            //     if (maskObj.desc_ru && maskObj.desc_ru != "") {
            //         hint += " (" + maskObj.desc_ru + ")";
            //     }
            //
            //     var input = $('.main__infoInput-phone')[0];
            //     var totalLen = input.inputmask.maskset.buffer.length;
            //     var curLen = input.inputmask.maskset.p;
            //     if (totalLen !== curLen) {
            //         $('.main__infoInput-phone').parent().addClass("main__infoInputBlockError-required");
            //     } else {
            //         $('.main__infoInput-phone').parent().removeClass("main__infoInputBlockError-required");
            //     }
            // }
            // $(this).attr("placeholder", $(this).inputmask("getemptymask"));
        }
    };
    $('.main-input__input-phone').inputmasks(maskOpts);
}

//password show
$('.main-input__eye').click(function () {
    if ($(this).parent().find('.main-input__input').get(0).type === 'text') {
        $(this).parent().find('.main-input__input').get(0).type = 'password';
        $(this).removeClass('main-input__eye-active');
    } else {
        $(this).parent().find('.main-input__input').get(0).type = 'text';
        $(this).addClass('main-input__eye-active');
    }
});

//table mobile button
$('.main-table__action').click(function () {
    $('.main-table__manage').addClass('main-table__manage-active');
    $('.main-table__mask').addClass('main-table__mask-active');
});
$('.main-table__mask').click(function () {
    $('.main-table__manage').removeClass('main-table__manage-active');
    $(this).removeClass('main-table__mask-active');
});

//table select
$('.main-table__selectHeader').click(function () {
    $(this).parent().find('.main-table__selectListWrapper').slideToggle();
});
$('.main-table__selectList .main-table__selectItem').click(function () {
	$(this).parent().parent().slideUp();
    $(this).parent().parent().parent().find('.main-table__selectHeader').find('.main-table__selectItemText')[0].innerHTML =
        $(this).find('.main-table__selectItemText')[0].innerHTML;
    $(this).parent().parent().parent().find('.main-table__selectHeader').find('.main-table__selectItemText')[1].innerHTML =
        $(this).find('.main-table__selectItemText')[1].innerHTML;
});

//table user lock button
$('.main-table__userAvatarButton').click(function () {
    if ($(this).hasClass('main-table__userAvatarButton-active')) {
        $(this).removeClass('main-table__userAvatarButton-active');
        toggleModal('modal5');
    } else {
        toggleModal('modal4');
        $(this).addClass('main-table__userAvatarButton-active');
    }
});

//team open user
$('.main-team__tableItem').click(function (e) {
    e.stopPropagation();
    if ($(this).find('.main-team__tableItemDropdown').length > 0) {
        $(this).toggleClass('main-team__tableItem-active');
    }
});
$('.main-team__tableItemContactsLink').click(function (e) {
    e.stopPropagation();
});