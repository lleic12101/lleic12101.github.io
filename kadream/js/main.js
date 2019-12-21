$(document).ready(function(){
	
	//slider
    $('.main__slides').slick({
		prevArrow: $('.js-slider-left'),
		nextArrow: $('.js-slider-right'),
		dots: true,
		dotsClass: 'main__sliderDots',
        autoplay: true,
        autoplaySpeed: 4000,
		fade: true,
		cssEase: 'linear',
		speed: 1000,
	});

    //small slider clients
    $('.main__smallSlides').slick({
        prevArrow: $('.js-smallSlider-left'),
        nextArrow: $('.js-smallSlider-right'),
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 3,
                }
            },
		]
    });

    //small slider comments
    $('.main__commentsSmallSlides').slick({
        prevArrow: $('.js-smallSliderComments-left'),
        nextArrow: $('.js-smallSliderComments-right'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
	
	//burger menu
	$('#burger1').click(function(){
		$('.header__mobileMenu').slideToggle();
	});

	//number animation
    var show = true;
    var countbox = ".main__achievementsItems";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.main__achievementsItemNumber').css('opacity', '1');
            $('.main__achievementsItemNumber').spincrement({
                thousandSeparator: "",
                duration: 2500
            });

            show = false;
        }
    });

    //accordeon
    $('.main__plusItemBlock').click(function () {
        if(!$(this).hasClass('active')) {
            $('.main__plusItemBlockText').slideUp();
            $('.main__plusItem-sign').html('+');
            $('.main__plusItemBlock').removeClass('active');

            $(this).find('.main__plusItemBlockText').slideToggle();

            if(!$(this).hasClass('active')){
                $(this).find('.main__plusItem-sign').html('-');
                $(this).addClass('active');
            }
        }
    });
});	

//youtube preloader
'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
	if (!document.getElementsByClassName) {
		// Поддержка IE8
		var getElementsByClassName = function(node, classname) {
			var a = [];
			var re = new RegExp('(^| )'+classname+'( |$)');
			var els = node.getElementsByTagName("*");
			for(var i=0,j=els.length; i<j; i++)
			if(re.test(els[i].className))a.push(els[i]);
			return a;
		}
		var videos = getElementsByClassName(document.body,"youtube");
		} else {
		var videos = document.getElementsByClassName("youtube");
	}
	
	var nb_videos = videos.length;
	for (var i=0; i<nb_videos; i++) {
		// Находим постер для видео, зная ID нашего видео
		videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
		
		// Размещаем над постером кнопку Play, чтобы создать эффект плеера
		var play = document.createElement("div");
		play.setAttribute("class","play");
		videos[i].appendChild(play);
		
		videos[i].onclick = function() {
			// Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
			var iframe = document.createElement("iframe");
			var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
			if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
			iframe.setAttribute("src",iframe_url);
			iframe.setAttribute("frameborder",'0');
			iframe.setAttribute("allowfullscreen",'');
			
			// Высота и ширина iFrame будет как у элемента-родителя
			//iframe.style.width  = this.style.width;
			//iframe.style.height = this.style.height;
			$(iframe).addClass('youtube');
			
			// Заменяем начальное изображение (постер) на iFrame
			this.parentNode.replaceChild(iframe, this);
		}
	}
});