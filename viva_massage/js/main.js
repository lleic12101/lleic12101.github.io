//filter open lists
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
    resizeEmptySpace();
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
                    var src = $(el).parent().parent().children('.section__servicesItemImg-link').children('.section__servicesItemImg').attr('src');
                    var dataSrc = $(el).parent().parent().children('.section__servicesItemImg-link').children('.section__servicesItemImg').attr('data-srcset');
                    $(el).parent().parent().children('.section__servicesItemImg-link').children('.section__servicesItemImg').attr("srcset", dataSrc);
                    $(el).parent().parent().children('.section__servicesItemImg-bg').css('background-image', 'url(' + src + ')');
                    $(el).parent().parent().children('.swiper-lazy-preloader').hide();
                }
            });
            observer.observe();

            $('.section__servicesItemImg-link').click(function (e) {
                e.preventDefault();
                if (!$(that.slides)[0].parentNode.classList.contains('active-gallery')) {
                    $(that.slides)[0].parentNode.classList.add('active-gallery');
                    var $pic = $($(that.slides)[0].parentNode.parentNode),
                        getItems = function () {
                            var items = [];
                            $pic.find('p').each(function () {
                                var $href = $(this).data('href'),
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

                    $pic.on('click', 'p', function (event) {
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
                    var src = $(el).parent().parent().children('.section__servicesItemImg-link').children('.section__servicesItemImg').attr('src');
                    var dataSrc = $(el).parent().parent().children('.section__servicesItemImg-link').children('.section__servicesItemImg').attr('data-srcset');
                    $(el).parent().parent().children('.section__servicesItemImg-link').children('.section__servicesItemImg').attr("srcset", dataSrc);
                    $(el).parent().parent().children('.section__servicesItemImg-bg').css('background-image', 'url(' + src + ')');
                    $(el).parent().parent().children('.swiper-lazy-preloader').hide();
                }
            });
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

//textarea checker
textareaInit();
function textareaInit() {
    $(".master__blockFormTextarea").on('propertychange input', function (e) {
        var cursor = this.selectionStart;
        var lengthBefore = this.value.length;

        var maxLen = 3500;
        this.value = this.value.replace(/[$<>{}]/gi, '');
        this.value = this.value.replace(/https/gi, '');
        this.value = this.value.replace(/http/gi, ' ');
        this.value = this.value.replace(/ftp/gi, '');
        this.value = this.value.replace(/:\/\//gi, '');
        // this.value = this.value.replace(/\.(?=\S)/g, ". ");
        if (this.value.trim() == '') this.value = '';
        if (this.value.length > maxLen) this.value = this.value.substr(0, maxLen);

        $('.master__blockFormBtnBlockSymbols').html(this.value.length + " / " + maxLen);
        if (this.scrollTop > 0) {
            this.style.height = this.scrollHeight + "px";
        }
        var rating = $('input[name=rating]:checked').val();
        var rating1 = $('input[name=rating-1]:checked').val();
        var rating2 = $('input[name=rating-2]:checked').val();
        sessionStorage.setItem('formText', this.value);
        sessionStorage.setItem('rating', rating);
        sessionStorage.setItem('rating-1', rating1);
        sessionStorage.setItem('rating-2', rating2);

        var lengthAfter = this.value.length;
        var result = lengthBefore - lengthAfter;
        this.selectionEnd = cursor - result;
    });
    $('.master__blockFormTextarea').keypress(function (key) {
        if (key.charCode == 60 ||
            key.charCode == 62 ||
            key.charCode == 123 ||
            key.charCode == 125 ||
            key.charCode == 36) return false;
    });
}
if (sessionStorage.getItem('formText') != null && !$('*').is('.master__blockReviewItem-reviews')) {
    $(".master__blockFormTextarea").val(sessionStorage.getItem('formText'));
    var rating = sessionStorage.getItem('rating');
    var rating1 = sessionStorage.getItem('rating-1');
    var rating2 = sessionStorage.getItem('rating-2');
    $('.stars').find('input[value=' + rating + ']').prop('checked', true);
    $('.stars1').find('input[value=' + rating1 + ']').prop('checked', true);
    $('.stars2').find('input[value=' + rating2 + ']').prop('checked', true);

    var maxLen = 3500;
    var that = document.querySelector('.master__blockFormTextarea');
    $('.master__blockFormBtnBlockSymbols').html(that.value.length + " / " + maxLen);
    that.style.height = (that.scrollHeight + 15) + "px";
}

//scrollTo
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
})();

//height of page
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

//faq tabs
if ($('*').is('.section__faqItems')) {
    $('.section__faqItemTitle').click(function () {
        $(this).parent().toggleClass('section__faqItem-active');
        $(this).parent().find('.section__faqItemTextBlock').slideToggle();
    });
}

//my reviews edit
if ($('*').is('.master__blockReviewItem-reviews')) {
    var $form = $(".master__blockForm-reviews");
    $(".master__blockForm-reviews").remove();
    $('.sections__reviewEditBtn').click(function () {
        $(".sections__reviewEditBtnBlock").show();
        $(".master__blockReviewItemText").show();
        $(".master__blockReviewItemRating").show();
        $(".master__blockForm-reviews").hide();

        $(this).parent().parent().append($form);
        textareaInit();

        $(this).parent().parent().children(".sections__reviewEditBtnBlock").hide();
        $(this).parent().parent().children(".master__blockReviewItemText").hide();
        $(this).parent().parent().children(".master__blockReviewItemRating").hide();
        $(this).parent().parent().children(".master__blockForm-reviews").show();

        var text = $(this).parent().parent().children(".master__blockReviewItemText").html();
        text = text.replace(/\s+/g, ' ').trim();
        $(this).parent().parent().find(".master__blockFormTextarea").val(text);

        var maxLen = 3500;
        var that = $(this).parent().parent().find('.master__blockFormTextarea')[0];
        $('.master__blockFormBtnBlockSymbols').html(that.value.length + " / " + maxLen);
        that.style.height = (that.scrollHeight) + "px";

        var rating = $(this).parent().parent().find(".master__blockReviewItemRatingProsText").children("span")[0].innerHTML;
        var rating1 = $(this).parent().parent().find(".master__blockReviewItemRatingProsText").children("span")[1].innerHTML;
        var rating2 = $(this).parent().parent().find(".master__blockReviewItemRatingProsText").children("span")[2].innerHTML;

        $($(this).parent().parent().find("fieldset")[0]).children("input[value=" + rating + "]").prop("checked", true);
        $($(this).parent().parent().find("fieldset")[1]).children("input[value=" + rating1 + "]").prop("checked", true);
        $($(this).parent().parent().find("fieldset")[2]).children("input[value=" + rating2 + "]").prop("checked", true);

        $(this).parent().parent().find('.master__blockFormBtn-cancel').click(function () {
            $(this).parent().parent().parent().parent().children(".sections__reviewEditBtnBlock").show();
            $(this).parent().parent().parent().parent().children(".master__blockReviewItemText").show();
            $(this).parent().parent().parent().parent().children(".master__blockReviewItemRating").show();
            $(this).parent().parent().parent().parent().children(".master__blockForm-reviews").hide();
        });
        $(this).parent().parent().find('.master__blockForm-reviews').submit(function (e) {
            e.preventDefault();
            $(this).parent().children(".sections__reviewEditBtnBlock").show();
            $(this).parent().children(".master__blockReviewItemText").show();
            $(this).parent().children(".master__blockReviewItemRating").show();
            $(this).parent().children(".master__blockForm-reviews").hide();

            var rating = $(this).serializeArray()[0].value;
            var rating1 = $(this).serializeArray()[1].value;
            var rating2 = $(this).serializeArray()[2].value;

            $(this).parent().find(".master__blockReviewItemRatingProsText").children("span")[0].innerHTML = rating;
            $(this).parent().find(".master__blockReviewItemRatingProsText").children("span")[1].innerHTML = rating1;
            $(this).parent().find(".master__blockReviewItemRatingProsText").children("span")[2].innerHTML = rating2;

            var result = ((Number(rating) + Number(rating1) + Number(rating2)) / 3).toFixed(1);
            $(this).parent().find(".section__serviceItemReviewsText").html(result);
            var width = 20 * result;
            $(this).parent().find(".rating").children("div").css("width", width + "%");

            var review = $(this).serializeArray()[3].value;
            $(this).parent().children(".master__blockReviewItemText").html(review);
        });
    });
}

//delete bookmark
if ($('*').is('.section__bookmarkedItemDeleteBtn')) {
    $('.section__bookmarkedItemDeleteBtn').click(function () {
        var act = $('.section__bookmarkedBtn-act').html();
        var paused = $('.section__bookmarkedBtn-paused').html();
        var all = $('.section__bookmarkedBtn-all').html();

        act = act.split("(")[1];
        act = act.substr(0, act.length - 1);
        act = Number(act);

        paused = paused.split("(")[1];
        paused = paused.substr(0, paused.length - 1);
        paused = Number(paused);

        all = all.split("(")[1];
        all = all.substr(0, all.length - 1);
        all = Number(all);

        if ($('.section__bookmarkedBtn-active').hasClass('section__bookmarkedBtn-act')) {
            if (act - 1 >= 0) {
                act = act - 1;
                $('.section__bookmarkedBtn-act').html("Active (" + act + ")");
                if (all - 1 >= 0) {
                    all = all - 1;
                    $('.section__bookmarkedBtn-all').html("All (" + all + ")");
                }
                $(this).parent().parent().remove();
            }
        } else if ($('.section__bookmarkedBtn-active').hasClass('section__bookmarkedBtn-paused')) {
            if (paused - 1 >= 0) {
                paused = paused - 1;
                $('.section__bookmarkedBtn-paused').html("Paused (" + paused + ")");
                if (all - 1 >= 0) {
                    all = all - 1;
                    $('.section__bookmarkedBtn-all').html("All (" + all + ")");
                }
                $(this).parent().parent().remove();
            }
        } else if ($('.section__bookmarkedBtn-active').hasClass('section__bookmarkedBtn-all')) {
            if (all - 1 >= 0) {
                all = all - 1;
                $('.section__bookmarkedBtn-all').html("All (" + all + ")");
                $(this).parent().parent().remove();
            }
        }
        resizeEmptySpace();
    });
}

//edit phone
if ($('*').is('.section__editFormPhoneFooterBtn-change')) {
    $('.section__editFormPhoneFooterBtn-change').click(function () {
        $(this).hide();
        $(this).parent().children('.section__editFormPhoneFooterWrapper').slideDown();
        $(this).parent().find('.section__editFormPhoneTextSpan').hide();
        $(this).parent().find('.section__editFormPhoneRowInput').show();

        var phone = $(this).parent().find('.section__editFormPhoneTextSpan').html();
        $(this).parent().find('.section__editFormPhoneRowInput').val(phone);
    });
    $(".section__editFormPhoneRowInput").mask("9999-999-9999");
    // $(".section__editFormPhoneRowInput").mask("9999-999-9999", {autoclear: false});
    $('.section__editFormPhoneFooterRowBtn').click(function () {
        if ($('.section__editFormPhoneFooterRowInput').val().trim() != '' &&
            $('.section__editFormPhoneFooterRowInput').val().length == 6) {
            $(".section__editFormPhoneRowInput").removeClass("section__loginInput-error");
            $(this).parent().parent().parent().parent().children('.section__editFormPhoneFooterWrapper').slideUp();
            $(this).parent().parent().parent().parent().find('.section__editFormPhoneTextSpan').show();
            $(this).parent().parent().parent().parent().find('.section__editFormPhoneRowInput').hide();
            $(this).parent().parent().parent().parent().find('.section__editFormPhoneFooterBtn-change').show();

            var phoneVal = $(this).parent().parent().parent().parent().find('.section__editFormPhoneRowInput').val();
            $(this).parent().parent().parent().parent().find('.section__editFormPhoneTextSpan').html(phoneVal);
        } else {
            $(".section__editFormPhoneFooterRowInput").addClass("section__loginInput-error");
        }
    });
}

//cities autocomplete
if ($('*').is('.section__loginInput-cities')) {
    $(".section__loginInput-cities").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "https://www.freeads.co.uk/autocomplete?callback=jQuery111309223511907505_1601677440936&term=" + request.term,
                dataType: "jsonp",
                data: {
                    q: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        minLength: 2
    });
}
