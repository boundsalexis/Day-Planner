$(document).ready(function(){

 var time = document.querySelectorAll(".hour");
 var userInput = document.querySelectorAll(".text");
 var save =document.querySelectorAll(".save");
// var hour = moment().format("h");

var hour=3;
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
 let updateTime= function (){
     let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
     $("#currentDay").text(currentTime);
 }
 console.log(userInput[2]);
 $(".text").addClass("future");
updateTime();
setInterval(updateTime, 1000);

function checkColors(){
    for(i= 0;i < time.length; i++){
        var actualTime= parseInt(hour);
        var compare = parseInt(time[i].textContent);        
        if(compare ===  actualTime){
            $(userInput[i]).addClass("present");
            $(userInput[i]).removeClass("future past");
        }
        else if(i >= 4 && actualTime <compare){
            console.log("eggs");
            $(userInput[i]).addClass("past");
            $(userInput[i]).removeClass("future present")
        }
        else if (actualTime> compare){
            $(userInput[i]).addClass("past");
            $(userInput[i]).removeClass("future present");
        }
}}
checkColors();
// $(".saveBtn").on("click", function(){
//     var newEvent = $("textarea").val()
// })
// var hour = moment().format("h");
// console.log(hour);
// var test = parseInt("7am");
// console.log(test);
// console.log("_____", $(".hour").text());
// console.log(parseInt("7 am"));
// function checkColors(){
//     if(parseInt($(".hour").text())===9){
//         $(".text").addClass("present");
//     }
//    }
})
