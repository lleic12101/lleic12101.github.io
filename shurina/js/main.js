$('.video').click(function(){
	var modalContent  = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/laeovvkWX5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	var modalBtn = document.createElement('p');
	modalBtn.classList.add('closeModalBtn');
	modalBtn.innerHTML = '<i class="fas fa-times"></i>';
	$(modalBtn).click(function(){
		$('.modal__content').html('');
		toggleModal();
	});Что
	$('.modal__content').html(modalContent);
	$('.modal__content').append(modalBtn);
	toggleModal();
});
$('.closeModalBtn').click(function(){
	$('.modal__content').html('');
	toggleModal();
});
	
$('.js-countdown-day').countdown('2030/08/20').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span class="countdown__value">%H</span>'
    + '<span class="countdown__sign">:</span>'
    + '<span class="countdown__value">%M</span>'
    + '<span class="countdown__sign">:</span>'
    + '<span class="countdown__value">%S</span>'));
});

$('.js-countdown-month').countdown('2019/08/20', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span class="countdown__value">%D</span>'
    + '<span class="countdown__sign">:</span>'
    + '<span class="countdown__value">%H</span>'
    + '<span class="countdown__sign">:</span>'
    + '<span class="countdown__value">%M</span>'
    + '<span class="countdown__sign">:</span>'
    + '<span class="countdown__value">%S</span>'));
});

(function () {
    var header = $('.js-header'),
        burger = $('.js-header-burger'),
        wrap = $('.js-header-wrap'),
        bg = $('.js-header-bg'),
        link = $('.js-header-link'),
        html = $('html'),
        body = $('body');
    burger.on('click', function () {
        burger.toggleClass('active');
        wrap.toggleClass('visible');
        html.toggleClass('no-scroll');
        body.toggleClass('no-scroll');
        bg.toggleClass('show');
    });
    bg.on('click', function () {
        burger.removeClass('active');
        wrap.removeClass('visible');
        html.removeClass('no-scroll');
        body.removeClass('no-scroll');
        bg.removeClass('show');
    });
    link.on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
        burger.removeClass('active');
        wrap.removeClass('visible');
        html.removeClass('no-scroll');
        body.removeClass('no-scroll');
        bg.removeClass('show');
    });
})();

var modal = document.querySelector('.modal');

function toggleModal() {
	modal.classList.toggle('show-modal');
}
function windowOnClick(event) {
	if (event.target === modal) {
        toggleModal();
		$('.modal__content').html('');
	}
}

window.addEventListener("click", windowOnClick);