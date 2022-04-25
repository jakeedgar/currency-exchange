# Currency Exchange 

#### By Jake Edgar

#### A website that allows the user to convert currency from USD to 1 of 5 foreign currencies. 

## Technologies Used

* HTML
* JavaScript
* CSS
* Jest
* TDD
* Bootstrap 
* Node

## Description

The user selects a currency type from the dropdown menu and enters an amount of USD to convert. The site then returns the correct conversion, or an error describing the particular API issue at hand. 

## Setup/Installation Requirements

* Navigate to your preferred code editing software. 
* Clone this repository to your desktop by using the command *git clone* followed by this link https://github.com/jakeedgar/currency-exchange
* Navigate to the top level of the directory. 
* Ensure NPM is install by running with the command *NPM -v* in your terminal, and if it is not use your preferred installer to install NPM. 
* Run *NPM init -y* to initialize your project. 
* Run *NPM install* to install dependencies. 
* Navigate to https://www.exchangerate-api.com and create an account to receive your own API key. 
* Create a .env file in the top level of your directory using *touch .env*
* Then install the .env dependencies using the command *npm install dotenv-webpack@2.0.0 --save-dev* 
* Make sure to include a path in webpack.config.js to the .env file. 
* Store your newly generated API key in the .env file and set it as follows: *API_KEY=3d68a17ddd5ea407ab91f2d278342017* (This is not a real API KEY).
* If you plan to update the project make sure you push the .gitignore file to github first by using *git add .gitignore* and then pushing it to your personal github. Make sure to include the .env file in your .gitignore to protect your API key. 
* Run *NPM run build* to build the project environment. 
* Run *NPM run start* to run the program in your browser. 


## Known Bugs

* There are no Known Bugs at this time. 

## License

Licensed under the [MIT License](LICENSE).
Copyright (c) 2022 Jake Edgar