
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
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".description").each(function () {
        var id = $(this).parent().attr("id");
        console.log(id)
        var description = localStorage.getItem(id);
        console.log(description)
        if (description !== null) {
            $(this).val(description);
        }
    });
}

saveDay();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val()
    console.log(time)
    console.log(description)
    localStorage.setItem(time, description);



});


