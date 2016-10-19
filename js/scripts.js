$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var userInput = $("input#user").val();
    var dateInput = $("input#date").val();
    var timeInput= $("input#time").val();

    $(".user").text(userInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#confirm").show();

    event.preventDefault();
  });
});
