$(document).ready(function () {

    // Static

    // The first basic method of Moment.js is the moment() method. Use this to get today's info!
    console.log(moment());

    console.log(moment().format());

    // Using moment format, there are different ways that we can display todays date!
    $("#date").text(moment());
    $("#date-formatted").text(moment().format());
    $("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    $("#day-week").text(moment().format('do'));
    $("#day-month").text(moment().format('Do'));
    $("#day-year").text(moment().format('DDDo'))

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }


    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    setInterval(countdown, 1);

})