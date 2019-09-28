var doc = document;

var nextBtns = doc.querySelectorAll('.block__mapNext');
var prevBtns = doc.querySelectorAll('.block__mapPrev');
var slides = doc.querySelectorAll('.wrapper__city');

calculateSize();
calculateWidth();
var currCity = null;
var aboutStatus = false;

$(nextBtns).click(function(){
	if(+(this.parentNode.parentNode.parentNode.id)+1 <= slides.length){
		printSlide(+(this.parentNode.parentNode.parentNode.id)+1);
	} else printSlide(1);
});
$(prevBtns).click(function(){
	if(+(this.parentNode.parentNode.parentNode.id)-1 >= 1){
		printSlide(+(this.parentNode.parentNode.parentNode.id)-1);
	} else printSlide(+slides.length);
});

$('.aboutBtn').click(function(){
	if(aboutStatus === false){
		$('.wrapper__about').addClass('wrapper-aboutEnabled');
		$('.wrapper__map').removeClass('wrapper-enabled');
		var cities = doc.querySelectorAll('.wrapper__city');
		for(var i = 0; i < cities.length; i++){
			if ($(cities[i]).hasClass('wrapper-enabled')){
				currCity = $(cities[i]).attr('id');
				printSlide(null);
				aboutStatus = true;
				return;
			}
		}
		currCity = null;
		aboutStatus = true;
		} else {
		if(currCity != null){
			printSlide(currCity);
			setTimeout(function(){
				$('.wrapper__map').addClass('wrapper-enabled');
			}, 1000)
			} else {
			printSlide(currCity);
			$('.wrapper__map').addClass('wrapper-enabled');
		}
		$('.wrapper__about').removeClass('wrapper-aboutEnabled');
		aboutStatus = false;
	}
});
$('.about__closeBtn').click(function(){
	if(currCity != null){
		printSlide(currCity);
		setTimeout(function(){
			$('.wrapper__map').addClass('wrapper-enabled');
		}, 1000)
		} else {
		printSlide(currCity);
		$('.wrapper__map').addClass('wrapper-enabled');
	}
	$('.wrapper__about').removeClass('wrapper-aboutEnabled');
});

$('.header__menuClose').click(function(){
	$('.header__menuBtn').toggleClass('wrapper-disabled');
	$('.header__menuClose').toggleClass('wrapper-disabled');
	$('.header__mobile').slideToggle();
});
$('.header__menuBtn').click(function(){
	$('.header__menuBtn').toggleClass('wrapper-disabled');
	$('.header__menuClose').toggleClass('wrapper-disabled');
	$('.header__mobile').slideToggle();
});

$('.main__podoroz').click(function(){
	$('.wrapper__map').addClass('wrapper-enabled');
	$('.header__logoName').addClass('wrapper-enabled');
	$('.header__ukrLogo').addClass('wrapper-enabled');
	$('.wrapper').addClass('wrapper-disabled');
	
	$('.main').addClass('main-map');
	$('.header').addClass('header-map');
	$('.header__icons').addClass('header__icons-map');
	$('.header__ukrLogo').addClass('header__ukrLogo-map');
});

$('.block__mapClose').click(function(){
	$('.wrapper__map').removeClass('wrapper-opacityZero');
	var obj = $(this).parent().parent().parent();
	setTimeout(function(){
		$(obj).addClass('fadeOut');
		$(obj).removeClass('fadeIn');
		setTimeout(function(){
			$(obj).removeClass('wrapper-enabled');
			$(obj).removeClass('fadeOut');
			$(obj).addClass('fadeIn');
		}, 1000)
	}, 1);
});

