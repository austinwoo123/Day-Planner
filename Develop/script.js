
// Set variables for each time //
var time9 = $("#9");
var time10 = $("#10");
var time11 = $("#11");
var time12 = $("12");
var time1 = $("#13");
var time2 = $("#14");
var time3 = $("#15");
var time4 = $("#16");
var time5 = $("#17");

var time = moment();

function saveDay() {
    // change the current time on the page //
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".description").each(function () {
        var id = $(this).parent().attr("id");
        console.log(id)
        var description = localStorage.getItem(id);
        console.log(description)
        if (description !== null) {
            // putting it onto page from local storage //
            $(this).val(description);
        }
    });
}

saveDay();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    //retrieve id of parent //
    var time = $(this).parent().attr("id");
    //retrive description from sibling of button //
    var description = $(this).siblings(".description").val()
    console.log(time)
    console.log(description)
    // putting the description into local storage //
    localStorage.setItem(time, description);

});
// function that adds a color attribute to each description in the of the time slots //
function colorCode() {
    hour = time.hours();
    $(".description").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future")
        }
        else if (currentHour === hour) {
            $(this).addClass("present");

        }
        else {
            $(this).addClass("past");
        }
    })
}

colorCode();

