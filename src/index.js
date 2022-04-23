import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currency-api.js';

function displayExchange(response, amount) {
  if (response.result !== "success") {
    $('#error-display').text(`${response} Please Check Your API KEY`);
  } else {
    $("#exchange-display").text(`Your ${amount} in USD converts to: ${parseFloat(response.conversion_result).toFixed(2)} in ${response.target_code}`);
  }
}

$(document).ready(function() {
  $("#btn-exchange").click(function(e) {
    e.preventDefault();
    const userInput = $("#currency").val();
    const amount = $("#amount").val();
    CurrencyExchange.getValue(userInput, amount)
      .then(function(newResponse) {
        displayExchange(newResponse, amount);
      });
  });
});
