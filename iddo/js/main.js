var doc = document;

var toggleBtn = doc.querySelector('#headerMenu__toggleBtn');
var menuList = doc.querySelector('#headerMenu__list');
var headerHeight = doc.querySelector('#menuBlock__height');

var callBtn = doc.querySelector('.requestACall__button');
var callWindow = doc.querySelector('.requestACall__window');
var sendBtn = doc.querySelector('.requestACall__window-button');

var iconPhone = doc.querySelector('.requestACall__button-iconPhone');
var iconClose = doc.querySelector('.requestACall__button-iconClose');
var requestText = doc.querySelector('.requestACall__button-text');
var closeText = doc.querySelector('.requestACall__button-textClose');

var requestReminder = doc.querySelector('.requestACall__reminder');

var requestThanks = doc.querySelector('.requestACall__thanks');
var requestThanksCloseBtn = doc.querySelector('.requestACall__thanksCloseBtn');
var thanksTimeout;

var submitBtn = doc.querySelector('.contactUsBlock__submit');
var emptyLine = false;

var contactUsThanksBlock = doc.querySelector('.contactUsBlock__thanksBlock');
var contactUsThanksCloseBtn = doc.querySelector('.contactUsBlock__thanksCloseBtn');

var allBtn = doc.querySelector('.ourWorksBlock__btn-all');
var websiteBtn = doc.querySelector('.ourWorksBlock__btn-website');
var storeBtn = doc.querySelector('.ourWorksBlock__btn-store');

var ourWorksBlock = doc.querySelector('.ourWorksBlock__containers');
var ourWorks = doc.querySelectorAll('.ourWorksBlock__container'); 
var sortedArr = [];

var header = doc.querySelector('.menuBlock');

new WOW().init();

var buttons = doc.querySelectorAll('.ourSkillsBlock__button-div');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function() {
			buttonOpen(this);
		};
		buttons[i].id = i;
	}

worksPrint(ourWorks);	
	
setInterval(function() {
	requestReminder.classList.add('fadeInRight');
	requestReminder.classList.remove('fadeOutRight');
	requestReminder.classList.toggle('requestACall__reminder-active');
	setTimeout(function() {
		requestReminder.classList.remove('fadeInRight');
		requestReminder.classList.add('fadeOutRight');
		setTimeout(function() {
			requestReminder.classList.toggle('requestACall__reminder-active');
		}, 1000)
	}, 10000)
}, 60000)

toggleBtn.onclick = function() {
	menuList.classList.toggle('headerMenu__list-active');
	toggleBtn.classList.toggle('headerMenu__toggleBtn-open');
	headerHeight.classList.toggle('menuBlock__height-open');
}
callBtn.onclick = function() {
	requestReminder.classList.remove('requestACall__reminder-active');
	callWindow.classList.toggle('requestACall__window-active');
	iconPhone.classList.toggle('requestACall__button-invisible');
	iconClose.classList.toggle('requestACall__button-visible');
	requestText.classList.toggle('requestACall__button-invisible');
	closeText.classList.toggle('requestACall__button-visible');
}
sendBtn.onclick = function(e) {
	e.preventDefault();
	var emptyLine = false;
	var textareas = doc.querySelectorAll('.requestACall__window-textarea');
	for(var i = 0; i < textareas.length; i++) {
		textareas[i].classList.remove('requestACall__window-textarea-emptyLine');
		if((textareas[i].value).trim() == '') {
			emptyLine = true;
			textareas[i].classList.add('requestACall__window-textarea-emptyLine');
		}
	}
	if(emptyLine == true) return; 
	for(var i = 0; i < textareas.length; i++) {
		textareas[i].value = '';
	}
	callWindow.classList.toggle('requestACall__window-active');
	requestThanks.classList.add('fadeIn');
	requestThanks.classList.remove('fadeOut');
	requestThanks.classList.toggle('requestACall__thanks-active');
	thanksTimeout = setTimeout(function() {
		requestThanks.classList.remove('fadeIn');
		requestThanks.classList.add('fadeOut');
		setTimeout(function() {
			requestThanks.classList.toggle('requestACall__thanks-active');
		}, 1000)
	}, 4000)
	iconPhone.classList.toggle('requestACall__button-invisible');
	iconClose.classList.toggle('requestACall__button-visible');
	requestText.classList.toggle('requestACall__button-invisible');
	closeText.classList.toggle('requestACall__button-visible');
}
submitBtn.onclick = function(e) {
	e.preventDefault();
	emptyLine = false;
	var inputEmail = doc.querySelector('.contactUsBlock__input-email');
	var inputName = doc.querySelector('.contactUsBlock__input-name');
	var inputMessage = doc.querySelector('.contactUsBlock__message');
	inputEmail.classList.remove('contactUsBlock__emptyLine');
	inputName.classList.remove('contactUsBlock__emptyLine');
	inputMessage.classList.remove('contactUsBlock__emptyLine');
	if((inputEmail.value).trim() == '') {
		emptyLine = true;
		inputEmail.classList.add('contactUsBlock__emptyLine');
	} 
	if((inputName.value).trim() == '') {
		emptyLine = true;
		inputName.classList.add('contactUsBlock__emptyLine');
	} 
	if((inputMessage.value).trim() == '') {
		emptyLine = true;
		inputMessage.classList.add('contactUsBlock__emptyLine');
	} 
	if(emptyLine === true) { 
		return;
	}
	inputEmail.value = '';
	inputName.value = '';
	inputMessage.value = '';
	contactUsThanksBlock.classList.remove('fadeOut');
	contactUsThanksBlock.classList.add('fadeIn');
	contactUsThanksBlock.classList.toggle('contactUsBlock__thanksBlock-active');
	setTimeout(function() {
		contactUsThanksBlock.classList.remove('fadeIn');
		contactUsThanksBlock.classList.add('fadeOut');
		setTimeout(function() {
			contactUsThanksBlock.classList.toggle('contactUsBlock__thanksBlock-active');
		}, 1000)
	}, 4000)
}
contactUsThanksCloseBtn.onclick = function() {
	contactUsThanksBlock.classList.toggle('contactUsBlock__thanksBlock-active');
}
requestThanksCloseBtn.onclick = function() {
	requestThanks.classList.toggle('requestACall__thanks-active');
	clearTimeout(thanksTimeout);
}

