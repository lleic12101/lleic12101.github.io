$(window).on('load', function () {
		if ( $(window).width() > 767 ) {
		$('.main__block').overlayScrollbars({});

		var check = false;
		var numCheck = 0;
		
		var mainBlockName = ".main__block";
		if($('.main').hasClass("os-host") == true) mainBlockName = ".main";
		
		$("body").mousemove(function(e) {
			if( $(e.target).attr("class") != "preloader__gif" &&
				$(e.target).attr("class") != "preloader" &&
				numCheck == 0) {
				if(!$($(e.target)[0]).parent().html().includes("class=") != true && numCheck == 0) {
					if($('.os-content').find("." + $(e.target).attr("class").split(' ')).length > 0 ||
						$(e.target).attr("class") == "os-content"){
						check = false;
					} else {
						check = true;
					}
				} else {
					check = false;
				}
				numCheck++;
			}
		})
		document.querySelector('.main__block').onmouseenter = function() { check = false; }
		document.querySelector('.main__block').onmouseleave = function() { check = true; }
		document.addEventListener("wheel", function (e) {
			if(check == true) {
				var numToScroll = e.deltaY / 1.3;
				$(mainBlockName).overlayScrollbars().scroll({ y : "+= " + numToScroll +"px"  });
			}
		});
	}
});
$('.main__partnersStatisticTableWrapper').overlayScrollbars({});
$('.main-login').overlayScrollbars({});

// if ( $(window).width() < 951 ) {
// 	$('.main__partnersInfoRangTable').overlayScrollbars({});
// }

$('.hamburger').click(function () {
	$('.aside__toggleWrapper').slideToggle();
});

$('.main__materialTabsBtn').click(function () {
	$('.main__materialTabsBtn').removeClass('main__materialTabsBtn-active');
	$(this).addClass('main__materialTabsBtn-active');
	
	$('.main__materialTab').removeClass('main__materialTab-active');
	$('.main__block-materials').find('#' + this.id).addClass('main__materialTab-active');
});

function checkTab1(){
    $('#investTab').hide();
    $('#refTab').hide();
	$('#mainTab').show();
}
function checkTab2(){
    $('#refTab').hide();
    $('#mainTab').hide();
    $('#investTab').show();
}
function checkTab3(){
    $('#investTab').hide();
    $('#mainTab').hide();
    $('#refTab').show();
}