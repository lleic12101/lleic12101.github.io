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
    var footer = $(".footer").innerHeight();
    var windowHeight = $('body').height();
    var main = $(".main").innerHeight();

    if ((header + footer + main) < windowHeight) {
        if ($(window).width() < 1400) {
            $(".main").css("height", (windowHeight - (header + footer)) + 70);
        }
    } else {
        $(".main").css("height", "auto");
    }
}

//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.aside__navWrapper').toggleClass("aside__navWrapper-active");
    $('.aside__closeableMask').addClass("aside__closeableMask-active");
});
$('.aside__closeableMask').click(function () {
    $('.ham').removeClass("active");
    $('.aside__closeableMask').removeClass("aside__closeableMask-active");
    $('.aside__navWrapper').removeClass("aside__navWrapper-active");
    $("html, body").removeClass("body-fixed");
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

//knob
if ($('*').is('.dial')) {
    $(".dial").knob({
        width: 170,
        height: 170,
        fgColor: "#1B253C",
        inputColor: "#FFFFFF",
        lineCap: "round",
        thickness: .14,
        bgColor: "rgba(123, 131, 157, 0.6)",
    });
}

//settings
$('.main__settingsBtn').click(function () {
    $('.main__settingsBtn').removeClass('main__settingsBtn-active');
    $(this).addClass('main__settingsBtn-active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.main__settingsTab').removeClass("main__settingsTab-active");
    $("#" + id).addClass("main__settingsTab-active");
});