(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.multiply = function(firstNumber,secondNumber) {
  var result = (firstNumber * secondNumber);
  return result;
};

exports.makeUpModule = Calculator;

},{}],2:[function(require,module,exports){
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

var apiKey = "faa00e7367b2be89663ae72dfcc9683b";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity + "%. Temperature is " + (parseInt(response.main.temp) - 273) + " degrees C"); 
    });
  });
});

},{"./../js/pingpong.js":1}]},{},[2]);
