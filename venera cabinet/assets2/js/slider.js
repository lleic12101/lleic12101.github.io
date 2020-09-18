$('.main__financeDepositBlockSliderContent').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $('.main__financeDepositBlockSliderArrow-left'),
	nextArrow: $('.main__financeDepositBlockSliderArrow-right'),
	responsive: [
		{
			breakpoint: 1526,
			settings: {
                slidesToShow: 2,
				centerMode: true
			}
		},
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 1,
				centerMode: true
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				centerMode: false
			}
		}
	]
});