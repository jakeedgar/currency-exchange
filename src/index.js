import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currency-api.js';

function displayExchange(response, amount) {
  console.log(response);
  console.log(response.target_code);
  console.log(response.conversion_result);
  console.log(response.amount);
  if (response.result === "success") {
    $("#exchange-display").text(`Your ${amount} in USD converts to: ${parseFloat(response.conversion_result).toFixed(2)} in ${response.target_code}`);
  } else {
    $('.show-errors').text(`${CurrencyExchange.error}`);
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
