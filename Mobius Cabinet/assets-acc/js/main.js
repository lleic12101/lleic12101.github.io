content_size();
register_size()

window.onload = function () {
    content_size();
    register_size();
};

$(window).resize(function () {
    content_size();
    register_size()
});

// register block
function register_size() {
    if ($('*').is('.mainSmall')) {
        if ($('.mainSmall').outerHeight() < window.innerHeight) {
            $('html, body').css({
                height: '100%'
            });
        } else {
            $('html, body').css({
                height: 'auto'
            });
        }
    }
}

// size of content windows
function content_size() {
    if ($('*').is('.main')) {
        if ($('.main').outerHeight() < window.innerHeight) {
            $('html, body').css({
                height: '100%'
            });
        } else {
            $('html, body').css({
                height: 'auto'
            });
        }
    }
}
setInterval(function () {
    content_size();
    register_size();
}, 2000);

//input buttons
$('.main__contentTextAndInputEditImg').click(function () {
    $(this).removeClass('main__contentTextAndInputEditImg-active');
    $(this).parent().find('.main__contentTextAndInputSaveImg').addClass('main__contentTextAndInputSaveImg-active');
    $(this).parent().find('.main__contentTextAndInputInput').attr('readonly', false);
    ;
});
$('.main__contentTextAndInputSaveImg').click(function () {
    $(this).removeClass('main__contentTextAndInputSaveImg-active');
    $(this).parent().find('.main__contentTextAndInputEditImg').addClass('main__contentTextAndInputEditImg-active');
    $(this).parent().find('.main__contentTextAndInputInput').attr('readonly', true);
    ;
});

//body-cabinet
if ($('*').is('.main')) {
    $('body').addClass("body-cabinet");
}

// gray disabled input
$('input:disabled').css('color', '#c3b7c9');

//switch btn
$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
});
$('.switch-on-link').click(function () {
    if ($(this).hasClass('switch-on')) {
        console.log("выключили");
        window.location.href = 'linkTO';
    } else {
        console.log("включили");
        window.location.href = 'linkTO';
    }
});

//burger menu
$('#burger1').click(function () {
    $('.header__closebleMask').toggle();
    $('.header__mobileToggleBlock').slideToggle();
});
$('.header__closebleMask').click(function () {
    $('#burger1').prop('checked', false);
    $('.header__mobileToggleBlock').slideUp();
    $('.header__closebleMask').hide();
});

//overlay scroll
if ($('*').is('.main__contentTabContent-partnersStructure')) {
    $('.main__contentTabContent-partnersStructure').overlayScrollbars({});
    $('.main__contentPartnersTableItems').overlayScrollbars({});
}

//structure table
$('.main__contentPartnersTableItem').click(function (e) {
    tableItemClick(this, e);
});

function tableItemClick(that, event) {
    event.stopPropagation();
    if ($(that).find('.main__contentPartnersTableHeadlineText-sign')[0].innerText === "+") {
        //var jsonStr = JSON.parse('[{"id":"1","login":"admin","date_reg":"14.09.2020","email":"admin@mobius.exchange","summa_deposit":0,"partner_counts":"139","level":1},{"id":"2","login":"Mobiusliders","date_reg":"14.09.2020","email":"bagatyulya@gmail.com","summa_deposit":0,"partner_counts":"4","level":1},{"id":"4","login":"SuperStar","date_reg":"14.09.2020","email":"zbagatyulyavi@gmail.com","summa_deposit":0,"partner_counts":"0","level":1}]');
        //var jsonStr;
        var $user_ident = $(that).find('#userID')[0].innerText;

        $.ajax({
            url: "/ajaxer/team_listing/",
            type: "POST",
            data: {
                user_ident: $user_ident
            },

            success: function (html) {
                jsonStr = JSON.parse(html);
//

                for (var i = 0; i < jsonStr.length; i++) {
                    var sign = " ";
                    if (jsonStr[i].partner_counts > 0) sign = "+";
                    var text =
                        `<div class="main__contentPartnersTableItemAndChild main__contentPartnersTableItemAndChild-space">
                        <div class="main__contentPartnersTableItem">
                            <span id="userID">${jsonStr[i].id}</span>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-sign">${sign}</p>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-1">${jsonStr[i].level}</p>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-2">${jsonStr[i].date_reg}</p>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-3">${jsonStr[i].login}</p>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-4">${jsonStr[i].email}</p>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-5">${jsonStr[i].summa_deposit}</p>
                            <p class="main__contentPartnersTableItemText main__contentPartnersTableHeadlineText-6">${jsonStr[i].partner_counts}</p>
                        </div>
                    </div>`;
                    $(that).parent().append(text);
                }

                $(that).parent().children('.main__contentPartnersTableItemAndChild').slideDown();
                $(that).find('.main__contentPartnersTableHeadlineText-sign')[0].innerText = "-";

                $('.main__contentPartnersTableItem').off('click');
                $('.main__contentPartnersTableItem').click(function (e) {
                    tableItemClick(this, e);
                });

//

            }
        });
        //console.dir(jsonStr);


    } else if ($(that).find('.main__contentPartnersTableHeadlineText-sign')[0].innerText === "-") {
        $(that).parent().children('.main__contentPartnersTableItemAndChild').slideUp();
        $(that).find('.main__contentPartnersTableHeadlineText-sign')[0].innerText = "+";

        setTimeout(function () {
            $(that).parent().children('.main__contentPartnersTableItemAndChild').remove();
        }, 300);
    }
}

