﻿//language menu
$(".headerTop__langBtn").click(function () {
    if ($(window).width() > 1024) {
        $(".headerTop__langItems").slideToggle();
        $(this).find(".list").toggleClass("headerTop__langIcon-rotated");
    } else if ($(window).width() < 1024) {
        $(".header__mobileToggleBlockContent-lang").addClass("header__mobileToggleBlockContent-lang-active");
    }
});

//buy block
$(".main__buyControlBtnsBtn").click(function () {
    $(".main__buyControlBtnsBtn").removeClass("main__buyControlBtnsBtn-active");
    $(this).addClass("main__buyControlBtnsBtn-active");

    $(".main__buyControlActive").removeClass("main__buyControlActive-pro");
    $(".main__buyControlActive").removeClass("main__buyControlActive-basic");
    $(".main__buyControlActive").removeClass("main__buyControlActive-lite");

    document.querySelector("#radio-2").checked = true;

    if ($(this).hasClass("main__buyControlBtnsBtn-pro")) {
        $(".main__buyControlActive").addClass("main__buyControlActive-pro");
        $(".main__buyControlNameType").html("PRO");

        $(".main__buyControlRadioBtns-label1").html(`9 400 <img src="img/icons/rouble.svg" alt="rouble"/>`);
        $(".main__buyControlRadioBtns-label2").html(`17 000 <img src="img/icons/rouble-blue.svg" alt="rouble"/>`);

        $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">Фильтр, состоящий из 3 компонентов</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">Кабель USB Type-C для зарядки</p>
                    </div>`);

        $(".main__buyImgBlockMask").attr("src", "img/main/mask-pro.png");
    } else if ($(this).hasClass("main__buyControlBtnsBtn-basic")) {
        $(".main__buyControlActive").addClass("main__buyControlActive-basic");
        $(".main__buyControlNameType").html("Basic");

        $(".main__buyControlRadioBtns-label1").html(`7 400 <img src="img/icons/rouble.svg" alt="rouble"/>`);
        $(".main__buyControlRadioBtns-label2").html(`14 000 <img src="img/icons/rouble-blue.svg" alt="rouble"/>`);

        $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">Фильтр, состоящий из 3 компонентов</p>
                    </div>`);

        $(".main__buyImgBlockMask").attr("src", "img/main/mask-basic.png");
    } else if ($(this).hasClass("main__buyControlBtnsBtn-lite")) {
        $(".main__buyControlActive").addClass("main__buyControlActive-lite");
        $(".main__buyControlNameType").html("Lite");

        $(".main__buyControlRadioBtns-label1").html(`4 400 <img src="img/icons/rouble.svg" alt="rouble"/>`);
        $(".main__buyControlRadioBtns-label2").html(`7 000 <img src="img/icons/rouble-blue.svg" alt="rouble"/>`);

        $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>`);

        $(".main__buyImgBlockMask").attr("src", "img/main/mask-lite.png");
    }
});

//burger menu
$('.headerBottom__burgerLink').click(function () {
    $("html, body").toggleClass("body-fixed");
    $('.header__mobileToggleBlock').toggleClass("header__mobileToggleBlock-active");
    $('.header__closebleMask').toggleClass("header__closebleMask-active");
});
$(".header__mobileToggleBlockContent-close").click(function () {
    $("html, body").removeClass("body-fixed");
    $('.header__mobileToggleBlock').removeClass("header__mobileToggleBlock-active");
    $('.header__closebleMask').removeClass("header__closebleMask-active");
});
$(".header__mobileToggleBlockContent-return").click(function () {
    $('.header__mobileToggleBlockContent-lang').removeClass("header__mobileToggleBlockContent-lang-active");
});
$('.header__closebleMask').click(function () {
    $('.header__mobileToggleBlock').removeClass("header__mobileToggleBlock-active");
    $('.header__mobileToggleBlockContent-lang').removeClass("header__mobileToggleBlockContent-lang-active");
    $('.header__closebleMask').removeClass("header__closebleMask-active");
    $("html, body").removeClass("body-fixed");
});

//sticky header
var c, currentScrollTop = 0, navbar = $("header");
$(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = 60;
    currentScrollTop = a;
    if (c < currentScrollTop && a > b + b && !$("body").hasClass("body-fixed")) {
        navbar.addClass("scrollUp");
        $("header .navbar-collapsed-nav").slideUp(300);
    } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp")
    }
    c = currentScrollTop;
});

//change rouble
$(".main__buyRoubleRadio").click(function () {
    $(".main__buyRoubleRadio").parent().find("img").attr("src", "img/icons/rouble.svg");
    $(this).parent().find("img").attr("src", "img/icons/rouble-blue.svg");
});