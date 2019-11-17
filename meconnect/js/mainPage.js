(function (){
	link = $('.js-scroll-link');
	link.on('click', function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
})();

$('.main__secondBlockToggleItem').click(function(){
	$(this).find('.main__secondBlockToggleImgBlock-more').toggleClass('main__secondBlockToggleImg-opacity');
	$(this).find('.main__secondBlockToggleImgBlock-less').toggleClass('main__secondBlockToggleImg-opacity');
	$(this).find('.main__secondBlockToggleItem-leftCircle').slideToggle();
	$(this).find('.main__secondBlockToggleItem-rightCircle').slideToggle();
	$(this).find('.main__secondBlockToggleItemText').slideToggle();
});

$('.ham').click(function(){
	this.classList.toggle('active');
	$('.header__navWrapper').slideToggle();
});