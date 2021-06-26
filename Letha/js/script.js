// scroll header
window.onscroll = function () {
    scrollHeader()
};

const header = document.getElementById("header");
const sticky = header.offsetTop;

function scrollHeader() {
    if (window.pageYOffset - 1 >= sticky) {
        $('header').addClass('sticky');
        $('.main').css('padding-top', '60px');
        $('.top-bar').css('padding-top', '60px');
        $('.header__logo').addClass('color-black');
        $('.lang').css('color', '#303236');
        $('.login').addClass('login-scroll');
        $('.header__menu-link').addClass('color-black');
        $('.header__mob-menu span').addClass('menu2');
        $('.header__settings .lang-arrow').attr('src', 'images/arrow-down-black.svg');
    } else {
        $('header').removeClass('sticky');
        $('.main').css('padding-top', '0');
        $('.top-bar').css('padding-top', '0');
        $('.header__logo').removeClass('color-black');
        $('.lang').css('color', '#FFFFFF');
        $('.login').removeClass('login-scroll');
        $('.header__menu-link').removeClass('color-black');
        $('.header__mob-menu span').removeClass('menu2');
        $('.header__settings .lang-arrow').attr('src', 'images/arrow-down.svg');
    }
}


// mob-menu
$('.header__mob-menu').click(function () {
    $('.header__mob-menu span').toggleClass('active');
    $('.mob-menu').slideToggle(300);
    $('.header__closeableMask').toggleClass("header__closeableMask-active");
    $("html, body").toggleClass("body-fixed");
    $('.lang-choise').slideUp(300);
    $('.header__settings .lang img').removeClass('rotate-arrow');
});
$('.header__closeableMask').click(function () {
    $('.header__mob-menu span').removeClass('active');
    $('.mob-menu').slideUp(300);
    $('.header__closeableMask').removeClass("header__closeableMask-active");
    $("html, body").removeClass("body-fixed");
    $('.lang-choise').slideUp(300);
    $('.header__settings .lang img').removeClass('rotate-arrow');
});

// custom select
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);

//google map
//map
if ($('*').is('.main__contactsMapBlock')) {
    var map;

    function initMap() {
        var myLatLng = {lat: 55.776583, lng: 37.500132};

        map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 14,
        });
    }
}

//tabs
$('.sub-button').click(function () {
    $('.sub-button').removeClass('active');
    $(this).addClass('active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.accordion').removeClass("accordion-active");
    $("#" + id).addClass("accordion-active");

});

//header sub menu
$('.header__menu-linkBlock .header__menu-link').click(function () {
    $('.header__menu-linkBlock').toggleClass('header__menu-linkBlock-active');
    $('.header__menu-linkMenuWrapper').slideToggle();
});
$('.header__menu-linkMenuItem').click(function () {
    $('.header__menu-linkBlock').removeClass('header__menu-linkBlock-active');
    $('.header__menu-linkMenuWrapper').slideUp();
});

// language choise
$('.lang').click(function () {
    $('.lang-choice-wrapper').slideToggle(300);
    $('.header__settings .lang-arrow').toggleClass('rotate-arrow');
});