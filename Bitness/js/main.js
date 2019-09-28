var doc = document;
var header = doc.querySelector('.bitness__header');

var menuList = doc.querySelector('.bitness__navBar');
var toggleBtn = doc.querySelector('.bitness__navBarToggleBtn');

doc.onscroll = function() {
	var headerPos = scrollTop(header);
	
	if(headerPos > 100) {
		header.classList.add('bitness__header-scrolled');
	} else {
		header.classList.remove('bitness__header-scrolled');
	}
}

toggleBtn.onclick = function() {
	menuList.classList.toggle('bitness__navBar-active');
	toggleBtn.classList.toggle('bitness__navBarToggleBtn-open');
}

function scrollTop(el) {
	return el.getBoundingClientRect().top + pageYOffset;
}