//range
if ($('*').is('.js-range-slider')) {
    $('.main__contentTabContent-active').find(".js-range-slider").ionRangeSlider({
        skin: "round",
        prefix: "$",
        step: 0.01,
        onStart: function (data) {
            setTimeout(function () {
                loadWithData(data);
            }, 100);
        },
        onChange: function (data) {
            loadWithData(data);
        },
    });
    function loadWithData(data) {
        var percentVal = $(data.input).parent().parent().find('#maxPercent').html();
        percentVal = percentVal.substr(0, percentVal.length - 1);
        percentVal = Number(percentVal) / 100;

        var percentValMin = $(data.input).parent().parent().find('#minPercent').html();
        percentValMin = percentValMin.substr(0, percentValMin.length - 1);

        var percentMinText = percentValMin;
        percentValMin = Number(percentValMin) / 100;

        var totalPercent = percentVal - percentValMin;
        $(data.input).parent().parent().find(".main__contentTabDashboardRangeInputPercent").css("left", $(data.input).parent().parent().find(".irs-single").css("left"));

        var percent;
        percent = data.from_percent * totalPercent;
        $(data.input).parent().parent().find(".main__contentTabDashboardRangeInputPercent").html((Number(percent.toFixed(1)) + Number(percentMinText)) + "%");
    }

}
if ($('*').is('.modalCalc__slider')) {
    var custom_values = [10, 50, 100, 500, 1000, 2000, 5000, 10000, 20000];

    $(".modalCalc__slider").ionRangeSlider({
        skin: "round",
        prefix: "$",
        values: custom_values,
        grid: true,
        hide_min_max: true,
        hide_from_to: true,
        onStart: function (data) {

        },
        onChange: function (data) {
            var value = data.from_value;
            var percent = $('#percent-range').val();
            percent = Number(percent) / 100;
            $(data.input).parent().parent().find('.modalCalc__columnBlockText-green').html("$" + (value * percent).toFixed());
        },
    });
}
$(document).on('input', '.modalCalc__input', function () {
    var $item = $(this),
        value = $item.val();
    var percent = $('#percent-input').val();
    percent = Number(percent) / 100;
    $(this).parent().find('.modalCalc__columnBlockText-green').html("$" + (value * percent).toFixed());
});

//circle proggress
if ($('*').is('.angleCircle')) {
    $(function () {
        var $knob = $(".knob").knob({
            width: 158,
            height: 158,
            fgColor: "#90d5b2",
            inputColor: "transparent",
            bgColor: "#e0dee8",
            draw: function () {
                var value = $(".knob").val();
                value = Number(value);
                $(".angleCircleTextBlockNum").html("$" + value);

                // var min = $(this.i).attr("data-min");
                // var max = $(this.i).attr("data-max");
                // var result = max;
                // var angle = ((value) * 360) / result;
                // $(".angleCircleDecoCircleBlock").css({'transform': 'rotate(' + angle + 'deg)'});
            },
        });

        var value = $(".knob").val();
        $(".angleCircleTextBlockNum").html("$" + value);

        var canvas = document.querySelector('canvas');
        var context = canvas.getContext('2d');
        var grad = context.createLinearGradient(131, 200, 69, 0);

        grad.addColorStop(0, 'rgba(125,215,161,1)');
        grad.addColorStop(1, 'rgba(49,170,143,1)');


        $('.knob').trigger(
            'configure',
            {
                "fgColor": grad,
            }
        );
    });
}

