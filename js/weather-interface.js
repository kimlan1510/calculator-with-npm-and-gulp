var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
      .then(function(response) {
        $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity + "%. Temperature is " + (parseInt(response.main.temp) - 273) + " degrees C");
      })
      .fail(function(error){
        $('.showWeather').text("error.resposeJSON.message");
      });

  });
});
