﻿//filter open lists
$('.section__servicesFilterItemTitle').click(function () {
    if ($(this).parent().children('.section__servicesFilterList').length > 0) {
        $(this).parent().children('.section__servicesFilterList').slideToggle();
        $(this).children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
    }
});
$('.section__servicesFilterListLiItem').click(function () {
    if ($(this).parent().children('.section__servicesFilterList').length > 0) {
        $(this).parent().children('.section__servicesFilterList').slideToggle();
        $(this).children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
    }
    $('.section__servicesFilterListLiItem').removeClass('section__servicesFilterListLiItem-active');
    $(this).addClass('section__servicesFilterListLiItem-active');
    $(this).parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');
    $(this).parent().parent().parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');

    var name = $(this).children('p').html();
    sessionStorage.setItem('opened', name);
    window.location.reload();
});

//show full number
$('.section__serviceItemText-show').click(function () {
    $(this).parent().children(".section__serviceItemText-show").hide();
    $(this).parent().children(".section__serviceItemText-short").hide();
    $(this).parent().children(".section__serviceItemText-full").show();
});

//show filter
$('.header__navCityBtn').click(function () {
    $('.section__servicesMobileFilter').toggle();
    $(this).toggleClass('header__navBtn-active');
});

//resize func
$(window).on('resize', function () {
    onResize();
});
onResize();

function onResize() {
    var width = $(window).width();
    if (width <= 656) {
        $('.header__navListBlock-gender').removeClass('header__navListBlock-opened');
    } else $('.header__navListBlock-gender').addClass('header__navListBlock-opened');
}

//mobile menu
var modal = document.querySelector('.modal');

function toggleModal() {
    modal.classList.toggle('show-modal');
    $('html, body').toggleClass('body-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

$('.header__navBurgerLink').click(function () {
    toggleModal();
});
$('.modal__contentHeaderClose').click(function () {
    toggleModal();
});
window.addEventListener("click", windowOnClick);

$('.modal__contentNavLiBtn').click(function () {
    $(this).parent().children('.modal__contentNavListBlock').slideToggle();
    $(this).toggleClass('modal__contentNavLiBtn-active');
});

//photoswipe js
var $pswp = $('.pswp')[0];
var image = [];
// $('.section__servicesItemImg').lazy();

//swiper js
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    // lazy: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            var that = this;
            var el = this.slides[this.activeIndex].querySelector('.section__servicesItemImg');
            var observer = lozad(el, {
                loaded: function (el) {
                    $(el).parent().parent().parent().children('.swiper-lazy-preloader').hide();
                }
            });
            observer.observe();
            el = this.slides[this.activeIndex].querySelector('.section__servicesItemImg-bg');
            observer = lozad(el);
            observer.observe();

            $('.section__servicesItemImg-link').click(function (e) {
                e.preventDefault();
                if (!$(that.slides)[0].parentNode.classList.contains('active-gallery')) {
                    $(that.slides)[0].parentNode.classList.add('active-gallery');
                    var $pic = $($(that.slides)[0].parentNode.parentNode),
                        getItems = function () {
                            var items = [];
                            $pic.find('a').each(function () {
                                var $href = $(this).attr('href'),
                                    $size = $(this).data('size').split('x'),
                                    $width = $size[0],
                                    $height = $size[1];

                                var item = {
                                    src: $href,
                                    w: $width,
                                    h: $height
                                }
                                items.push(item);
                            });
                            return items;
                        }

                    var items = getItems();
                    items.pop();
                    items.shift();

                    $.each(items, function (index, value) {
                        image[index] = new Image();
                        image[index].setAttribute('data-src', value['src']);
                    });

                    $pic.on('click', 'a', function (event) {
                        event.preventDefault();
                        var $index = that.realIndex;
                        var options = {
                            index: $index,
                            bgOpacity: 0.7,
                            showHideOpacity: true
                        }

                        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                        lightBox.init();
                        lightBox.preload = 1;
                        lightBox.listen('beforeChange', function () {
                            that.slideTo(this.getCurrentIndex() + 1, 300, true);
                        });
                    });
                }
            });
        },
        slideChange: function () {
            var el = this.slides[this.activeIndex].querySelector('.section__servicesItemImg');
            var observer = lozad(el, {
                loaded: function (el) {
                    $(el).parent().parent().parent().children('.swiper-lazy-preloader').hide();
                }
            });
            observer.observe();
            el = this.slides[this.activeIndex].querySelector('.section__servicesItemImg-bg');
            observer = lozad(el);
            observer.observe();
        }
    },
});

