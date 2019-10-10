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

$('.main__settingButton').click(function(){
	var blocks = document.querySelectorAll('.main__settingBlock');
	for(var i = 0; i < blocks.length; i++){
		if(blocks[i].id == this.id){
			$('.main__settingsButtonBlock').addClass('main__settingsButtonBlock-disabled');
			blocks[i].classList.add('main__settingBlock-active');
			return;
		}
	}
});
$('.main__settingBlockBackBtn').click(function(){
	$('.main__settingBlock').removeClass('main__settingBlock-active');
	$('.main__settingsButtonBlock').removeClass('main__settingsButtonBlock-disabled');
});

var thatBlock = document.querySelector('.trash');
$('.main__settingColorBlock').click(function(){
	var objs = document.querySelectorAll('#closeablePicker');
	for(var i = 0; i < objs.length; i++){
		if(this.parentNode.parentNode.querySelector('#closeablePicker') != objs[i]) {
			$(objs[i]).hide();
		}
	}
	getThatBlockColor();
	$(this).parent().parent().find('#closeablePicker').slideToggle();
	thatBlock = this;
});

function colorUpdate(){
	var gradientBlock = document.querySelector('.main__settingColorBlock-longGradient');
	var firstPicker = document.querySelector('.main__settingSelectColor1');
	var secondPicker = document.querySelector('.main__settingSelectColor2');
	$(gradientBlock).css({'background-image': 'linear-gradient(90deg,' + firstPicker.style.background + ',' + secondPicker.style.background +')'});
	$(gradientBlock).css({'background-image': '-webkit-linear-gradient(90deg,' + firstPicker.style.background + ',' + secondPicker.style.background +')'});
}

$("#backgroundStyle").on("change",function(){
  var val = $(this).find('option:selected').val();
  var objs = document.querySelectorAll('.main__settingNameAndInputBlock-option');
	for(var i = 0; i < objs.length; i++){
		if(val != objs[i].id) objs[i].classList.add('main__settingNameAndInputBlock-disabled');
		else objs[i].classList.remove('main__settingNameAndInputBlock-disabled');
	}
});

function getThatBlock(){
	colorUpdate();
	return thatBlock;
}
function getThatBlockColor(){
	return thatBlock.style.background;
}

var dropZone = $('.main__settingUploadPhotoForm');
dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
     return false;
});
dropZone.on('dragover dragenter', function() {
     dropZone.addClass('dragover');
});
dropZone.on('dragleave', function(e) {
     dropZone.removeClass('dragover');
});
dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
});
dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
});
$('#file-input').change(function() {
     let files = this.files;
     sendFiles(files);
});

$('.main__settingDesignBtn').click(function(){
	var objs = this.parentNode.querySelectorAll('.main__settingDesignBtn');
	for(var i = 0; i < objs.length; i++){
		if(this.id != i)objs[i].classList.remove('main__settingDesignBtn-active');
		else objs[i].classList.add('main__settingDesignBtn-active')
	}
});

$('.main__settingInstallButton').click(function(){
	var obj = this.querySelector('.main__settingInstallButtonIcon');
	$(obj).toggleClass('main__settingInstallButtonIcon-active');
	$('.main__settingInstallBlock').slideToggle();
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