var doc = document;

//Cabinet ways tabs
var waysBtn = doc.querySelectorAll('.main__contentWayHover');
for(var i = 0; i < waysBtn.length; i++) {
    waysBtn[i].addEventListener("click", function () {
        $('.main__contentWay').removeClass('main__contentWay-active');
        $(this).parent().addClass('main__contentWay-active');
        var id = this.parentNode.id.substr(0, this.parentNode.id.length - 3);
        $('.main__contentWayContent').removeClass('main__contentWayContent-active');
        $('#'+id).addClass('main__contentWayContent-active');
    });
}

//Mail tabs
var mailsBtn = doc.querySelectorAll('.main__mailButtonBlockBlock');
for(var i = 0; i < mailsBtn.length; i++) {
    mailsBtn[i].addEventListener("click", function () {
        $('.main__mailButtonBlock').removeClass('main__mailButtonBlock-active');
        $(this).parent().parent().addClass('main__mailButtonBlock-active');
        var id = this.parentNode.parentNode.id.substr(0, this.parentNode.parentNode.id.length - 3);
        $('.main__mailTab').removeClass('main__mailTab-active');
        $('#'+id).addClass('main__mailTab-active');
    });
}

//Burger menu
doc.querySelector('.hamburger').addEventListener("click", function () {
   $('.main__asideItemsSlideBlock').slideToggle();
});

//Team scroll for id
var scroll = doc.querySelector('.main__teamIdItems');
if(scroll != null) {
    $('.main__teamIdItems').overlayScrollbars({});
}

//Statistic buttons
var statisticBtns = doc.querySelectorAll('.main__statisticBtnBlock');
for(var i = 0; i < statisticBtns.length; i++) {
    statisticBtns[i].addEventListener("click", function () {
       $(this).toggleClass("main__statisticBtnBlock-active");
    });
}