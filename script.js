$(document).ready(function(){

 var time = document.querySelectorAll(".hour");
 var userInput = document.querySelectorAll(".text");
 var save =document.querySelectorAll(".save");
var hour = moment().format("HH");

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
 let updateTime= function (){
     let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
     $("#currentDay").text(currentTime);
 }

function checkColors(){
    for( var i =0; i < time.length; i ++){
    var actualTime= parseInt(hour);
    var timeSlot = parseInt($(time[i]).attr("data-milTime"));
        if(actualTime > timeSlot){
            $(userInput[i]).addClass("past");
            $(userInput[i]).removeClass("future");
            $(userInput[i]).removeClass("present");
        }
        else if ( actualTime === timeSlot){
            $(userInput[i]).addClass("present");
            $(userInput[i]).removeClass("future");
            $(userInput[i]).removeClass("past");
        }
        else if (actualTime< timeSlot){
            $(userInput[i]).addClass("future");
            $(userInput[i]).removeClass("past");
            $(userInput[i]).removeClass("present");
        }
}
}
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var id = "#";
    id += $(this).attr("data-val");
    var eventTime =$(this).attr("data-val");
    var input = $(id).val();
    window.localStorage.setItem(eventTime, input);
})

$(userInput).addClass("future");
updateTime();
setInterval(updateTime, 1000);
setInterval(checkColors, 1000);
})
