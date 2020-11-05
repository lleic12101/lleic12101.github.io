$(".headerTop__langBtn").click(function () {
    $(".headerTop__langItems").slideToggle();
    $(this).find(".list").toggleClass("headerTop__langIcon-rotated");
});
$(".main__buyControlBtnsBtn").click(function () {
    $(".main__buyControlBtnsBtn").removeClass("main__buyControlBtnsBtn-active");
    $(this).addClass("main__buyControlBtnsBtn-active");

    if ($(this).hasClass("main__buyControlBtnsBtn-pro")) {
        $(".main__buyControlNameType").html("PRO");

        $(".main__buyControlRadioBtns-label1").html(`9 400 <img src="img/icons/rouble.svg" alt="rouble"/>`);
        $(".main__buyControlRadioBtns-label2").html(`17 000 <img src="img/icons/rouble.svg" alt="rouble"/>`);

        $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">Фильтр, состоящий из 3 компонентов</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">Кабель USB Type-C для зарядки</p>
                    </div>`);

        $(".main__buyImgBlockMask").attr("src", "img/main/mask-pro.png");
    } else if ($(this).hasClass("main__buyControlBtnsBtn-basic")) {
        $(".main__buyControlNameType").html("Basic");

        $(".main__buyControlRadioBtns-label1").html(`7 400 <img src="img/icons/rouble.svg" alt="rouble"/>`);
        $(".main__buyControlRadioBtns-label2").html(`14 000 <img src="img/icons/rouble.svg" alt="rouble"/>`);

        $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">Фильтр, состоящий из 3 компонентов</p>
                    </div>`);

        $(".main__buyImgBlockMask").attr("src", "img/main/mask-basic.png");
    } else if ($(this).hasClass("main__buyControlBtnsBtn-lite")) {
        $(".main__buyControlNameType").html("Lite");

        $(".main__buyControlRadioBtns-label1").html(`4 400 <img src="img/icons/rouble.svg" alt="rouble"/>`);
        $(".main__buyControlRadioBtns-label2").html(`7 000 <img src="img/icons/rouble.svg" alt="rouble"/>`);

        $(".main__buyControlList").html(`<div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">3 размера лицевых масок (S, M, L)</p>
                    </div>
                    <div class="main__buyControlListItem">
                        <img src="img/icons/circle.svg" alt="circle" class="main__buyControlListItemIcon"/>
                        <p class="main__buyControlListItemText">1 внешняя LED-маска</p>
                    </div>`);

        $(".main__buyImgBlockMask").attr("src", "img/main/mask-lite.png");
    }
});