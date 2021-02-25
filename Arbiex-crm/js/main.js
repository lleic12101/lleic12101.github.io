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