$(document).ready(function(){
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
 let updateTime= function (){
     let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
     $("#currentDay").text(currentTime);
 }
 var time = document.querySelectorAll(".hour");
 console.log(time);
 $(".text").addClass("future");
updateTime();
setInterval(updateTime, 1000);
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
