$('.main__footerContentBtn').click(function () {
    $('.main__footerContentBtn').removeClass('main__footerContentBtn-active');
    $(this).addClass('main__footerContentBtn-active');

    var id = $(this).attr("id");
    id = id.substr(0, id.length - 3);

    $('.main__footerContentTab').removeClass("main__footerContentTab-active");
    $("#" + id + "tab").addClass("main__footerContentTab-active");
});