export default class CurrencyExchange {
  static getValue(userInput, amount) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let userInput = "WON";
      console.log(userInput);
      let amount = 21;
      console.log(amount);
      let API_KEY = "9633483f32a54ba20b5b4fd";
      const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${userInput}/USD/${amount}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else  {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}