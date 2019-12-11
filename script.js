$(document).ready(function(){

 var time = document.querySelectorAll(".hour");
 var userInput = document.querySelectorAll(".text");
 var save =document.querySelectorAll(".save");
var hour = moment().format("HH");
//sets current day on top part of screen
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
// run this ever second for live time
 let updateTime= function (){
     let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // formats time
     $("#currentDay").text(currentTime); //pushes to dom
 }

function checkColors(){
    for( var i =0; i < time.length; i ++){
    var actualTime= parseInt(hour);// reformat as military time to compare
    var timeSlot = parseInt($(time[i]).attr("data-milTime")); // use military time to compare
        if(actualTime > timeSlot){ // for past
            $(userInput[i]).addClass("past");
            $(userInput[i]).removeClass("future");
            $(userInput[i]).removeClass("present");
        }
        else if ( actualTime === timeSlot){ //for present
            $(userInput[i]).addClass("present");
            $(userInput[i]).removeClass("future");
            $(userInput[i]).removeClass("past");
        }
        else if (actualTime< timeSlot){// for future
            $(userInput[i]).addClass("future");
            $(userInput[i]).removeClass("past");
            $(userInput[i]).removeClass("present");
        }
}
}
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var id = "#"; // so that we can use this variable in our Jquery
    id += $(this).attr("data-val"); 
    var eventTime =$(this).attr("data-val"); // create eventTime to be able to dynamically load our local storage without the #
    var input = $(id).val(); // retrieve user input
    window.localStorage.setItem(eventTime, input); // setting everything to local storage
})
// sets all time blocks to future
$(userInput).addClass("future");
// intializes time
updateTime();
//checks to update time every second
setInterval(updateTime, 1000);
// checks to see if colors need to be changed
setInterval(checkColors, 1000);
})
