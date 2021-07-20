// Set the Scheduler to the current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Declare a variable for the current hour to use to update the time block color
var currentHour = moment().format("H");

// Initial scan of the time blocks to set the correct color for past, present and future based on current time
function initialTimeBlockColor() {
    currentHour = moment().format("H");
    $(".description").each(function(textarea) {
        var hour = $(this).data("hour");
        if (hour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } 
        else if (hour == currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else if (hour > currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

// Set an interval to evaluate the current time every minute and update the time block color as needed
function setTimeBlockColor() {
    setInterval(function() {
        currentHour = moment().format("H");
        $(".description").each(function(textarea) {
            var hour = $(this).data("hour");
            if (hour < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } 
            else if (hour == currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else if (hour > currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

    }, 1000);
}

// Set an event listener to save scheduler input when a save button is clicked
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).prev().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
})

// Get saved appointments from local storage
$("#hour8").text(localStorage.getItem("hour8"));
$("#hour9").text(localStorage.getItem("hour9"));
$("#hour10").text(localStorage.getItem("hour10"));
$("#hour11").text(localStorage.getItem("hour11"));
$("#hour12").text(localStorage.getItem("hour12"));
$("#hour13").text(localStorage.getItem("hour13"));
$("#hour14").text(localStorage.getItem("hour14"));
$("#hour15").text(localStorage.getItem("hour15"));
$("#hour16").text(localStorage.getItem("hour16"));
$("#hour17").text(localStorage.getItem("hour17"));

// Run the functions that check current time, set the initial time block color and then update the color as time proceeds
console.log(currentHour);
initialTimeBlockColor();
setTimeBlockColor();