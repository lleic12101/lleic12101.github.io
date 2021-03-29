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

    var header = $(".aside").innerHeight();
    var windowHeight = $('body').height();
    var main = $(".main").innerHeight();

    if ((header + main) < windowHeight) {
        if ($(window).width() < 1400) {
            $(".main").css("height", (windowHeight - header) + 60);
        }
    } else {
        $(".main").css("height", "auto");
    }
}

//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header__navWrapper').toggleClass("header__navWrapper-active");
    $('.header__closeableMask').addClass("header__closeableMask-active");
});
$('.header__closeableMask').click(function () {
    $('.ham').removeClass("active");
    $('.header__closeableMask').removeClass("header__closeableMask-active");
    $('.header__navWrapper').removeClass("header__navWrapper-active");
    $("html, body").removeClass("body-fixed");
});

//menu
$('.aside__row').click(function () {
    $('.aside__items').toggle();
    $('.aside__rowIcon').toggleClass('aside__rowIcon-active');
});

//withdrawal
$('.main-withdrawal__item').click(function () {
    $('.main-withdrawal__item').removeClass('main-withdrawal__item-active');
    $(this).addClass('main-withdrawal__item-active');
});


//addFunds
$('.main__addFundsItem').click(function () {
    $('.main__addFundsItem').removeClass('main__addFundsItem-active');
    $(this).addClass('main__addFundsItem-active');
});

//team btns
$('.main__teamInfoBtn').click(function () {
    $('.main__teamInfoBtn').removeClass('main__teamInfoBtn-active');
    $(this).addClass('main__teamInfoBtn-active');
});

//copy to clipboard
$('.main__nameAndInput-team').click(function () {
    copyToClipboard();
});
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.main__nameAndInputFooterInput').val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".main__referralInputCopied").text("copied");
}

//deposit select
$('.main__depositItem').click(function () {
    $('.main__depositItem').removeClass('main__depositItem-active');
    $(this).addClass('main__depositItem-active');
});

//settings
$('.main__settingsBtn').click(function () {
    $('.main__settingsBtn').removeClass('main__settingsBtn-active');
    $(this).addClass('main__settingsBtn-active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.main__settingsTab').removeClass("main__settingsTab-active");
    $("#" + id).addClass("main__settingsTab-active");
});