//mobile filter
function setCountries(iClass, names, links) {
    var $listBlock = $(iClass).children('.section__servicesMobileFilterList');
    var text = "";
    for (var i = 0; i < names.length; i++) {
        text += `
        <li class="section__servicesMobileFilterListLi">
                                        <a href="${links[i]}">${names[i]}</a>
                                    </li>
        `;
    }
    $($listBlock).html(text);
}
function getCountries(iClass, name) {
    var strArr = [];
    var $thatParent;

    if (name == null) {
        for (var i = 0; i < $('.section__servicesFilterItemTitle p').length; i++) {
            var text = $('.section__servicesFilterItemTitle p')[i];
            strArr.push(text.innerHTML);
        }
        return strArr;
    }
    if (iClass == "section__servicesMobileFilterItem-country") {
        for (var i = 0; i < $('.section__servicesFilterItemTitle p').length; i++) {
            var text = $('.section__servicesFilterItemTitle p')[i];
            if (text.innerHTML == name) {
                $thatParent = $(text).parent().parent().children('.section__servicesFilterList');
            }
        }
    }
    if (iClass == "section__servicesMobileFilterItem-city" ||
        iClass == "section__servicesMobileFilterItem-part" ||
        iClass == "section__servicesMobileFilterItem-area") {
        for (var i = 0; i < $('.section__servicesFilterListLiItem p').length; i++) {
            var text = $('.section__servicesFilterListLiItem p')[i];
            if (text.innerHTML == name) {
                $thatParent = $(text).parent().parent().children('.section__servicesFilterList');
            }
        }
    }

    $thatParent = $($thatParent).children('.section__servicesFilterListLi').children('.section__servicesFilterListLiItem').children('p');

    for (var i = 0; i < $($thatParent).length; i++) {
        var text = $($thatParent)[i];
        strArr.push(text.innerHTML);
    }
    return strArr;
}
function getLinks(iClass, name) {
    var strArr = [];
    var $thatParent;

    if (name == null) {
        for (var i = 0; i < $('.section__servicesFilterItemTitle').length; i++) {
            var text = $('.section__servicesFilterItemTitle')[i];
            strArr.push(text.href);
        }
        return strArr;
    }
    if (iClass == "section__servicesMobileFilterItem-country") {
        for (var i = 0; i < $('.section__servicesFilterItemTitle p').length; i++) {
            var text = $('.section__servicesFilterItemTitle p')[i];
            if (text.innerHTML == name) {
                $thatParent = $(text).parent().parent().children('.section__servicesFilterList');
            }
        }
    }
    if (iClass == "section__servicesMobileFilterItem-city" ||
        iClass == "section__servicesMobileFilterItem-part" ||
        iClass == "section__servicesMobileFilterItem-area") {
        for (var i = 0; i < $('.section__servicesFilterListLiItem p').length; i++) {
            var text = $('.section__servicesFilterListLiItem p')[i];
            if (text.innerHTML == name) {
                $thatParent = $(text).parent().parent().children('.section__servicesFilterList');
            }
        }
    }

    $thatParent = $($thatParent).children('.section__servicesFilterListLi').children('.section__servicesFilterListLiItem');

    for (var i = 0; i < $($thatParent).length; i++) {
        var text = $($thatParent)[i];
        strArr.push(text.href);
    }
    return strArr;
}
$('.section__servicesMobileFilterItemHeadline').click(function () {
    $(this).parent().children('.section__servicesMobileFilterList').slideToggle();
    $(this).toggleClass('section__servicesMobileFilterItemHeadline-active');
});
$('.section__servicesMobileFilterListLi').click(function () {
    itemClick(this);
});
function itemClick(that, thatClass, thatName) {
    var isNew = false;
    var itemClass;
    var itemName;
    if (thatClass == null && thatName == null) {
        itemClass = $(that).parent().parent().attr('class').split(/\s+/)[1];
        itemName = $(that).children('a').html();
    } else {
        isNew = true;
        itemClass = thatClass;
        itemName = thatName;
    }
    var names = getCountries(itemClass, itemName);
    var links = getLinks(itemClass, itemName);

    sessionStorage.setItem(itemClass, itemName);

    if (itemClass == "section__servicesMobileFilterItem-area" && isNew == false) {
        $(that).parent().slideUp();
        $(that).removeClass('section__servicesMobileFilterItemHeadline-active');
        $(that).parent().parent().find('.section__servicesMobileFilterItemText').html(itemName);
    } else {
        if (itemName != null && itemName != "null") {
            $('.section__servicesMobileFilterItem-area').find('.section__servicesMobileFilterItemText').html(itemName);
        }
    }


    if (names.length == 0) {
        if (isNew == false) {
            window.location.reload();
        }
        return;
    }

    fieldsReset(itemClass);

    if (isNew == false) {
        $(that).parent().slideUp();
        $(that).removeClass('section__servicesMobileFilterItemHeadline-active');
        $(that).parent().parent().find('.section__servicesMobileFilterItemText').html(itemName);
    } else {
        if (itemName != null && itemName != "null") {
            $('.' + itemClass).find('.section__servicesMobileFilterItemText').html(itemName);
        }
    }
    if (itemClass == "section__servicesMobileFilterItem-country") {
        $(".section__servicesMobileFilterItem-city").show();
        setCountries('.section__servicesMobileFilterItem-city', names, links);
    }
    else if (itemClass == "section__servicesMobileFilterItem-city") {
        $(".section__servicesMobileFilterItem-part").show();
        setCountries('.section__servicesMobileFilterItem-part', names, links);
    } else if (itemClass == "section__servicesMobileFilterItem-part") {
        $(".section__servicesMobileFilterItem-area").show();
        setCountries('.section__servicesMobileFilterItem-area', names, links);
    }

    $('.section__servicesMobileFilterListLi').click(function () {
        itemClick(this);
    });

    if (isNew == false) {
        window.location.reload();
    }
}

