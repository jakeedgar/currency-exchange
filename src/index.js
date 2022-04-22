import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currency-api.js';

// function displayExchange(amount) {
//   return;
// }

$(document).ready(function() {
  $("#btn-exchange").click(function(e) {
    e.preventDefault();
    const userInput = $("#currency").val();
    console.log(userInput);
    const amount = $("#amount").val();
    console.log(amount);
    let promise = CurrencyExchange.getValue(userInput, amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      console.log(body.conversion_result);
      $("#exchange-display").html(`Converts to: ${parseFloat(body.conversion_result).toFixed(2)} in ${body.target_code}`);
    });
  });
});