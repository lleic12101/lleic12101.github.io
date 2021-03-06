﻿//resize func
$(window).on('resize', function () {
    resizeEmptySpace();

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //mobile videos
    if ($('*').is('video')) {
        if ($(window).width() < 767) {
            $(".main__levelsImg-video1").attr("src", " ");
            $(".main__buyImgBlockMask-video").attr("src", " ");
        }
    }
});
resizeEmptySpace();
function resizeEmptySpace() {
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
    checkScroll();
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

//buy block
if ($('*').is('.main__buyControlBtnsBtn')) {
    $(".main__buyControlBtnsBtn").click(function () {
        $(".main__buyControlBtnsBtn").removeClass("main__buyControlBtnsBtn-active");
        $(this).addClass("main__buyControlBtnsBtn-active");

        $(".main__buyControlActive").removeClass("main__buyControlActive-pro");
        $(".main__buyControlActive").removeClass("main__buyControlActive-basic");
        $(".main__buyControlActive").removeClass("main__buyControlActive-lite");

        if ($('*').is('.main__buyControlRadioBtns')) {
            document.querySelector("#radio-1").checked = true;
        }

        if ($(this).hasClass("main__buyControlBtnsBtn-pro")) {
            $(".main__buyControlActive").addClass("main__buyControlActive-pro");
            $(".main__buyControlNameType").html("PRO");

            $(".main__buyControlRadioBtns-label1").html(`9 400 <img src="img/icons/rouble-blue.svg" alt="rouble"/>`);
            $(".main__buyControlRadioBtns-label2").html(`17 000 <img src="img/icons/rouble.svg" alt="rouble"/>`);

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

            if (!$('.main__buyControlColor-white').hasClass("main__buyControlColor-active")) {
                $(".main__buyImgBlockMask-video").attr("src", "video/pro-black.mp4");
                $(".main__buyImgBlockMask-video").attr("poster", "video/png/pro-black.png");
            } else {
                $(".main__buyImgBlockMask-video").attr("src", "video/pro-white.mp4");
                $(".main__buyImgBlockMask-video").attr("poster", "video/png/pro-white.png");
            }
            if ($(window).width() < 768) {
                $(".main__buyImgBlockMask-video").attr("src", " ");
            }
        } else if ($(this).hasClass("main__buyControlBtnsBtn-basic")) {
            $(".main__buyControlActive").addClass("main__buyControlActive-basic");
            $(".main__buyControlNameType").html("Basic");

            $(".main__buyControlRadioBtns-label1").html(`7 900 <img src="img/icons/rouble-blue.svg" alt="rouble"/>`);
            $(".main__buyControlRadioBtns-label2").html(`14 000 <img src="img/icons/rouble.svg" alt="rouble"/>`);

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

            if (!$('.main__buyControlColor-white').hasClass("main__buyControlColor-active")) {
                $(".main__buyImgBlockMask-video").attr("src", "video/basic-black.mp4");
                $(".main__buyImgBlockMask-video").attr("poster", "video/png/basic-black.png");
            } else {
                $(".main__buyImgBlockMask-video").attr("src", "video/basic-white.mp4");
                $(".main__buyImgBlockMask-video").attr("poster", "video/png/basic-white.png");
            }
            if ($(window).width() < 768) {
                $(".main__buyImgBlockMask-video").attr("src", " ");
            }
        } else if ($(this).hasClass("main__buyControlBtnsBtn-lite")) {
            $(".main__buyControlActive").addClass("main__buyControlActive-lite");
            $(".main__buyControlNameType").html("Lite");

            $(".main__buyControlRadioBtns-label1").html(`3 300 <img src="img/icons/rouble-blue.svg" alt="rouble"/>`);
            $(".main__buyControlRadioBtns-label2").html(`6 000 <img src="img/icons/rouble.svg" alt="rouble"/>`);

            $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div><div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>`);

            if (!$('.main__buyControlColor-white').hasClass("main__buyControlColor-active")) {
                $(".main__buyImgBlockMask-video").attr("src", "video/lite-black.mp4");
                $(".main__buyImgBlockMask-video").attr("poster", "video/png/lite-black.png");
            } else {
                $(".main__buyImgBlockMask-video").attr("src", "video/lite-white.mp4");
                $(".main__buyImgBlockMask-video").attr("poster", "video/png/lite-white.png");
            }
            if ($(window).width() < 768) {
                $(".main__buyImgBlockMask-video").attr("src", " ");
            }
        }
    });
}
if ($('*').is('.main__buyControlColor')) {
    $('.main__buyControlColor').click(function () {
        $(".main__buyControlColor").removeClass("main__buyControlColor-active");
        $(this).addClass("main__buyControlColor-active");

        if ($('*').is('.main__buyControlRadioBtns')) {
            var poster, src;
            poster = $(".main__buyImgBlockMask-video").attr("poster");
            poster = poster.split('/')[2];
            poster = poster.split('-')[0];

            if ($('.main__buyControlColor-white').hasClass("main__buyControlColor-active")) {
                src = "video/" + poster + "-white.mp4";
                poster = "video/png/" + poster + "-white.png";
            } else {
                src = "video/" + poster + "-black.mp4";
                poster = "video/png/" + poster + "-black.png";
            }

            $(".main__buyImgBlockMask-video").attr("src", src);
            $(".main__buyImgBlockMask-video").attr("poster", poster);

            if ($(window).width() < 768) {
                $(".main__buyImgBlockMask-video").attr("src", " ");
            }
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

//inputs
if ($('*').is('.main__infoInput')) {
    $(".main__infoInput").change(function () {
        if ($(this).val().trim() !== "") {
            $(this).parent().find(".main__infoInputLabel").addClass("main__infoInputLabel-active");
            $(this).addClass("main__infoInput-active");

            $(this).parent().removeClass("main__infoInputBlockError-required");

            var pattern = $(this).attr("pattern");
            if (pattern == undefined) return;
            var returnedVal = null;
            if ($(this)[0].value.match(pattern) != null && $(this)[0].value.match(pattern) !== "") {
                returnedVal = $(this)[0].value.match(pattern)[0];
            }
            if (($(this)[0].value !== returnedVal) || ($(this)[0].value !== returnedVal && returnedVal != null)) {
                $(this).parent().addClass("main__infoInputBlockError-bad");
            } else {
                $(this).parent().removeClass("main__infoInputBlockError-bad");
            }
        } else {
            $(this).parent().find(".main__infoInputLabel").removeClass("main__infoInputLabel-active");
            $(this).removeClass("main__infoInput-active");
        }
    });
}

//phone number
if ($('*').is('.main__infoInput-phone')) {
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
            if (completed) {
                var hint = maskObj.name_ru;
                if (maskObj.desc_ru && maskObj.desc_ru != "") {
                    hint += " (" + maskObj.desc_ru + ")";
                }

                var input = $('.main__infoInput-phone')[0];
                var totalLen = input.inputmask.maskset.buffer.length;
                var curLen = input.inputmask.maskset.p;
                if (totalLen !== curLen) {
                    $('.main__infoInput-phone').parent().addClass("main__infoInputBlockError-required");
                } else {
                    $('.main__infoInput-phone').parent().removeClass("main__infoInputBlockError-required");
                }
            }
            $(this).attr("placeholder", $(this).inputmask("getemptymask"));
        }
    };
    $('.main__infoInput-phone').inputmasks(maskOpts);
    $('.main__infoInput-phone').focus(function () {
        $(this).removeClass("main__infoInput-hidden");
        $(this).parent().find(".main__infoInputLabel").addClass("main__infoInputLabel-active");
        $(this).addClass("main__infoInput-active");
    });
}

//select
if ($('*').is('.main__infoSelect')) {
    $('.main__infoSelect').selectize();
    $('.main__infoSelect').change(function () {
        $(this).parent().removeClass("main__infoInputBlockError-required");
        $(this).parent().find(".selectize-control").removeClass("main__infoInputBlockError-required");
    });
}

//check empty fields info 1
if ($('*').is('.main__infoNextBtn')) {
    $(".main__infoNextBtn").click(function () {
        var formBlock = document.querySelector(".main__infoFormBlock-1");
        var inputs = formBlock.querySelectorAll("input");
        var errCount = 0;
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).attr("required") == "required") {
                if ($(inputs[i]).hasClass("main__infoInput")) {
                    if ($(inputs[i]).val().trim() === "") {
                        errCount++;
                        $(inputs[i]).parent().addClass("main__infoInputBlockError-required");
                    }
                }
            }
        }
        var region = $(".main__infoSelect-region").find(".item").html();
        var town = $(".main__infoSelect-town").find(".item").html()
        if (region === "Регион/область*") {
            $(".main__infoSelect-region").parent().addClass("main__infoInputBlockError-required");
            errCount++;
        }
        if (town === "Город*") {
            $(".main__infoSelect-town").parent().addClass("main__infoInputBlockError-required");
            errCount++
        }

        var input = $('.main__infoInput-phone')[0];
        var totalLen = input.inputmask.maskset.buffer.length;
        var curLen = input.inputmask.maskset.p;
        if (totalLen !== curLen) {
            $('.main__infoInput-phone').parent().addClass("main__infoInputBlockError-required");
            errCount++;
        } else {
            $('.main__infoInput-phone').parent().removeClass("main__infoInputBlockError-required");
        }

        if (errCount > 0) return;
        else {
            $(".main__infoFormBlock-1").addClass("main__infoFormBlock-inactive");
            $(".main__infoFormBlock-1").find('.main__infoSmallFormBlock').slideUp();
            $(".main__infoFormBlock-2").removeClass("main__infoFormBlock-inactive");
            $(".main__infoFormBlock-2").find('.main__infoSmallFormBlock').slideDown();
        }
    });
    $(".main__infoFormHeaderChange").click(function () {
        $(".main__infoFormBlock-1").removeClass("main__infoFormBlock-inactive");
        $(".main__infoFormBlock-1").find('.main__infoSmallFormBlock').slideDown();
    });
}

//info select pay
if ($('*').is('.main__infoPayItem')) {
    $(".main__infoPayItem").click(function () {
        $(".main__infoPayItem").removeClass("main__infoPayItem-active");
        $(this).addClass("main__infoPayItem-active");
    });
}

//forms btn
if ($('*').is('.main__signInBtn')) {
    $(".main__signInBtn").click(function () {
        var formBlock = document.querySelector(".main__signIn");
        var inputs = formBlock.querySelectorAll(".main__infoInput");
        var errCount = 0;
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).attr("required") == "required") {
                if ($(inputs[i]).hasClass("main__infoInput")) {
                    if ($(inputs[i]).val().trim() === "") {
                        errCount++;
                        $(inputs[i]).parent().addClass("main__infoInputBlockError-required");
                    }
                }
            }
        }

        var input = $('.main__infoInput-phone')[0];
        var totalLen = input.inputmask.maskset.buffer.length;
        var curLen = input.inputmask.maskset.p;
        if (totalLen !== curLen) {
            $('.main__infoInput-phone').parent().addClass("main__infoInputBlockError-required");
            errCount++;
        } else {
            $('.main__infoInput-phone').parent().removeClass("main__infoInputBlockError-required");
        }
    });
}

//bag btns
if ($('*').is('.main__bagCartItemDelete')) {
    $(".main__bagCartItemDelete").click(function () {
        $(this).parent().remove();
    });
}
if ($('*').is('.main__bagCartItemCounterMinusBlock')) {
    $(".main__bagCartItemCounterMinusBlock").click(function () {
        var num = $(this).parent().parent().find(".main__bagCartItemCounterNum").html();
        if (num > 1) {
            num--;
            $(this).parent().parent().find(".main__bagCartItemCounterNum").html(num);
        }
        if (num == 1) {
            $(this).parent().parent().removeClass("main__bagCartItemCounter-minus");
        }
    });
    $(".main__bagCartItemCounterPlusBlock").click(function () {
        var num = $(this).parent().parent().find(".main__bagCartItemCounterNum").html();
        num++;
        $(this).parent().parent().find(".main__bagCartItemCounterNum").html(num);
        if (num > 1) {
            $(this).parent().parent().addClass("main__bagCartItemCounter-minus");
        }
    });
    var $nums = $(".main__bagCartItemCounterNum");
    for (var i = 0; i < $nums.length; i++) {
        if (Number($($nums[i]).html()) > 1) $($nums[i]).parent().parent().addClass("main__bagCartItemCounter-minus");
    }
}

//products filter
if ($('*').is('.main__productsItemsSortBtn')) {
    $(".main__productsItemsSortBtn").click(function () {
        if (!$(this).hasClass("main__productsItemsSortBtn-active")) {
            $(this).addClass("main__productsItemsSortBtn-active");
            $(".main__productsHeaderSort").addClass("main__productsHeaderSort-active");
        }
    });
    $(".main__productsItemsSortBtnIcon").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().removeClass("main__productsItemsSortBtn-active");

        checkFilterStatus();
    });
    $(".main__productsItemsSortByLink").click(function () {
        $(".main__productsItemsSortToggleBlock").slideDown();
        $('.header__closebleMaskFilter').addClass("header__closebleMaskFilter-active");
    });
    $('.header__closebleMaskFilter').click(function () {
        $('.header__closebleMaskFilter').removeClass("header__closebleMaskFilter-active");
        $(".main__productsItemsSortToggleBlock").slideUp();
    });
    $(".main__productsItemsSortToggleLink").click(function () {
        $(".main__productsItemsSortToggleLink").removeClass("main__productsItemsSortToggleLink-active");
        $(this).addClass("main__productsItemsSortToggleLink-active");
        $(".main__productsItemsSortByLink").html($(this).html());
        $('.header__closebleMaskFilter').removeClass("header__closebleMaskFilter-active");
        $(".main__productsItemsSortToggleBlock").slideUp();
        $(".main__productsHeaderSort").addClass("main__productsHeaderSort-active");

        checkFilterStatus();
    });
    $(".main__productsHeaderSort").click(function () {
        $(this).removeClass("main__productsHeaderSort-active");
        $(".main__productsItemsSortBtn").removeClass("main__productsItemsSortBtn-active");
        $(".main__productsItemsSortByLink").html("По популярности");
        $(".main__productsItemsSortToggleLink").removeClass("main__productsItemsSortToggleLink-active");
        $(".main__productsItemsSortToggleLink-popular").addClass("main__productsItemsSortToggleLink-active");
    });
}
function checkFilterStatus() {
    var $btns = $(".main__productsItemsSortBtn");
    for (var i = 0; i < $btns.length; i++) if ($($btns[i]).hasClass("main__productsItemsSortBtn-active")) return;
    if ($(".main__productsItemsSortByLink").html().trim() !== "По популярности") return;
    $(".main__productsHeaderSort").removeClass("main__productsHeaderSort-active");
}

//card size
if ($('*').is('.main__cardContentSizeBtn')) {
    $(".main__cardContentSizeBtn").click(function () {
        $(".main__cardContentSizeBtn").removeClass("main__cardContentSizeBtn-active");
        $(this).addClass("main__cardContentSizeBtn-active");
    });
}
if ($('*').is('.main__cardImgScrolling')) {
    (function () {
        var a = document.querySelector('.main__cardImgScrolling'), b = null, P = 50;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (window.innerWidth > 1261) {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''), s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    b = document.createElement('div');
                    b.style.cssText = s + ' display: flex; flex-direction: column; align-items: center; box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                    a.insertBefore(b, a.firstChild);
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.margin = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.main__bagSpecialBlock-with').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R) {
                        b.className = 'stop';
                        b.style.top = -R + 'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
                window.addEventListener('resize', function () {
                    a.children[0].style.width = getComputedStyle(a, '').width
                }, false);
            }
        }
    })()
}

//Profile tabs
if ($('*').is('.main__profileItems')) {
    $(".main__productsSidebarLink").click(function () {
        var id = $(this).attr("id");
        id = id.substr(0, id.length - 3);
        if (id === "exit") return;
        $(".main__productsSidebarLink").removeClass("main__productsSidebarLink-active");
        $(this).addClass("main__productsSidebarLink-active");

        $(".main__profileItem").removeClass("main__profileItem-active");
        $("#" + id + "Tab").addClass("main__profileItem-active");

        resizeEmptySpace();
    });
    $(".main__profileFaqItemHeader").click(function () {
        if ($(this).hasClass("main__profileFaqItemHeader-active")) {
            $(".main__profileFaqItemHeader").removeClass("main__profileFaqItemHeader-active");
            $(".main__profileFaqItemContent").slideUp();
        } else {
            $(".main__profileFaqItemHeader").removeClass("main__profileFaqItemHeader-active");
            $(".main__profileFaqItemContent").slideUp();
            $(this).parent().find(".main__profileFaqItemContent").slideDown();
            $(this).addClass("main__profileFaqItemHeader-active");

            resizeEmptySpace();
        }
    });
}

//info select address
if ($('*').is('.main__infoSmallAddressItems')) {
    $(".main__infoSmallAddressLink").click(function () {
        $(this).toggleClass("main__infoSmallAddressLink-active");
        $(".main__infoSmallAddressItems").slideToggle(300);
        $('.header__closebleMaskFilter').toggleClass("header__closebleMaskFilter-active");
    });
    $(".main__infoSmallAddressItem").click(function () {
        $(".main__infoSmallAddressItem").removeClass("main__infoSmallAddressItem-active");
        $(this).addClass("main__infoSmallAddressItem-active");
        $(".main__infoSmallAddressItems").slideUp(300);
        $('.header__closebleMaskFilter').removeClass("header__closebleMaskFilter-active");
    });
    $('.header__closebleMaskFilter').click(function () {
        $('.header__closebleMaskFilter').removeClass("header__closebleMaskFilter-active");
        $(".main__infoSmallAddressItems").slideUp(300);
        $(".main__infoSmallAddressLink").removeClass("main__infoSmallAddressLink-active");
    });
}

//mob video index
if ($('*').is('video')) {
    //video autostart
    window.onload = function () {
        $('video').trigger('play');
    }
    //mobile videos
    if ($('*').is('video')) {
        if ($(window).width() < 767) {
            $(".main__levelsImg-video1").attr("src", " ");
            $(".main__buyImgBlockMask-video").attr("src", " ");
        }
    }
}

//autoscroll
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
})();

//country api
if ($('*').is('#country')) {
    $(document).ready(function () {
        $(".main__infoInput").on('propertychange input', function (e) {
            if ($(this).val().trim() !== "") {
                $(this).parent().find(".main__infoInputLabel").addClass("main__infoInputLabel-active");
                $(this).addClass("main__infoInput-active");
            } else {
                $(this).parent().find(".main__infoInputLabel").removeClass("main__infoInputLabel-active");
                $(this).removeClass("main__infoInput-active");
            }
        });

        var log = function (e) {//облегчаем себе жизнь
            return (console.log(e));
        }
        var autocomplete_service = new google.maps.places.AutocompleteService();//подключаем гуглосервис
        var counrty_val = ' ';//это сюда будем писать значения наших местоположений
        var region_val = ' ';
        var city_val = ' ';
        var district_val = ' ';
        var country_list = [];//массивы для всплывающих списков
        var region_list = [];
        var city_list = [];
        var district_list = [];

        $('#country').keyup(function () {
            country_val = $('#country').val();//получаем буквы из нашего инпута для страны

            if (country_val) {
                var request = {
                    input: country_val,
                };
                //log(request);
                autocomplete_service.getPlacePredictions(request, google_addresses_callback);//делаем запрос в гугл
                function google_addresses_callback(results, status) {
                    //console.log(results);
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        var counter = 0;
                        $.each(results, function (index, result) {
                            //log(result);
                            function in_array(value, array) {
                                for (var i = 0; i < array.length; i++) {
                                    if (array[i] == value) {
                                        country_list[counter] = result.description;//заполняем результатами из гугла список подсказок во всплывашке
                                        counter++;
                                        return true;
                                    }
                                }
                                return false;
                            }
                            if (in_array("country", result.types)) {
                                //log(result);
                            }
                        });
                    } else {
                        log('no result');
                    }
                }
                $("#country").autocomplete({//инициализируем Jquery UI Autocomplete
                    source: country_list,
                    focus: displayItem,
                    select: displayItem,
                    change: displayItem
                });
                function displayItem(event, ui) {//если автоподстановка произошла, забираем новое значение
                    if (ui.item) {
                        country_val = ui.item.label;
                    }
                }
            }
        });
        //в принципе дальше по аналогии с небольшими изменениями
        $('#region').keyup(function () {
            region_val = country_val + ' ' + $('#region').val();//дописываем к значению инпута, значение предведущего инпута
            var request = {
                input: region_val,
            };
            //log(request);
            autocomplete_service.getPlacePredictions(request, google_addresses_callback);
            function google_addresses_callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var counter = 0;
                    $.each(results, function (index, result) {
                        //log(result);
                        function in_array(value, array) {
                            for (var i = 0; i < array.length; i++) {
                                if (array[i] == value) {
                                    var formated = result.description;
                                    formated = formated.split(',');//отсекаем значение предведущего инпута. в подсказке оно нам не нужно
                                    region_list[counter] = formated[0];
                                    counter++;
                                    return true;
                                }
                            }
                            return false;
                        }
                        if (in_array("administrative_area_level_1", result.types)) {
                            //log(result);
                        }
                    });
                } else {
                    log('no result')
                }
            }
            $("#region").autocomplete({
                source: region_list,
                focus: displayItem,
                select: displayItem,
                change: displayItem
            });
            function displayItem(event, ui) {
                if (ui.item) {
                    region_val = ui.item.label;
                }
            }
        });
        $('#city').keyup(function () {
            city_val = region_val + ' ' + $('#city').val();
            var request = {
                input: city_val,
            };
            //log(request);
            autocomplete_service.getPlacePredictions(request, google_addresses_callback);
            function google_addresses_callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var counter = 0;
                    $.each(results, function (index, result) {
                        //log(result);
                        function in_array(value, array) {
                            for (var i = 0; i < array.length; i++) {
                                if (array[i] == value) {
                                    var formated = result.description;
                                    formated = formated.split(',');
                                    city_list[counter] = formated[0];
                                    counter++;
                                    return true;
                                }
                            }
                            return false;
                        }
                        if (in_array("locality", result.types)) {
                            //log(result);
                        }
                    });
                } else {
                    log('no result')
                }
            }
            $("#city").autocomplete({
                source: city_list,
                focus: displayItem,
                select: displayItem,
                change: displayItem
            });
            function displayItem(event, ui) {
                if (ui.item) {
                    city_val = ui.item.label;
                }
            }
        });
    });
}

//video preview
'use strict';
function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
r(function () {
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function (node, classname) {
            var a = [];
            var re = new RegExp('(^| )' + classname + '( |$)');
            var els = node.getElementsByTagName("*");
            for (var i = 0, j = els.length; i < j; i++)
                if (re.test(els[i].className)) a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body, "youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i = 0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        // videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class", "play");
        videos[i].appendChild(play);
        videos[i].onclick = function () {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
            iframe.setAttribute("src", iframe_url);
            iframe.setAttribute("frameborder", '0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

//swiper slider main
if ($('*').is('.swiper-container-1')) {
    var mySwiper = new Swiper('.swiper-container-1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        simulateTouch: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        noSwiping: true,
        followFinger: false,
        allowTouchMove: false,
    })
    var mySwiper1 = new Swiper('.swiper-container-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        simulateTouch: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        noSwiping: true,
        followFinger: false,
        allowTouchMove: false,
    })
    var mySwiper2 = new Swiper('.swiper-container-3', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        simulateTouch: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        noSwiping: true,
        followFinger: false,
        allowTouchMove: false,
    })
    var mySwiper3 = new Swiper('.swiper-container-4', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        simulateTouch: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        noSwiping: true,
        followFinger: false,
        allowTouchMove: false,
    })
    $('.swiper-button-prev').click(function () {
        mySwiper.slidePrev();
        setTimeout(function () {
            mySwiper1.slidePrev();
        }, 200);
        setTimeout(function () {
            mySwiper3.slidePrev();
        }, 300);
        setTimeout(function () {
            mySwiper2.slidePrev();
        }, 500);
    });
    $('.swiper-button-next').click(function () {
        mySwiper.slideNext();
        setTimeout(function () {
            mySwiper1.slideNext();
        }, 200);
        setTimeout(function () {
            mySwiper3.slideNext();
        }, 300);
        setTimeout(function () {
            mySwiper2.slideNext();
        }, 500);
    });
}

//delivery hover
$(".main__cardContentDeliveryIcon").hover(function () {
    $(".main__cardContentDeliveryText").removeClass("main__cardContentDeliveryText-active");
});
$(".main__cardContentDeliveryIcon").mouseover(function () {
    $(".main__cardContentDeliveryText").addClass("main__cardContentDeliveryText-active");
});

//scrollup btn
// при нажатии на кнопку scrollup
$('.scrollup').click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
})
function checkScroll() {
    if ($(this).scrollTop() > 200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
}