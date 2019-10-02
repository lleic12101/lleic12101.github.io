$('.main__socialItemHeader').click(function(){
	if(!$(this).parent().hasClass('main__socialItem-active')){
		$('.main__socialItem').removeClass('main__socialItem-active');
		$('.main__socialItemFull').slideUp();
	}
	$(this).parent().toggleClass('main__socialItem-active');
	var child = this.parentNode.querySelector('.main__socialItemFull');
	$(child).slideToggle();
});

$('.sidebar__adminBtn').click(function(){
	$('.sidebar__adminBtn-mobile').toggleClass('sidebar__adminBtn-mobile-active');
	$('.sidebar__adminBtn').toggleClass('sidebar__adminBtn-active');
	$('.sidebar__adminMenu-mobile').slideToggle();
	$('.sidebar__adminMenu').toggleClass('sidebar__adminMenu-active');
});

$('.sidebar__mobileMenuBtn').click(function(){
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).html('bars');
	} else {
		
		$(this).addClass('active');
		$(this).html('times');
	}
	$('.sidebar__menuBlock-mobile').slideToggle();
});