$('.map__cityName-kyiv').hover(
	function(){
		$('.map__cityIcon-kyiv').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kyiv').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-lybni').hover(
	function(){
		$('.map__cityIcon-lybni').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-lybni').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-romodan').hover(
	function(){
		$('.map__cityIcon-romodan').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-romodan').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-kybynci').hover(
	function(){
		$('.map__cityIcon-kybynci').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kybynci').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-mirgorod').hover(
	function(){
		$('.map__cityIcon-mirgorod').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-mirgorod').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-garkyshinci').hover(
	function(){
		$('.map__cityIcon-garkyshinci').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-garkyshinci').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-poltava').hover(
	function(){
		$('.map__cityIcon-poltava').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-poltava').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-kharkiv').hover(
	function(){
		$('.map__cityIcon-kharkiv').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kharkiv').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-butenki').hover(
	function(){
		$('.map__cityIcon-butenki').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-butenki').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-kremenchuk').hover(
	function(){
		$('.map__cityIcon-kremenchuk').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kremenchuk').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-loxvica').hover(
	function(){
		$('.map__cityIcon-loxvica').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-loxvica').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-mlini').hover(
	function(){
		$('.map__cityIcon-mlini').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-mlini').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-romni').hover(
	function(){
		$('.map__cityIcon-romni').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-romni').removeClass('wrapper-opacityOne');
	}	
);
$('.map__cityName-baxmach').hover(
	function(){
		$('.map__cityIcon-baxmach').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-baxmach').removeClass('wrapper-opacityOne');
	}	
);

$('.map__button-kyiv').hover(
	function(){
		$('.map__cityIcon-kyiv').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kyiv').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-lybni').hover(
	function(){
		$('.map__cityIcon-lybni').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-lybni').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-romodan').hover(
	function(){
		$('.map__cityIcon-romodan').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-romodan').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-kybynci').hover(
	function(){
		$('.map__cityIcon-kybynci').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kybynci').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-mirgorod').hover(
	function(){
		$('.map__cityIcon-mirgorod').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-mirgorod').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-garkyshinci').hover(
	function(){
		$('.map__cityIcon-garkyshinci').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-garkyshinci').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-poltava').hover(
	function(){
		$('.map__cityIcon-poltava').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-poltava').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-kharkiv').hover(
	function(){
		$('.map__cityIcon-kharkiv').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kharkiv').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-butenki').hover(
	function(){
		$('.map__cityIcon-butenki').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-butenki').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-kobelyaki').hover(
	function(){
		$('.map__cityIcon-butenki').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-butenki').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-kremenchuk').hover(
	function(){
		$('.map__cityIcon-kremenchuk').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kremenchuk').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-krykiv').hover(
	function(){
		$('.map__cityIcon-kremenchuk').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-kremenchuk').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-loxvica').hover(
	function(){
		$('.map__cityIcon-loxvica').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-loxvica').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-mlini').hover(
	function(){
		$('.map__cityIcon-mlini').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-mlini').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-pisky').hover(
	function(){
		$('.map__cityIcon-mlini').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-mlini').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-romni').hover(
	function(){
		$('.map__cityIcon-romni').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-romni').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-zasylya').hover(
	function(){
		$('.map__cityIcon-romni').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-romni').removeClass('wrapper-opacityOne');
	}	
);
$('.map__button-baxmach').hover(
	function(){
		$('.map__cityIcon-baxmach').addClass('wrapper-opacityOne');
		}, function(){
		$('.map__cityIcon-baxmach').removeClass('wrapper-opacityOne');
	}	
);

$('.map__button-kyiv').click(function(){
	$('.wrapper__city-kyiv').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-kyiv').click(function(){
	$('.wrapper__city-kyiv').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-lybni').click(function(){
	$('.wrapper__city-lybni').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-lybni').click(function(){
	$('.wrapper__city-lybni').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-romodan').click(function(){
	$('.wrapper__city-romodan').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-romodan').click(function(){
	$('.wrapper__city-romodan').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-kybynci').click(function(){
	$('.wrapper__city-kybynci').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-kybynci').click(function(){
	$('.wrapper__city-kybynci').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-mirgorod').click(function(){
	$('.wrapper__city-mirgorod').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-mirgorod').click(function(){
	$('.wrapper__city-mirgorod').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-garkyshinci').click(function(){
	$('.wrapper__city-garkyshinci').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-garkyshinci').click(function(){
	$('.wrapper__city-garkyshinci').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-poltava').click(function(){
	$('.wrapper__city-poltava').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-poltava').click(function(){
	$('.wrapper__city-poltava').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-kharkiv').click(function(){
	$('.wrapper__city-kharkiv').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-kharkiv').click(function(){
	$('.wrapper__city-kharkiv').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-butenki').click(function(){
	$('.wrapper__city-butenki').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-kobelyaki').click(function(){
	$('.wrapper__city-butenki').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-butenki').click(function(){
	$('.wrapper__city-butenki').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-kremenchuk').click(function(){
	$('.wrapper__city-kremenchuk').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-krykiv').click(function(){
	$('.wrapper__city-kremenchuk').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-kremenchuk').click(function(){
	$('.wrapper__city-kremenchuk').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-loxvica').click(function(){
	$('.wrapper__city-loxvica').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-loxvica').click(function(){
	$('.wrapper__city-loxvica').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-mlini').click(function(){
	$('.wrapper__city-mlini').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-pisky').click(function(){
	$('.wrapper__city-mlini').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-mlini').click(function(){
	$('.wrapper__city-mlini').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-romni').click(function(){
	$('.wrapper__city-romni').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-zasylya').click(function(){
	$('.wrapper__city-romni').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-romni').click(function(){
	$('.wrapper__city-romni').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__button-baxmach').click(function(){
	$('.wrapper__city-baxmach').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});
$('.map__cityName-baxmach').click(function(){
	$('.wrapper__city-baxmach').addClass('wrapper-enabled');
	setTimeout(function(){
		$('.wrapper__map').addClass('wrapper-opacityZero');
	}, 1000)
});

$(window).resize(function(){
	calculateSize();
	calculateWidth()
});

function calculateSize(){
	if($(window).width() > 800) $('.block__infoContent').height($(window).height() - $('.header').height() - 221);
}
function calculateWidth(){
	if($(window).width() > 800)	$('.block__map').width($(window).width() - 300);
	else $('.block__map').width($(window).width());
}

function printSlide(pos) {
	calculateSize();
	calculateWidth()
	for(var i = 0; i < slides.length; i++) {
		if(slides[i].id == pos) $(slides[i]).addClass('wrapper-enabled');
		else $(slides[i]).removeClass('wrapper-enabled');
	}
}