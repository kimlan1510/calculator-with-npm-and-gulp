$(document).ready(function(){
  $("#multiply").submit(function(event){
    event.preventDefault();
    var firstNumber = $('#first_number').val();
    var secondNumber = $('#second_number').val();

    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(firstNumber, secondNumber);

    $('#solution').append('<li>' + output + '</li>');

  });
});
