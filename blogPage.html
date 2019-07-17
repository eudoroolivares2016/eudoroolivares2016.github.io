var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startYear = 2000;
var endYear = 2020;
var month = 0;
var year = 0;
var selectedDays = new Array();
var selectedDay = '';

function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = `<span class='fa fa-caret-down fa-fw'></span> ${months[month]}`;
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

function loadCalendarYears() {
    document.getElementById("years").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear").innerHTML = `<span class='fa fa-caret-down fa-fw'></span> ${year}`;
                loadCalendarDays();
                return year;
            }
        })();

        document.getElementById("years").appendChild(doc);
    }
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

    for (var i = 0; i <= dayofweek; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + i;
        d.className = "day";
        d.innerHTML = tmp;
        d.dataset.day = tmp;

        /* ****************** Single Day Event ********************** */
        d.addEventListener('click', function () {
            let _date = (month + 1) + '/' + this.dataset.day + '/' + year;

            if (selectedDay == _date) {
                selectedDay = '';
                this.classList.toggle('selected');
            } else {
                selectedDay = _date;
                var days = document.querySelectorAll('.day');
                days.forEach(item => item.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
        /* **************************************************** */

        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year)
{
    var d = new Date(year, month+1, 0);
    return d.getDate();
}

function setDate(dt) {
    // convert the date to js object
    // parse and check if on current month, otherwise ignore
    let d = new Date(dt);

    if (d.getMonth() != NaN) {
        if (month == d.getMonth()) {
            let _date = (month + 1) + '/' + d.getDate() + '/' + year;

            var day = d.getDate() - 1;
            selectedDay = _date;
            var days = document.querySelectorAll('.day');
            days.forEach(item => item.classList.remove('selected'));
            document.getElementById(`calendarday_${day}`).classList.add('selected');
        }
    }
}

window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById("curMonth").innerHTML = `<span class='fa fa-caret-down fa-fw'></span> ${months[month]}`;
    document.getElementById("curYear").innerHTML = `<span class='fa fa-caret-down fa-fw'></span> ${year}`;
    loadCalendarMonths();
    loadCalendarYears();
    loadCalendarDays();
});
