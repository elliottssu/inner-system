//charDate表单验证
$(document).ready(function () {
    //指定固定天数函数
    var dayList = $(".dayList").children().children();
    $("#day_appoint").click(function () {
        if (this.checked) {
            if ($(dayList).filter(":checked").length == 0) {
                $(dayList.eq(0)).attr("checked", true);
            }
            dayList.eq(0).change();
        }
    });

    var monthList = $(".monthList").children().children();
    $("#month_appoint").click(function () {
        if (this.checked) {
            if ($(monthList).filter(":checked").length == 0) {
                $(monthList.eq(0)).attr("checked", true);
            }
            monthList.eq(0).change();
        }
    });
    var weekList = $(".weekList").children().children();
    $("#week_appoint").click(function () {
        if (this.checked) {
            if ($(weekList).filter(":checked").length == 0) {
                $(weekList.eq(0)).attr("checked", true);
            }
            weekList.eq(0).change();
        }
    });
});
//corn
/*****按天算片段*******/
$(function () {
    var dayList = $(".dayList").children().children();
    $("#day_appoint").click(function () {
        if (this.checked) {
            dayList.eq(0).change();
            return txtDaily;
        }
    });
    dayList.change(function () {
        var day_appoint = $("#day_appoint").prop("checked");
        if (day_appoint) {
            var vals = [];
            dayList.each(function () {
                if (this.checked) {
                    vals.push(this.value);
                }
            });
            function compare(a, b) {
                return a - b
            }

            vals.sort(compare);
            txtDaily = "?";
            if (vals.length > 0 && vals.length < 31) {
                txtDaily = vals.join(",");
            } else if (vals.length == 31) {
                txtDaily = "*";
            }
        }
        return txtDaily;
    });
    $("#latestDay").click(function () {
        if (this.checked) {
            day1.eq(0).change();
        }
        return txtDaily;
    });
    var day1 = $(".day1");
    day1.change(function () {
        var latestDay = $("#latestDay").prop("checked");
        if (latestDay) {
            var dayStart_1 = $("#dayStart_1").val();
            var dayEnd_1 = $("#dayEnd_1").val();
            txtDaily = dayStart_1 + "/" + dayEnd_1;
        }
        return Weekly;
    });
    var eve_day = $("#eve_day");
    $("#every_day").click(function () {
        if (this.checked) {
            eve_day.change();
        }
        return txtDaily;
    });
    eve_day.change(function () {
        var every_day = $("#every_day").prop("checked");
        if (every_day) {
            var eve_day = $("#eve_day").val();
            txtDaily = eve_day + "W";
        }
        return txtDaily;
    });
    $("#weekOfDay").click(function () {
        if (this.checked) {
            week1.eq(0).change();
        }
        return Weekly;
    });
    var week1 = $(".week1");
    week1.change(function () {
        var weekOfDay = $("#weekOfDay").prop("checked");
        if (weekOfDay) {
            var weekStart_1 = $("#weekStart_1").val();
            var weekEnd_1 = $("#weekEnd_1").val();
            Weekly = weekStart_1 + "#" + weekEnd_1;
        }
        return Weekly;
    });
    $("#lastWeek").click(function () {
        if (this.checked) {
            week1.eq(0).change();
        }
        return Weekly;
    });
    var week1 = $(".week1");
    week1.change(function () {
        var weekOfDay = $("#weekOfDay").prop("checked");
        if (weekOfDay) {
            var weekStart_1 = $("#weekStart_1").val();
            var weekEnd_1 = $("#weekEnd_1").val();
            Weekly = weekStart_1 + "#" + weekEnd_1;
        }
        return Weekly;
    });
    var weekStart_2 = $("#weekStart_2");
    $("#lastweek").click(function () {
        if (this.checked) {
            weekStart_2.change();
        }
        return Weekly;
    });
    weekStart_2.change(function () {
        var lastweek = $("#lastweek").prop("checked");
        if (lastweek) {
            var weekStart_2 = $("#weekStart_2").val();
            Weekly = weekStart_2 + "L";
        }
        return Weekly;
    });
    //month
    $("#optionsRadios2").click(function () {
        if (this.checked) {
            month1.eq(0).change();
        }
        return Monthly;
    });
    var month1 = $(".month1");
    month1.change(function () {
        var month = $("#optionsRadios2").prop("checked");
        if (month) {
            var monthStart_1 = $("#monthStart_1").val();
            var monthEnd_1 = $("#monthEnd_1").val();
            Monthly = monthStart_1 + "/" + monthEnd_1;
        }
        return Monthly;
    });
});
var txtDaily = "*";
var Weekly = "?";
var Monthly = "*";
var Yearly = " ";
function everyTime(dom) {
    if (dom.name == "day") {
        txtDaily = "*";
        return txtDaily;
    } else if (dom.name == "week") {
        Weekly = "*";
        return Weekly;
    } else if (dom.name == "month") {
        Monthly = "*";
        return Monthly;
    } else if (dom.name == "year") {
        Yearly = "*";
        return yearly;
    }
}
function lastDay() {
    txtDaily = "L"
    return txtDaily;
}
function getExp() {
    var mycron = "-1";
    var nowdisplay = $("#nowdisplay").val();
    if (nowdisplay == "Daily") {
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " " + txtDaily
            + " * ?";
    } else if (nowdisplay == "Weekly") {
        var week = "";
        var huang = document.all['txtWeekly'];
        for (i = 0; i < huang.length; i++) {
            if (huang[i].checked == true) {
                week = week + huang[i].value + ",";
            }
        }
        if ($("#week_appoint").prop("checked")) {
            Weekly = week.substring(0, week.length - 1);
        }
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " ? * " + Weekly;
    } else if (nowdisplay == "Monthly") {
        var month = "";
        var months = document.all['txtMonth'];
        for (var i = 0; i < months.length; i++) {
            if (months[i].checked == true) {
                month = month + months[i].value + ",";
            }
        }
        if ($("#month_appoint").prop("checked")) {
            Monthly = month.substring(0, month.length - 1);
        }
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " " + "* "
            + Monthly + " ?";
    } else if (nowdisplay == "Year") {
        var hourPart = $("#hourPart").val();
        var minutePart = $("#minutePart").val();
        var mycron = "0 " + minutePart + " " + hourPart + " * * ? "
            + Yearly;
    }
    if (mycron != "-1") {
        document.getElementById("mycron").value = mycron;
    }
}
function display(nowdisplay) {
    var cronThis = $("#nowdisplay").val();
    if (nowdisplay != cronThis) {
        document.getElementById("nowdisplay").value = nowdisplay;
    }

}

