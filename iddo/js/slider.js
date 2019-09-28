var doc = document;

var sliderInit = {
	type: 'opacity',
	folder: 'img/sliderImg',
	amount: '5',
	cyclicality: 'true', //true || false
	sliderAnimation: 'bounceInUp', // animation from animate.css
	imgAnimation: 'fadeIn', //animation from animate.css
	textAnimation: 'fadeInRight', //animation from animate.css
	autoscrolling: 'true', //true || false
	scrollingInterval: '10', //time in seconds
	
	class: 'slider__item',
	imgText: 'slider__itemText',
	dotClass: 'slider__dot',
	dotActive: 'slider__dot-active',
	itemActive: 'slider__item-active',
	btnHidden: 'slider__btn-hidden',
	textWrapper: 'slider__textWrapper'
};

var sliderInitText = {
	0: {
		h1: 'web-design',
		p: 'Web-design is a work of the future'
	},
	1: {
		h1: 'our motto',
		p: 'You create IDEAS, we automate DREAMS'
	},
	2: {
		h1: 'adaptive design',
		p: 'We adapt websites for all kinds of devices'
	},
	3: {
		h1: 'it',
		p: 'IT has many areas'
	},
	4: {
		h1: 'solutions',
		p: 'We can find a solution for everyone'
	},
};

var imgs = [];

var slider = doc.querySelector('.slider');
slider.classList.add('animated');
slider.classList.add(sliderInit.sliderAnimation);

var sliderContent = doc.querySelector('.slider__content');
var leftBtn = doc.querySelector('.slider__btn-left');
var rightBtn = doc.querySelector('.slider__btn-right');

var dots = [];
var dotsBlock = doc.querySelector('.slider__dots');

var position = 0;

for(var i = 0; i < +sliderInit.amount; i++) {
	var item = doc.createElement('div');
	item.classList = sliderInit.class;
	item.id = i;
	
	var img = doc.createElement('img');
	img.src = sliderInit.folder + '/' + i + '.jpg';
	img.classList.add('animated');
	img.classList.add(sliderInit.imgAnimation);
	item.appendChild(img);
	
	var textDiv = doc.createElement('div');
	textDiv.classList = sliderInit.imgText;
	
	var textWrapper = doc.createElement('div');
	textWrapper.classList = sliderInit.textWrapper;
	
	var h1 = doc.createElement('h1');
	h1.innerHTML = sliderInitText[i].h1;
	h1.classList.add('animated');
	h1.classList.add(sliderInit.textAnimation);
	textWrapper.appendChild(h1);
	
	var p = doc.createElement('p');
	p.innerHTML = sliderInitText[i].p;
	p.classList.add('animated');
	p.classList.add(sliderInit.textAnimation);
	textWrapper.appendChild(p);
	
	textDiv.appendChild(textWrapper);
	item.appendChild(textDiv);
	imgs.push(item);
}

for(var i = 0; i < +sliderInit.amount; i++) {
	var dot = doc.createElement('span');
	dot.classList = sliderInit.dotClass;
	dot.id = i;
	dot.onclick = function() {
		position = this.id;
		if(sliderInit.type === 'opacity') imgsOpacity();
		imgsPrint();
		dotsUpdate();
	}
	dots.push(dot);
}

imgsOpacity();
dotsPrint();
imgsPrint();

if(sliderInit.autoscrolling === 'true') {
	var scrollInterval = setInterval(function() {
	if(sliderInit.cyclicality !== 'false')nextSlide();
	}, +sliderInit.scrollingInterval*1000);
}

leftBtn.onclick = function() {
	prevSlide();
}
rightBtn.onclick = function() {
	nextSlide();
}

function imgsPrint() {
	sliderContent.innerHTML = '';
	for(var i = 0; i < imgs.length; i++){
		sliderContent.appendChild(imgs[i]);
	}
}
function dotsPrint() {
	dotsBlock.innerHTML = '';
	for(var i = 0; i < imgs.length; i++){
		dotsBlock.appendChild(dots[i]);
	}
	dotsUpdate();
}
function dotsUpdate() {
	for(var i = 0; i < +sliderInit.amount; i++){
		dots[i].classList.remove(sliderInit.dotActive);
	}
	dots[position].classList.add(sliderInit.dotActive);
}
function prevSlide() {
	if(position != 0){
		position--;
		if(sliderInit.type === 'opacity') imgsOpacity();
	}
	else if(sliderInit.cyclicality === 'true'){
		position = (+sliderInit.amount)-1;
		if(sliderInit.type === 'opacity') imgsOpacity();
	}
	imgsPrint();
	dotsUpdate();
}
function nextSlide() {
	if(position != (+sliderInit.amount)-1){
		position++;
		if(sliderInit.type === 'opacity') imgsOpacity();
	}
	else if(sliderInit.cyclicality === 'true'){
		position = 0;
		if(sliderInit.type === 'opacity') imgsOpacity();
	}
	imgsPrint();
	dotsUpdate();
}
function imgsOpacity() {
	for(var i = 0; i < +sliderInit.amount; i++){
		imgs[i].classList.remove(sliderInit.itemActive);
	}
	imgs[position].classList.add(sliderInit.itemActive);
	
	if(sliderInit.cyclicality === 'false' && position == 0){
		leftBtn.classList.add(sliderInit.btnHidden);
	}
	else if(sliderInit.cyclicality === 'false'){
		leftBtn.classList.remove(sliderInit.btnHidden);
	}
	
	if(sliderInit.cyclicality === 'false' && position == (+sliderInit.amount)-1){
		rightBtn.classList.add(sliderInit.btnHidden);
	}
	else if(sliderInit.cyclicality === 'false'){
		rightBtn.classList.remove(sliderInit.btnHidden);
	}
}