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

$('.main__allChatsItem').click(function(){
	$('.main__allChatsItem').removeClass('main__allChatsItem-active');
	$('.main__chatMessagesBlock').removeClass('main__chatMessagesBlock-active');
	$(this).addClass('main__allChatsItem-active');
	if($(this).hasClass('main__allChatsItem-newMsg')){
		$(this).removeClass('main__allChatsItem-newMsg');
	}
	var objs = document.querySelectorAll('.main__chatMessagesBlock');
	for(var i = 0; i < objs.length; i++){
		if(objs[i].id == this.id){
			objs[i].classList.add('main__chatMessagesBlock-active');
			$('.main__backToChatListBlock').addClass('main__backToChatListBlock-active');
			if (window.innerWidth <= 1024) {
				$('.main__block-chat').show();
				var img = this.querySelector('.main__allChatsImg');
				var imgSrc = $(img).attr("src");;
				$('.main__BackToChatImg').attr("src", imgSrc);
				var name = this.querySelector('.main__allChatsName').innerHTML;
				var name = name.split(' ')[0];
				$('.main__backToChatName').html(name);
			}
			return;
		}
	}
});

$('.main__chatIconCircle').click(function(){
	$(this).toggleClass('main__chatIconCircle-active');
	$('.main__block-currentPage').slideToggle();
});

$('.main__backToChatIcon').click(function(){
	$('.main__block-chat').hide();
	$('.main__backToChatListBlock').removeClass('main__backToChatListBlock-active');
});

containerSize();
window.onresize = function() {
	containerSize();	
}

function containerSize(){
	if (window.innerWidth <= 1024) {
		var width = $('.main__block-allChats').outerWidth();
		$('.main__block-currentPage').outerWidth(width);
		$('.main__block-chat').outerWidth(width);
	}
}