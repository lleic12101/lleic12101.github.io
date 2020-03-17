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

//Burger menu
doc.querySelector('.hamburger').addEventListener("click", function () {
   $('.main__asideItemsSlideBlock').slideToggle();
});
