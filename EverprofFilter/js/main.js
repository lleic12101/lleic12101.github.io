window.onload = function() {
	if(localStorage.getItem('checkObj') !== null) 
	{
		var checkObj = JSON.parse(localStorage.getItem('checkObj'));	
		var blocks = $('.sidebar__block');
		for(var i = 0; i < blocks.length; i++){
			if(checkObj[i] === true){
				var container = blocks[i].querySelector('.sidebar__list-container');
				$(container).slideDown();
				$(container).toggleClass('sidebar__open');
				var thisSign = blocks[i].querySelector('.sidebar__signPlus');
				$(thisSign).toggleClass('sidebar__signPlus-disabled');
			}
		}
	}
};

var Scrollbar = window.Scrollbar;
Scrollbar.initAll({alwaysShowTracks: true, thumbMinSize: 170});

$('.sidebar__titleBlock').click(function(){
	var thisSign = this.querySelector('.sidebar__signPlus');
	$(thisSign).toggleClass('sidebar__signPlus-disabled');
	var thisContainer = this.parentNode.querySelector('.sidebar__list-container');
	$(thisContainer).toggleClass('sidebar__open');
	if ( $(window).width() < 1001 ) {
		$(thisContainer).toggle();
		listsPrint();
	} else {
		$(thisContainer).slideToggle();
	}
	updateLocalStorage();
});

if ( $(window).width() < 1001 ) {
	if(Scrollbar !== ''){
		Scrollbar.destroyAll();
	}
	$('.sidebar__block').hide();
	} else if ( $(window).width() > 1001 ) {
$('.sidebar__block').show();
}
$(window).resize(function() {
	if ( $(window).width() < 1001 ) {
	Scrollbar.destroyAll();
	$('.sidebar__block').hide();
	$('.sidebar__blockButton').hide();
	} else if ( $(window).width() > 1001 ) {
	var Scrollbar = window.Scrollbar;
	Scrollbar.initAll({alwaysShowTracks: true, thumbMinSize: 170});
	$('.sidebar__block').show();
	$('.sidebar__blockButton').show();
	}
	});
	
	$('.sidebar__list-button').click(function(){
	$('.sidebar').toggleClass('sidebar__active');
	$('.sidebar__block').toggle();
	$('.sidebar__blockButton').toggle();
	$('.archive-catalog__sidebar').toggleClass('scrollbar');
	$('.sidebar__blocks').toggleClass('force-overflow');
	listsPrint();
	});
	
	function listsPrint(){
	var lists = $('.sidebar__list');
	var titles = $(lists).parent().parent().find('.sidebar__titleBlock');
	$(lists).css('top', '-800%');
	$(titles).css('top', '-800%');
	var step = 65;
	for(var i = 0; i < lists.length-1; i++){
	$(titles[i]).css('top', step);
	step += $(titles[i]).outerHeight()-1;
	if($(titles[i]).find('.sidebar__signPlus').hasClass('sidebar__signPlus-disabled')){
	$(lists[i]).css('top', step);
	step += $(lists[i]).outerHeight()-1;
	}
	}
	$('.scroll-content').parent().parent().parent().find('.sidebar__titleBlock').css('top', step);
	step += $('.scroll-content').parent().parent().parent().find('.sidebar__titleBlock').outerHeight()-1;
	
	var scrollbox = $('.scroll-content').parent();
	scrollbox.css('overflow', 'unset');
	
	$('.scrollDiv').css('top', step);
	
	if($('.scroll-content').parent().parent().parent().find('.sidebar__signPlus').hasClass('sidebar__signPlus-disabled')){
	$('.scroll-content').css('top', step);
	step += $('.scroll-content').find('.sidebar__list').outerHeight()-1;
	}
	
	$('.sidebar__blockButton').css('top', step);
	
	updateLocalStorage();
	}
	
	function updateLocalStorage(){
	var blocks = $('.sidebar__block');
	var checkObj = [];
	for(var i = 0; i < blocks.length; i++){
	var container = blocks[i].querySelector('.sidebar__list-container');
	var check = $(container).hasClass('sidebar__open');
	checkObj[i] = check;
	}
	localStorage.setItem('checkObj', JSON.stringify(checkObj));
	}			