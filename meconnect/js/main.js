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
		$(this).removeClass('iconTimes');
		$(this).addClass('iconBars');
	} else {
		$(this).addClass('active');
		$(this).addClass('iconTimes');
		$(this).removeClass('iconBars');
	}
	$('.sidebar__menuBlock-mobile').slideToggle();
});

$('.main__serviceItemCheckboxInput').click(function(){
	$(this).parent().parent().toggleClass('main__serviceTableItem-active');
	var objs = document.querySelectorAll('.main__serviceTableItem-active');
	var priceSumm = 0;
	for(var i = 0; i < objs.length; i++){
		var str = objs[i].querySelector('.main__serviceItemYearPrice').innerHTML;
		str = +str.slice(0, -5);
		priceSumm += str;
	}
	$('.main__servicePayPrice').html(priceSumm);
});