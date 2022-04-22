import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currency-api.js';

// function displayExchange(amount) {
//   return;
// }

$(document).ready(function() {
  let promise = CurrencyExchange.getValue();
  promise.then(function(response) {
    const userInput = $("#currency").val();
    console.log(userInput);
    const amount = $(".amount").val();
    console.log(amount);
    const body = JSON.parse(response);
    $('#exchange-display').text(`Current Conversion: ${parseFloat(body[0].conversion_result).toFixed(2)}`);
  });
});