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

    if ($(window).width() >= 1535 && $(window).width() <= 1537) {
        windowHeight += (windowHeight / 100) * 25;
    }
    if ($(window).width() >= 1439 && $(window).width() <= 1441) {
        windowHeight += (windowHeight / 100) * 25;
    }
    if ((header + footer + main) < windowHeight) {
        $(".main").css("height", (windowHeight - (header + footer)));
    } else {
        $(".main").css("height", "auto");
    }
}

//burger menu
$('.ham').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header-nav__wrapper-mobile').toggleClass("header-nav__wrapper-active");
    $('.header-mask').addClass("header-mask__active");
});
$('.header-mask').click(function () {
    $('.ham').removeClass("active");
    $('.header-mask').removeClass("header-mask-active");
    $('.header-nav__wrapper').removeClass("header-nav__wrapper-active");
    $("html, body").removeClass("body-fixed");
});

//tabs
$('.main__faqBtn').click(function () {
    $('.main__faqBtn').removeClass('main__faqBtn-active');
    $(this).addClass('main__faqBtn-active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.main__faqTab').removeClass("main__faqTab-active");
    $("#" + id).addClass("main__faqTab-active");
});

//faq
$(".main__faqTabItemHeader").click(function () {
    if ($(this).hasClass("main__faqTabItemHeader-active")) {
        $(".main__faqTabItemHeader").removeClass("main__faqTabItemHeader-active");
        $(".main__faqTabItemText").slideUp();
    } else {
        $(".main__faqTabItemHeader").removeClass("main__faqTabItemHeader-active");
        $(".main__faqTabItemText").slideUp();
        $(this).parent().find(".main__faqTabItemText").slideDown();
        $(this).addClass("main__faqTabItemHeader-active");

        resizeEmptySpace();
    }
});

//contacts form
$(".main__contactsFormSuccessIcon").click(function () {
    $(".main__contactsForm")[0].reset();
    $(".main__contactsForm").removeClass("main__contactsForm-mobile");
    $(".main__contactsFormSuccess").removeClass("main__contactsFormSuccess-active");
});
$(".main__contactsForm").submit(function (e) {
    if ($(window).width() > 870) {
        e.preventDefault();
        $(".main__contactsFormSuccess").addClass("main__contactsFormSuccess-active");
    } else {
        $(".main__contactsForm").addClass("main__contactsForm-mobile");
        $(".main__contactsFormSuccess").addClass("main__contactsFormSuccess-active");
    }
});