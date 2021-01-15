//tariffs slider
if ($('*').is('.owl-carousel')) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                dots: true,
            },
            1024: {
                items: 3,
                loop: false,
            }
        }
    });
}

//autoscroll
(function () {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        if (id == "#about" && $(window).width() > 480) {
            top -= 90;
        } else if (id == "#about") {
            top += 135;
        }
        $('body,html').animate({scrollTop: top}, 1500);
    });
})();

//burger menu
$('.header__burger').click(function () {
    $(this).toggleClass("header__burger-active");
    $("html, body").toggleClass("body-fixed");
    $('.header__nav-mobile').slideToggle();
    $('.header__closeableMask').addClass("header__closeableMask-active");
});
$('.header__closeableMask').click(function () {
    $(".header__burger").removeClass("header__burger-active");
    $('.header__closeableMask').removeClass("header__closeableMask-active");
    $('.header__nav-mobile').slideUp();
    $("html, body").removeClass("body-fixed");
});

//FAQ btns
$(".main__questionsItemHeader").click(function () {
    $(this).parent().toggleClass("main__questionsItem-active");
    $(this).parent().find(".main__questionsItemAnswer").slideToggle();
});

//map
if ($('*').is('.main__contactsContentMapBlock')) {
    var map;
    var marker;

    function initMap() {
        var myLatLng = {lat: 55.776583, lng: 37.500132};

        map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 14,
            styles: [
                {elementType: "geometry", stylers: [{color: "#242f3e"}]},
                {elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}]},
                {elementType: "labels.text.fill", stylers: [{color: "#746855"}]},
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{color: "#263c3f"}],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#6b9a76"}],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{color: "#38414e"}],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#212a37"}],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#9ca5b3"}],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{color: "#746855"}],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#1f2835"}],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#f3d19c"}],
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{color: "#2f3948"}],
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#d59563"}],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{color: "#17263c"}],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#515c6d"}],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{color: "#17263c"}],
                },
            ],
        });

        marker = new google.maps.Marker({
            position: myLatLng,
            title: "Место на карте",
            map: map,
            icon: "img/icons/map-point.png",
        });
    }
}

//input style
if ($('*').is(".main__nameAndInputFooterInput")) {
    $(".main__nameAndInputFooterInput").focus(function () {
        $(".main__nameAndInputFooterInput").parent().parent().removeClass("main__nameAndInput-active");
        $(this).parent().parent().addClass("main__nameAndInput-active");
    });
}