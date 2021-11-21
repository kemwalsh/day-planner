//Date and Time
var myClock = document.getElementById("currentDay");
myClock.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
setInterval(function () {
    myClock.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("anything")
}, 1000)

