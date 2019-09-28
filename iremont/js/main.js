var doc = document;

var inputs = doc.querySelectorAll('.remont__input');
var inputsBlock = doc.querySelectorAll('.remont__inputBlock');

var modalThanks = doc.querySelector('.modalThanks');
var modalIMEI = doc.querySelector('.modalIMEI');
var modalModel = doc.querySelector('.modalModel');

var counter = 0;

$('.remont__buttonNext').click(function(){
	if(counter === 0) {
		if((inputs[0].value).trim() === ''){
			$(inputs[0]).parent().addClass('swing');
			setTimeout(function(){
				$(inputs[0]).parent().removeClass('swing');
			}, 700)
			return;
		}
		$('.remont__closedBlock1').slideDown();
		counter++;
		} else if (counter === 1) {
		var checkEmpty = false;
		for(var i = 0; i < 4; i++){
			if((inputs[i].value).trim() === '') {
				$(inputs[i]).parent().addClass('swing');
				setTimeout(function(){
					$(inputs[i]).parent().removeClass('swing');
				}, 700)
				checkEmpty = true;
			}
		}
		setTimeout(function(){
			for(var i = 0; i < 4; i++){
				$(inputs[i]).parent().removeClass('swing');
			}
		}, 700)
		if(checkEmpty === true) return;
		$('.remont__closedBlock1').slideUp();
		$('.remont__closedBlock2').slideDown();
		$('.remont__mobKind').html('Здравствуйте, ' + inputs[1].value + '!' + '<br>' +
			'Какое Apple устройство желаете' + '<br>' +
		'отремонтировать?');
		counter++;
		} else if (counter === 2) {
		if((inputs[0].value).trim() === '') {
			$(inputs[0]).parent().addClass('swing');
			setTimeout(function(){
				$(inputs[0]).parent().removeClass('swing');
			}, 700)
			return;
		}
		if((inputs[4].value).trim() === '') {
			$(inputs[4]).parent().addClass('swing');
			setTimeout(function(){
				$(inputs[4]).parent().removeClass('swing');
			}, 700)
			return;
		}
		$('.remont__mobKind').slideUp();
		for(var i = 0; i < inputsBlock.length; i++){
			inputsBlock[i].classList.add('remont__inputBlock-margin');
		}
		$('.remont__buttonPrev').addClass('remont__buttonPrev-margin');
		$('.remont__closedBlock3').slideDown();
		$('#imeiBtn').slideUp();
		$('#imeiText').slideUp();
		counter++;
		} else if (counter === 3) {
		if((inputs[0].value).trim() === ''){
			$(inputs[0]).parent().addClass('swing');
			setTimeout(function(){
				$(inputs[0]).parent().removeClass('swing');
			}, 700)
			return;
		}
		if((inputs[4].value).trim() === ''){
			$(inputs[4]).parent().addClass('swing');
			setTimeout(function(){
				$(inputs[4]).parent().removeClass('swing');
			}, 700)
			return;
		}
		if((inputs[5].value).trim() === '') {
			$(inputs[5]).parent().addClass('swing');
			setTimeout(function(){
				$(inputs[5]).parent().removeClass('swing');
			}, 700)
			return;
		}
		$('.remont__closedBlock3').slideUp();
		$('.remont__buttonNext').slideUp();
		$('.remont__buttonPrev').slideUp();
		$('.remont__closedBlock4').slideDown();
		$('#lockP').removeClass('remont__inputBlock-margin');
	}
});

$('.remont__buttonPrev').click(function(){
	if (counter === 2) {
		$('.remont__closedBlock2').slideUp();
		$('.remont__closedBlock1').slideDown();
		counter--;
		} else if (counter === 3) {
		$('.remont__closedBlock3').slideUp();
		for(var i = 0; i < inputsBlock.length; i++){
			inputsBlock[i].classList.remove('remont__inputBlock-margin');
		}
		$('.remont__buttonPrev').removeClass('remont__buttonPrev-margin');
		$('.remont__mobKind').slideDown();
		$('.remont__closedBlock2').slideDown();
		$('#imeiBtn').slideDown();
		$('#imeiText').slideDown();
		counter--;
	}
});

$('.remont__rulesButton').click(function(){
	var checkEmpty = false;
	var box = doc.querySelector('.checkbox');
	if(!box.checked){
		$('.remont__rulesCheckbox').addClass('swing');
		setTimeout(function(){
			$('.remont__rulesCheckbox').removeClass('swing');
		}, 700)
			console.log('gala');
		checkEmpty = true;
	}
	if(($('.remont__inputLock').val()).trim() === ''){
		$('#lockP').addClass('swing');
		setTimeout(function(){
			$('#lockP').removeClass('swing');
		}, 700)
		console.log('пустл');
		checkEmpty = true;
	} 
	if(($('.remont__problemText').val()).trim() === '') {
		$('.remont__problemText').addClass('swing');
		setTimeout(function(){
			$('.remont__problemText').removeClass('swing');
		}, 700)
		console.log('area');
		checkEmpty = true;
	}
	if(checkEmpty === true) return;
	toggleModalThanks();
});

$('#imeiBtn').click(function(){
	toggleModalIMEI();
});

$('#modelBtn').click(function(){
	toggleModalModel();
});

function toggleModalThanks() {
	modalThanks.classList.toggle('show-modalThanks');
}
function toggleModalIMEI() {
	modalIMEI.classList.toggle('show-modalIMEI');
}
function toggleModalModel() {
	modalModel.classList.toggle('show-modalModel');
}
function windowOnClick(event) {
	if (event.target === modalThanks) {
        toggleModalThanks();
	}
	if (event.target === modalIMEI) {
        toggleModalIMEI();
	}
	if (event.target === modalModel) {
        toggleModalModel();
	}
}

window.addEventListener("click", windowOnClick);		