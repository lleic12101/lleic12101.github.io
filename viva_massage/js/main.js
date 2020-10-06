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
    $('.section__servicesFilter').toggle();
    $(this).toggleClass('header__navBtn-active');
    if (!$(this).hasClass("header__navBtn-active")) {
        $(".header__navListBlock").removeClass("header__navListBlock-active");
        $(".header__navIconClose").hide();
        $(".header__navBtnIcon").show();
    } else {
        $(".header__navListBlock").removeClass("header__navListBlock-active");
        $(".header__navIconClose").hide();
        $(".header__navBtnIcon").show();
        $(this).children(".header__navIconClose").show();
        $(this).children(".header__navBtnIcon").hide();
    }
});

//resize func
$(window).on('resize', function () {
    onResize();
    resizeEmptySpace();
    headerResponsive();
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
        if (this.value.trim() === '') this.value = '';
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
        if (key.charCode === 60 ||
            key.charCode === 62 ||
            key.charCode === 123 ||
            key.charCode === 125 ||
            key.charCode === 36) return false;
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

        $(this).parent().parent().find('.section__editFormBtn').prop("disabled", true);
        $(this).parent().parent().find('.section__editFormBtn').addClass('section__editFormBtn-disabled');

        var phone = $(this).parent().find('.section__editFormPhoneTextSpan').html();
        $(this).parent().find('.section__editFormPhoneRowInput').val(phone);
    });
    $(".section__editFormPhoneRowInput").mask("9999-999-999");
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

            $(this).parent().parent().parent().parent().parent().find('.section__editFormBtn').prop("disabled", false);
            $(this).parent().parent().parent().parent().parent().find('.section__editFormBtn').removeClass('section__editFormBtn-disabled');
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

//post an ad phone mask
if ($('*').is('.section__postAnAd-step1')) {
    $(".section__editFormPhoneRowInput").mask("9999-999-999");
    $(".section__postAnAd-step1").submit(function (e) {
        e.preventDefault();
        $(this).find('.section__postAnAd-step1').addClass('section__editFormBtn-disabled');
        $(this).find('.section__postAnAd-step1').prop("disabled", true);
        $(this).find('.section__editFormPhoneFooterWrapper').slideDown();

        $(this).find('.section__editFormPhoneRowInput').hide();
        $(this).find('.section__loginTextWrapper-postPhone').hide();
        $(this).find('.section__editFormPhoneFooterBtn-change').show();
        $(this).find('.section__editFormPhoneTextSpan').show();
        $(this).find('.section__postAnAdPhoneSpan').show();

        var phoneVal = $(this).find('.section__editFormPhoneRowInput').val();
        $(this).find('.section__editFormPhoneTextSpan').html(phoneVal);

        $(this).find('.section__editFormPhoneFooterRowBtn').click(function () {
            if ($('.section__editFormPhoneFooterRowInput').val().trim() != '' &&
                $('.section__editFormPhoneFooterRowInput').val().length == 6) {
                $(".section__editFormPhoneRowInput").removeClass("section__loginInput-error");
                $(this).parent().parent().parent().parent().children('.section__editFormPhoneFooterWrapper').slideUp();
                setTimeout(function () {
                    $(".section__postAnAd-step1").off("submit");
                    $(".section__postAnAd-step1").submit();
                }, 300);
            } else {
                $(".section__editFormPhoneFooterRowInput").addClass("section__loginInput-error");
            }
        });

        $(this).find('.section__editFormPhoneFooterBtn-change').click(function () {
            $(this).parent().find('.section__editFormPhoneRowInput').show();
            $(this).parent().find('.section__loginTextWrapper-postPhone').show();
            $(this).parent().find('.section__editFormPhoneFooterBtn-change').hide();
            $(this).parent().find('.section__editFormPhoneTextSpan').hide();
            $(this).parent().find('.section__postAnAdPhoneSpan').hide();

            var phone = $(this).parent().find('.section__editFormPhoneTextSpan').html();
            $(this).parent().find('.section__editFormPhoneRowInput').val(phone);

            $(this).parent().find('.section__editFormPhoneFooterWrapper').slideUp();

            $(this).parent().parent().find('.section__postAnAd-step1').removeClass('section__editFormBtn-disabled');
            $(this).parent().parent().find('.section__postAnAd-step1').prop("disabled", false);
        });
    });
}

//add pictures
if ($('*').is('.section__postAnAdPictureIcon')) {
    $('.section__postAnAdPictureIcon').click(function () {
        if (!$(this).parent().hasClass('section__postAnAdPicture-gray')) {
            $(this).parent().remove();
        }
    });
}

//top countries
if ($('*').is('.section__menuHeader')) {
    $('.section__menuHeader').click(function () {
        $(this).toggleClass("section__menuHeader-active");
        $(this).parent().children(".section__menuContent").slideToggle();
    });
    $('.section__menuContentListSpan').click(function () {
        if (!$(this).parent().hasClass('section__menuContentListLi-active')) {
            $(this).parent().parent().parent().parent().find('.section__menuContentListSpan').parent().removeClass('section__menuContentListLi-active');
            $(this).parent().parent().parent().parent().find('.section__menuContentListInnerWrapper').slideUp();
        }
        $(this).parent().toggleClass('section__menuContentListLi-active');
        $(this).parent().find('.section__menuContentListInnerWrapper').slideToggle();
    });
    $('.section__menuContentMore').click(function () {
        $(this).parent().children('.section__menuHidden').slideDown();
        $(this).remove();
    });
    $('.header__navLink-threatments').click(function () {
        if (!$(this).parent().find('.header__navListInnerList').hasClass("active")) {
            $(this).parent().parent().parent().find('.header__navListInnerList').slideUp();
            $(this).parent().parent().parent().find('.header__navListInnerList').removeClass("active");
        }
        $(this).parent().find('.header__navListInnerList').slideDown();
        $(this).parent().find('.header__navListInnerList').addClass("active");
    });
}

//header responsive
function headerResponsive() {
    $(".header__navList").removeClass("hover");
    $(".header__navLink").removeClass("hover");
    $('.header__navListBlock').click(function () {
        $('.section__servicesFilter').hide();
        $('.header__navCityBtn').removeClass("header__navBtn-active");
        $(".header__navIconClose").hide();
        $(".header__navBtnIcon").show();
        if ($(this).hasClass("header__navListBlock-active")) {
            $(".header__navListBlock").removeClass("header__navListBlock-active");
            $(this).children(".header__navIconClose").hide();
            $(this).children(".header__navBtnIcon").show();
        } else {
            $(".header__navListBlock").removeClass("header__navListBlock-active");
            $(this).addClass("header__navListBlock-active");
            $(this).children(".header__navIconClose").show();
            $(this).children(".header__navBtnIcon").hide();
        }
    });
    $('.header__navList').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
}
if ($(window).width() <= 656) {
    headerResponsive();
}
