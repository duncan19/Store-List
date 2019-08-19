$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];

    blanks.forEach(function(blank) {
      var userinput = $("input#" + blank).val();
      $("." + blank).text(userinput);
    });

    blanks.sort();
    $("#story").show();

    event.preventDefault();
  });
});
