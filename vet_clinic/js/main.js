$(".main__faqTab").click(function () {
    if (!$(this).hasClass("main__faqTab-wait")) {
        if ($(this).hasClass("main__faqTab-active")) {
            $(this).find(".main__faqTabText").slideUp();
            $(this).find(".main__faqTabContentArrow").removeClass("main__faqTabContentArrow-active");
            $(this).removeClass("main__faqTab-active");
        } else {
            $(this).find(".main__faqTabText").slideDown();
            $(this).find(".main__faqTabContentArrow").addClass("main__faqTabContentArrow-active");
            $(this).addClass("main__faqTab-active");
        }
    }
});

//map
var map;
var marker;
function initMap() {
    var myLatLng = { lat: 47.107635, lng: 37.642391 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 14,
    });

    marker = new google.maps.Marker({
        position: myLatLng,
        title: "Орджонікідзевська ветеринарна клініка",
        map: map,
        icon: "img/contacts/point.png",
    });
}

if ($("*").is(".main__indexArticleSlides")) {
    //article slider
    $(".main__indexArticleSlides").slick({
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        draggable: true,
        focusOnSelect: true,
        prevArrow: $(".main__indexArticleControlsArrow-prev"),
        nextArrow: $(".main__indexArticleControlsArrow-next"),
    });

    $(".main__indexArticleSlides").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(slick.$slides[nextSlide]).addClass("main__articleContentMoreArticle-slide-active");
        $(slick.$slides[currentSlide]).removeClass("main__articleContentMoreArticle-slide-active");
        $(".main__indexArticleControlsNum-bold").html(nextSlide + 1);
    });

    var slides = document.querySelectorAll(".main__articleContentMoreArticle-slide");
    slides[4].classList.add("main__articleContentMoreArticle-slide-active");

    //services slider
    $(".main__indexServicesTabButtons").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".main__indexServicesTabs",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        prevArrow: $(".main__indexServicesArrow-prev"),
        nextArrow: $(".main__indexServicesArrow-next"),
    });
    $(".main__indexServicesTabButtons").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(slick.$slides[nextSlide]).addClass("main__indexServicesTabButton-active");
        $(slick.$slides[currentSlide]).removeClass("main__indexServicesTabButton-active");
    });
    var slides2 = document.querySelectorAll(".main__indexServicesTabButton");
    slides2[6].classList.add("main__indexServicesTabButton-active");

    $(".main__indexServicesTabs").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".main__indexServicesTabButtons",
    });
}

//aboutSlider
if ($("*").is(".main__aboutSliderWrapper")) {
    $(".main__aboutSliderWrapper").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        draggable: true,
        prevArrow: $(".main__aboutControlsArrow-prev"),
        nextArrow: $(".main__aboutControlsArrow-next"),
    });

    $(".main__aboutSliderWrapper").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".main__indexArticleControlsNum-bold").html(nextSlide + 1);
    });
}

//notification
if ($("*").is(".notification__subscribe")) {
    $(".notification__subscribeCloseImg").click(function () {
        $(this).parent().parent().removeClass("notification__subscribe-active");
    });
}


