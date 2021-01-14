var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
        },
        960: {
            slidesPerView: 3,
        },
    }
});