allBtn.onclick = function() {
	allBtn.classList.add('ourWorksBlock__btn-active');
	websiteBtn.classList.remove('ourWorksBlock__btn-active');
	storeBtn.classList.remove('ourWorksBlock__btn-active');
	worksPrint(ourWorks);
}
websiteBtn.onclick = function() {
	allBtn.classList.remove('ourWorksBlock__btn-active');
	websiteBtn.classList.add('ourWorksBlock__btn-active');
	storeBtn.classList.remove('ourWorksBlock__btn-active');
	worksBtnCheck(this);
}
storeBtn.onclick = function() {
	allBtn.classList.remove('ourWorksBlock__btn-active');
	websiteBtn.classList.remove('ourWorksBlock__btn-active');
	storeBtn.classList.add('ourWorksBlock__btn-active');
	worksBtnCheck(this);
}
doc.onscroll = function() {
	var headerPos = scrollTop(header);
	
	if(headerPos > 100) {
		header.classList.add('menuBlock__scrolled');
	} else {
		header.classList.remove('menuBlock__scrolled');
	}
	console.log('scrol');
	console.log(pageYOffset);
}

function scrollTop(el) {
	return el.getBoundingClientRect().top + pageYOffset;
}
function buttonOpen(i) {
	for(var j = 0; j < buttons.length; j++) {
		buttons[j].querySelector('.ourSkillsBlock__list-text').classList = 'ourSkillsBlock__list-text';
		buttons[j].querySelector('.ourSkillsBlock__button-icon').classList = 'ourSkillsBlock__button-icon';	
		buttons[j].querySelector('.ourSkillsBlock__button-text').classList = 'ourSkillsBlock__button-text';	
		buttons[j].querySelector('.ourSkillsBlock__button-sign-plus').classList = 'ourSkillsBlock__button-sign-plus';	
		buttons[j].querySelector('.ourSkillsBlock__button-sign-minus').classList = 'ourSkillsBlock__button-sign-minus';	
	}
	buttons[i.id].querySelector('.ourSkillsBlock__list-text').classList.toggle('ourSkillsBlock__list-text-open');
	buttons[i.id].querySelector('.ourSkillsBlock__button-icon').classList.toggle('ourSkillsBlock__list-button-color');
	buttons[i.id].querySelector('.ourSkillsBlock__button-text').classList.toggle('ourSkillsBlock__list-button-color');
	buttons[i.id].querySelector('.ourSkillsBlock__button-sign-plus').classList.toggle('ourSkillsBlock__button-sign-plus-none');
	buttons[i.id].querySelector('.ourSkillsBlock__button-sign-minus').classList.toggle('ourSkillsBlock__button-sign-minus-block');
	buttons[i.id].querySelector('.ourSkillsBlock__button-sign-minus').classList.toggle('ourSkillsBlock__list-button-color');
}
function worksPrint(arr) {
	ourWorksBlock.innerHTML = '';
	for(var i = 0; i < arr.length; i++) {
		ourWorksBlock.appendChild(arr[i]);
	}
}
function worksBtnCheck(it) {
	sortedArr = [];
	var btnAttribute = it.getAttribute('data-type');
	for(var i = 0; i < ourWorks.length; i++) {
		var workAttribute = ourWorks[i].getAttribute('data-type');
		if(btnAttribute === workAttribute) sortedArr.push(ourWorks[i]);
	}
	worksPrint(sortedArr);
}