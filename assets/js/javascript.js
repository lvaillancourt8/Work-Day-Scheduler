// Set the Scheduler to the current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function setTimeBlockColor() {
    setInterval(function() {
        var currentHour = moment().format("H");
        console.log(currentHour);

        $(".description").each(function(textarea) {
            var hour = $(this).data("hour");
            console.log(hour);
            if (hour < currentHour) {
                $(this).removeClass("future");
                $(this).addClass("past");
            } 
            else if (hour === currentHour) {
                $(this).removeClass("future");
                $(this).addClass("present");
            }
        });

    }, 60 * 1000);
}


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

setTimeBlockColor();