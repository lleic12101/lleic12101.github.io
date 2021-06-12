//resize func
$(window).on('resize', function () {
    resizeEmptySpace();

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

resizeEmptySpace();

function resizeEmptySpace() {
    // if ($('*').is('.main__certificate')) return;

    $(".main").css("height", "auto");

    var header = $(".header").innerHeight();
    var footer = $(".footer").innerHeight();
    var windowHeight = $(window).height();
    var main = $(".main").innerHeight();

    if ($(window).width() >= 1460 && $(window).width() <= 1537) {
        windowHeight += (windowHeight / 100) * 25;
    }
    if ($(window).width() >= 1024 && $(window).width() <= 1458) {
        windowHeight += (windowHeight / 100) * 25;
    }
    if ((header + footer + main) < windowHeight) {
        if ($(window).width() < 1200) {
            $(".main").css("height", (windowHeight - (header + footer)) + 60);
        } else $(".main").css("height", (windowHeight - (header + footer)));
    } else {
        $(".main").css("height", "auto");
    }
}

//burger menu
$('.checkbox1').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header__mobileWrapper').toggleClass("header__mobileWrapper-active");
    $('.header__closeableMask').addClass("header__closeableMask-active");
});
$('.header__closeableMask').click(function () {
    $('.checkbox1').prop("checked", false);
    $('.header__closeableMask').removeClass("header__closeableMask-active");
    $('.header__mobileWrapper').removeClass("header__mobileWrapper-active");
    $("html, body").removeClass("body-fixed");
});

//dashboard
$('.main-dashboard__button').click(function () {
    $('.main-dashboard__button').removeClass('main-dashboard__button-active');
    $(this).addClass('main-dashboard__button-active');
});

//addfunds/withdrawal item buttons
$('.main-addfunds__items-buttons .main-addfunds__item').click(function () {
    $('.main-addfunds__item').removeClass('main-addfunds__item-active');
    $(this).addClass('main-addfunds__item-active');
});

//deposit
$('.main-deposit__item').click(function () {
    $('.main-deposit__item').removeClass('main-deposit__item-active');
    $(this).addClass('main-deposit__item-active');
});

//copy to clipboard
$('.main-team__clipboardButton').click(function () {
    copyToClipboard();
});
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.main-team__clipboardInput').val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".main__nameAndInputCopied").text("copied");
}

//team buttons
$('.main-team__button').click(function () {
    $('.main-team__button').removeClass('main-team__button-active');
    $(this).addClass('main-team__button-active');
});

//team menus
$('.main-table__itemMenu .main-table__itemText, .main-team__sum').click(function () {
    var open = true;

    if ($(this).parent().hasClass('main-table__itemMenu-active')) open = false;

    $('.main-team__menu').hide();
    $('.main-table__itemMenu, .main-team__textBlock').removeClass('main-table__itemMenu-active');

    if (open) {
        $(this).parent().find('.main-team__menu').show();
        $(this).parent().addClass('main-table__itemMenu-active');
    }
});

//settings tabs
$('.main-settings__button').click(function () {
    $('.main-settings__button').removeClass('main-settings__button-active');
    $(this).addClass('main-settings__button-active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.main-settings__tab').removeClass("main-settings__tab-active");
    $("#" + id).addClass("main-settings__tab-active");
});

//modal
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

toggleModal("modal1");
toggleModal("modal2");