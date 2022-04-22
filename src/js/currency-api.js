export default class CurrencyExchange {
  static getValue(userInput, amount) {
    const API_KEY_TEST = "79633483f32a54ba20b5bwtf"
    return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY_TEST}/pair/USD/${userInput}/${amount}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.result);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    });
  }
}