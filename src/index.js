import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currency-api.js';

// function displayExchange(amount) {
//   return;
// }

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $("#btn-exchange").click(function(e) {
    e.preventDefault();
    const userInput = $("#currency").val();
    const amount = $("#amount").val();
    let promise = CurrencyExchange.getValue(userInput, amount);
    promise.then(function(response) {
      if (resonse instanceof Error) {
        throw Error(`CurrencyExchange API error: ${response.message}`)
      }
      const body = JSON.parse(response);
      $("#exchange-display").html(`Your ${amount} in USD converts to: ${parseFloat(body.conversion_result).toFixed(2)} in ${body.target_code}`);
      promise.catch(error) {
        displayErrors(error.message);
      }
    });
  });
});