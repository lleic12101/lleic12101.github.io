var doc = document;

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

//inputs
$('.modalPay__input').on('input', function () {
    var $item = $(this),
        value = $item.val();
    if( doc.querySelector('.modalPay__input-name').value.trim() !== "" &&
        doc.querySelector('.modalPay__input-phone').value.trim() !== "" &&
        doc.querySelector('.modalPay__input-mail').value.trim() !== ""){
        $('.button-pay').addClass('button-pay-active');
    }
    if($.trim(value) !== "") $item.removeClass('modalPay__input-error');
});
doc.querySelector('.button-pay').addEventListener("click", function () {
    if(doc.querySelector('.modalPay__input-name').value.trim() === "") {
        $('.modalPay__input-name').addClass("modalPay__input-error");
    } else {
        $('.modalPay__input-name').removeClass("modalPay__input-error");
    }
    if(doc.querySelector('.modalPay__input-phone').value.trim() === "") {
        $('.modalPay__input-phone').addClass("modalPay__input-error");
    } else {
        $('.modalPay__input-phone').removeClass("modalPay__input-error");
    }
    if(doc.querySelector('.modalPay__input-mail').value.trim() === "") {
        $('.modalPay__input-mail').addClass("modalPay__input-error");
    } else {
        $('.modalPay__input-mail').removeClass("modalPay__input-error");
    }
    if( doc.querySelector('.modalPay__input-name').value.trim() !== "" &&
        doc.querySelector('.modalPay__input-phone').value.trim() !== "" &&
        doc.querySelector('.modalPay__input-mail').value.trim() !== ""){
        alert('Письмо со ссылкой на скачивание тренинга отправлена на Ваш e-mail');
    }
});

//input mask
$(document).ready(function(){
    // $('.modalPay__input-phone').inputmask({"mask": "+9{1,2}(999) 999-99-99"}); //specifying options
    $('.modalPay__input-mail').inputmask("*{1,35}@*{1,20}.*{1,10}");
    $('.modalPay__input-phone').inputmask("+9{1}(999) 999-99-99");
    Inputmask({
        mask: "+V{1,2}(999) 999-99-99",
        definitions: {
            "V": {
                validator: "[3,7,8]",
            }
        },
    }).mask('.modalPay__input-phone');
});
