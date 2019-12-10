$(document).ready(function(){
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
 let updateTime= function (){
     let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
     $("#currentDay").text(currentTime);
 }
 var time = document.querySelectorAll(".hour");
 console.log(time);
updateTime();
setInterval(updateTime, 1000);
var hour = moment().format("h");
// function setColors(){
//    time.addClass("future");
// }
// setColors();

})