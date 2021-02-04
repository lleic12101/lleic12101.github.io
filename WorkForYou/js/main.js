//plans slider
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