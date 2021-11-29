// Date and Time  TURN INTO JQUERY
var myClock = document.getElementById("currentDay").textContent = moment().format('MMMM Do YYYY, h:mm a');
// console.log(myClock)
// myClock.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
// setInterval(function () {
//     myClock.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
//     // console.log("anything")
// }, 1000)


let time = moment();

$(".saveBtn").click(function () {
    const time = $(this).parent().attr("id");
    const schedule = $(this).siblings(".schedule").val()
    localStorage.setItem(time, schedule);
})

function startPage() {
    $(".time-block").each(function () {
        const lsData = localStorage.getItem($(this).attr("id"));

        if (lsData) {
            $(this).children(".schedule").val(lsData);
        }
        setCalendarColors($(this).attr("id"), this);
    })
}

function setCalendarColors(savedTime, element) {
    hour = time.hours();
    console.log(savedTime);
    if (parseInt(savedTime) > hour) {
        $(element).addClass("future");
    }
    else if (parseInt(savedTime) < hour) {
        $(element).addClass("past");
    }
    else {
        $(element).addClass("present");
    }
}
startPage();