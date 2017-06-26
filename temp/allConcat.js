$(document).ready(function(){
  $("#pingpong-form").submit(function(event){
    event.preventDefault();
    var goal = $("#goal").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element){
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});

var Calculator = require("./../js/pingpong.js").calculatorModule;

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
