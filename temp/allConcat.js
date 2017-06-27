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

var Calculator = require("./../js/pingpong.js").makeUpModule;

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



$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
