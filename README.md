# Day-Planner
Plan your day

# links
> [GitHub Repository](https://github.com/boundsalexis/Day-Planner)
> [Live Link](https://boundsalexis.github.io/Day-Planner/)

# Technologies Used
> HTML to create the physical shell of the planner
> CSS to style the planner
> JQUERY for button functionality, the changing of the colors
> Moment.js for displaying the current time and for the conditionals in respect to changing the colors

# Summary
Enter your plans for your day and save them so you won't forget. Keep traack of your progress throughout the day.

# Code Snippet
``` javascript
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
```
> This was the hardest part of the project for me, I went through so many combinations of loops and conditional statements before someone in class suggested trying military time. After that it was like a lightbulb went off and the rest of the project was a breeze

## Authors

* **Alexis Bounds** 

- [Link to Portfolio Site](https://github.com/boundsalexis/basic-portfolio)
- [Link to Github](https://boundsalexis.github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/alexis-bounds-9b7711169/)