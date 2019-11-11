$('.video').click(function(){
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
	}
}

window.addEventListener("click", windowOnClick);