//chartjs
if ($('*').is('#myChart')) {
    // var ctx = $('#myChart');

    var ctx = document.getElementById('myChart').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(100, 0, 100, 200);

    gradientStroke.addColorStop(0, 'rgba(117,53,143,1)');
    gradientStroke.addColorStop(1, 'rgba(153,29,80,1)');

    var densityData = {
        data: [
            //"1", "2", "20", "15", "5", "6", "7", "8",
            //"9", "10", "34", "12", "13", "14", "15", "16",
            //"17", "18", "19", "20", "21", "22", "23", "24",
            //"25", "26", "27", "28"
        ],
        backgroundColor: gradientStroke,
    };

    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8",
                "9", "10", "11", "12", "13", "14", "15", "16",
                "17", "18", "19", "20", "21", "22", "23", "24",
                "25", "26", "27", "28"],
            datasets: [densityData]
        },
        options: {
            legend: {
                display: false,
            },
            tooltips: {
                backgroundColor: "rgba(255,255,255,1)",
                titleFontFamily: "Montserrat-SemiBold",
                titleFontSize: 6.15,
                titleFontColor: "rgba(189, 177, 196, 1)",
                displayColors: false,
                bodyFontFamily: "Montserrat-SemiBold",
                bodyFontSize: 10.29,
                bodyFontColor: "rgba(49, 11, 63, 1)",
                position: 'average',
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent"
                    }
                }]
            }
        },
    });
}

//modal finance
$(".mainSmall__button-financeModal").click(function () {
    toggleModal();
});
$(".modal__contentFinance-closeBtn").click(function () {
    toggleModal();
});

$(".main__contentFinanceCalcBtn").click(function () {
    toggleModalCalc();
});
$(".modal__contentCalc-closeBtn").click(function () {
    toggleModalCalc();
});
var modal = document.querySelector('.modal');
var modalCalc = document.querySelector('.modalCalc');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function toggleModalCalc() {
    modalCalc.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
    else if (event.target === modalCalc) {
        toggleModalCalc();
    }
}

window.addEventListener("click", windowOnClick);


//loading dashboard
$('.main__contentTabHeadlineBlockLink').click(function () {
    var that = this;
    $('.main__contentTabDashboardRowMask').addClass('main__contentTabDashboardRowMask-active');
    setTimeout(function () {
        $('.main__contentTabDashboardRowMask').removeClass('main__contentTabDashboardRowMask-active');
    }, 1000);
    setTimeout(function () {
        var id = $(that).parent().parent().find('.main__contentTabContent-active').attr('id');
        $(that).parent().parent().find('.main__contentTabContent').removeClass('main__contentTabContent-active');
        id = id.substr(0, id.length - 3);
        id = Number(id);
        if ($(that).hasClass('main__contentTabHeadlineBlockLink-right')) {
            if (id + 1 <= $(that).parent().parent().find('.main__contentTabContent').length) id++;
            else id = 1;
        } else {
            if (id - 1 >= 1) id--;
            else id = $(that).parent().parent().find('.main__contentTabContent').length;
        }
        $(that).parent().parent().find('#' + id + "Tab").addClass('main__contentTabContent-active');
        $('.main__contentTabContent-active').find(".js-range-slider").ionRangeSlider({
            skin: "round",
            prefix: "$",
            step: 0.01,
            onStart: function (data) {
                setTimeout(function () {
                    loadWithData(data);
                }, 100);
            },
            onChange: function (data) {
                loadWithData(data);
            },
        });
    }, 300);
});

//finance popup
if ($('*').is('.modal__contentFinanceBtn')) {
    $('.modal__contentFinanceBtn').click(function () {
        $('.modal__contentFinanceBtn').removeClass('modal__contentFinanceBtn-active');
        if (!$(this).hasClass('modal__contentFinanceBtn-dots')) {
            $(this).addClass('modal__contentFinanceBtn-active');

            var text = '<div class="main__contentFinanceTableItem"> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-1">516161632 </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-2"> investment </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-3">$1124</p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-4">Perfect money </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-5"> 25.06.2020 </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-6">Pending</p> </div><div class="main__contentFinanceTableItem"> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-1">516161632 </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-2"> investment </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-3">$1124</p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-4">Perfect money </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-5"> 25.06.2020 </p> <p class="main__contentPartnersTableItemText main__contentFinanceTableHeadlineText-6">Pending</p> </div>';
            var $page = Number($(this).html());

            // $.ajax({
            //     url: "/ajaxer/team_listing/",
            //     type: "POST",
            //     data: {
            //         page: $page
            //     },
            //     success: function (html) {
            //         text = html;
            //     }
            // });

            $('.modal').find('.main__contentPartnersTableItems').html(text);
        }
    });
}
