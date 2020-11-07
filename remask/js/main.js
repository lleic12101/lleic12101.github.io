//resize func
$(window).on('resize', function () {
    resizeEmptySpace();
});
resizeEmptySpace();
function resizeEmptySpace() {
    var header = $(".header").innerHeight();
    var footer = $(".footer").innerHeight();
    var windowHeight = $(window).innerHeight();
    var main = $(".main").innerHeight();
    if ((header + footer + main) < windowHeight) {
        $(".main").css("height", (windowHeight - (header + footer)));
    } else {
        $(".main").css("height", "auto");
    }
}

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

//language menu
$(".headerTop__langBtn").click(function () {
    if ($(window).width() > 1024) {
        $(".headerTop__langItems").slideToggle();
        $(this).find(".list").toggleClass("headerTop__langIcon-rotated");
    } else if ($(window).width() < 1024) {
        $(".header__mobileToggleBlockContent-lang").addClass("header__mobileToggleBlockContent-lang-active");
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
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//buy block
if ($('*').is('.main__buyControlBtnsBtn')) {
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
}

//change rouble
if ($('*').is('.main__buyRoubleRadio')) {
    $(".main__buyRoubleRadio").click(function () {
        $(".main__buyRoubleRadio").parent().find("img").attr("src", "img/icons/rouble.svg");
        $(this).parent().find("img").attr("src", "img/icons/rouble-blue.svg");
    });
}

//map
if ($('*').is('.main__contacts')) {
    var map;
    var marker;
    var map1;
    var marker1;
    var map2;
    var marker2;

    function initMap() {
        var myLatLng = {lat: 47.107635, lng: 37.642391};

        map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 14,
        });

        marker = new google.maps.Marker({
            position: myLatLng,
            title: "Место на карте",
            map: map,
            icon: "img/icons/map-point.png",
        });


        var myLatLng1 = {lat: 42.107635, lng: 20.642391};

        map1 = new google.maps.Map(document.getElementById("map1"), {
            center: myLatLng1,
            zoom: 14,
        });

        marker1 = new google.maps.Marker({
            position: myLatLng1,
            title: "Место на карте",
            map: map1,
            icon: "img/icons/map-point.png",
        });


        var myLatLng2 = {lat: 47.107635, lng: 40.642391};

        map2 = new google.maps.Map(document.getElementById("map2"), {
            center: myLatLng2,
            zoom: 14,
        });

        marker2 = new google.maps.Marker({
            position: myLatLng2,
            title: "Место на карте",
            map: map2,
            icon: "img/icons/map-point.png",
        });
    }
}