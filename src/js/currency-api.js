export default class CurrencyExchange {
  static getValue(userInput, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${userInput}/${amount}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    });
  }
}

    // return new Promise(function(resolve, reject) {
    //   let request = new XMLHttpRequest();
    //   const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${userInput}/${amount}`;
    //   request.onload = function () {
    //     if (this.status === 200) {
    //       resolve(request.response);
    //     } else  {
    //       reject(request.response);
    //     }
    //   };
    //   request.open("GET", url, true);
    //   request.send();
    // });