var doc = document;

//Scroll To obj
if (document.documentElement.clientWidth > 556) {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var scrollTo = ($('main').offset().top + 72)*-1;
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        scrollTo += top;
        $('body,html').animate({ scrollTop: scrollTo }, 1500);
    });
} else {
    link = $('.js-scroll-link');
    link.on('click', function () {
        var scrollTo = ($('main').offset().top + 48)*-1;
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        scrollTo += top;
        $('.checkbox2').prop('checked', false);
        $('.header__animateBlock').slideUp();
        $('.header__closebleMask').hide();
        $('body,html').animate({ scrollTop: scrollTo }, 1500);
    });
}


//Modal pay
var modalPay = doc.querySelector('.modalPay');
function toggleModalPay() {
    modalPay.classList.toggle('show-modalPay');
}
function windowOnClickPay(event) {
    if (event.target === modalPay) {
        toggleModalPay();
    }
}
window.addEventListener("click", windowOnClickPay);
var btns = doc.querySelectorAll('.button');
for(var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener("click", function () {
        toggleModalPay();
    });
}
doc.querySelector('.modalPay__close').addEventListener("click", function () {
    toggleModalPay();
});


//Modal program
var modalProgram = document.querySelector('.modalProgram');
function toggleModalProgram() {
    modalProgram.classList.toggle('show-modalProgram');
}
function windowOnClickProgram(event) {
    if (event.target === modalProgram) {
        toggleModalProgram();
    }
}
window.addEventListener("click", windowOnClickProgram);
var moreBtns = doc.querySelectorAll('.main__programItemMore');
var trainingPrograms = doc.querySelectorAll('.modalProgramItem');
var container = doc.querySelector('.modalProgram__contentData');
for(var i = 0; i < trainingPrograms.length; i++)
{
    moreBtns[i].addEventListener("click", function () {
        container.innerHTML = trainingPrograms[this.id].innerHTML;
        toggleModalProgram();
    });
}
doc.querySelector('.modalProgram__close').addEventListener("click", function () {
    toggleModalProgram();
});


//OverlayScrollbars
$('.modalProgram__content').overlayScrollbars({ }).overlayScrollbars(); ;


//input mail
doc.querySelector('.modalPay__input').addEventListener("input", function () {
    if((this.value.indexOf('@') + 1) !== 0){
        $('.button-pay').addClass('button-pay-active');
    } else {
        $('.button-pay').removeClass('button-pay-active');
    }
    if(doc.querySelector('.modalPay__input').value.trim() !== "") {
        $('.modalPay__input').removeClass("modalPay__input-error");
    }
});
doc.querySelector('.button-pay').addEventListener("click", function () {
   if(doc.querySelector('.modalPay__input').value.trim() === "") {
       $('.modalPay__input').addClass("modalPay__input-error");
   } else {
       $('.modalPay__input').removeClass("modalPay__input-error");
   }
});


//hamburger
doc.querySelector('.hamburger').addEventListener("click",function () {
    $('.header__closebleMask').toggle();
    $('.header__animateBlock').slideToggle();
});
doc.querySelector('.header__closebleMask').addEventListener("click", function () {
    $('.checkbox2').prop('checked', false);
    $('.header__animateBlock').slideUp();
    $('.header__closebleMask').hide();
});