function fieldsReset(itemClass) {
    if (itemClass == "section__servicesMobileFilterItem-country") {
        $(".section__servicesMobileFilterItem-city").find('.section__servicesMobileFilterItemText').html("Select a city");
        $(".section__servicesMobileFilterItem-part").find('.section__servicesMobileFilterItemText').html("Select part of the city");
        $(".section__servicesMobileFilterItem-area").find('.section__servicesMobileFilterItemText').html("Select area");
        sessionStorage.setItem('section__servicesMobileFilterItem-city', null);
        sessionStorage.setItem('section__servicesMobileFilterItem-part', null);
        sessionStorage.setItem('section__servicesMobileFilterItem-area', null);
    }
    else if (itemClass == "section__servicesMobileFilterItem-city") {
        $(".section__servicesMobileFilterItem-part").find('.section__servicesMobileFilterItemText').html("Select part of the city");
        $(".section__servicesMobileFilterItem-area").find('.section__servicesMobileFilterItemText').html("Select area");
        sessionStorage.setItem('section__servicesMobileFilterItem-part', null);
        sessionStorage.setItem('section__servicesMobileFilterItem-area', null);
    } else if (itemClass == "section__servicesMobileFilterItem-part") {
        $(".section__servicesMobileFilterItem-area").find('.section__servicesMobileFilterItemText').html("Select area");
        sessionStorage.setItem('section__servicesMobileFilterItem-area', null);
    }
}

function initFilterMobile() {
    var names = getCountries('..section__servicesMobileFilterItem-country');
    var links = getLinks('..section__servicesMobileFilterItem-country');
    setCountries('.section__servicesMobileFilterItem-country', names, links);

    $('.section__servicesMobileFilterListLi').click(function () {
        itemClick(this);
    });
}

initFilterMobile();


//filter storage
if (sessionStorage.getItem('opened') != null) {
    var width = $(window).width();
    if (width > 656) {
        var openName = sessionStorage.getItem('opened');
        for (var i = 0; i < $('.section__servicesFilterListLiItem p').length; i++) {
            var text = $('.section__servicesFilterListLiItem p')[i];
            if (text.innerHTML === openName) {
                $(text).parent().parent().parent().show();
                $(text).parent().parent().parent().parent().parent().show();
                $(text).parent().parent().children('.section__servicesFilterList').show();
                $(text).parent().parent().parent().parent().children('.section__servicesFilterList').show();
                $(text).parent().parent().parent().parent().parent().parent().parent().parent().children('.section__servicesFilterList').show();

                $(text).parent().parent().parent().parent().children('.section__servicesFilterItemTitle').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
                $(text).parent().parent().parent().parent().parent().parent().children('.section__servicesFilterItemTitle').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
                $(text).parent().parent().parent().parent().parent().parent().parent().parent().children('.section__servicesFilterItemTitle').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
                $(text).parent().parent().parent().parent().children('.section__servicesFilterListLiItem').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');
                $(text).parent().parent().children('.section__servicesFilterListLiItem').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');

                $(text).parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');
                $(text).parent().parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');
                $(text).parent().parent().parent().parent().parent().parent().children('.section__servicesFilterListLiItem').addClass('section__servicesFilterListLiItem-active');

                $(text).parent().parent().parent().parent().parent().parent().children('.section__servicesFilterListLiItem').children('.section__servicesFilterSignBlock').toggleClass('section__servicesFilterSignBlock-active');

                i = $('.section__servicesFilterListLiItem p').length;
            }
        }
    }
}
if ($(window).width() <= 656) {
    $('.header__navListBlock').click(function () {
        $('.section__servicesMobileFilter').hide();
        $('.header__navCityBtn').removeClass("header__navBtn-active");
    });

    var country = sessionStorage.getItem('section__servicesMobileFilterItem-country');
    var city = sessionStorage.getItem('section__servicesMobileFilterItem-city');
    var part = sessionStorage.getItem('section__servicesMobileFilterItem-part');
    var area = sessionStorage.getItem('section__servicesMobileFilterItem-area');

    // console.log(country);
    // console.log(city);
    // console.log(part);
    // console.log(area);

    if (country != null) {
        $('.section__servicesMobileFilter').show();
        $('.header__navCityBtn').addClass("header__navBtn-active");
        itemClick(null, 'section__servicesMobileFilterItem-country', country);
    }
    if (city != null) {
        itemClick(null, 'section__servicesMobileFilterItem-city', city);
    }
    if (part != null) {
        itemClick(null, 'section__servicesMobileFilterItem-part', part);
    }
    if (area != null && area != "null") {
        $('.section__servicesMobileFilter').hide();
        itemClick(null, 'section__servicesMobileFilterItem-area', area);
    }
}

