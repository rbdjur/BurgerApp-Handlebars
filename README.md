# BurgerApp-Handlebars

A web app that takes user input and stores user's favorite burgers on the menu.  The user can devour their favorite burger on the menu.   


Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
The software needed to run the program can be found in the package.json file.  Under dependencies, you can find the dependencies downloaded (npm packages via npmjs.com).  Once downloaded in your terminal/bash the application will run.  

Give examples
Installing
1. open terminal/bash
2. Reach the file folder of all the files for Burger App. 
3. Once in the folder at the root of all files, download the following npm packages: "express", "express-handlebars", "body-parser", "handlebars", "mysql", "nodemon", and "path". 
4. You can download all of these npm packages by typing in terminal/bash command line:

npm (package name) --save

5. Then to start the server locally enter into terminal/bash:

node server.js


Development Review
The application was a difficult one to construct.  Organizing code into MVC (Models, Views, and Controller) is the best practice.  The GET requests to pull up the data was straight forward, however, the POST and PUT requests were challenging in regards to formulating the correct syntax, retrieving the right data, and rendring it to the correct route and handlebars file. 

An example of an obstacle, was when the user hit the button "add burger" after adding their input, the browser attempting to load the server, would eventually crash and not be able to reload the page with the updated information. In terminal, the added data appeared but the page refused to load up. However, when the browswer reloaded via refresh, the user input would show up.  

This issue occured because initially, the code to create a new burger, was passing along a boolean value that was not accounted for in the burger.create() method.  So the POST request was only half way completed because the code was only written to accept the users written data without any mentioning if the burger was devoured or not.  Once the devoured condition was removed from the method for the POST request, the burger was successfully added to the menu. 

This issue could have been easily detected or completely avoided if more time allocated to  implement wireframes of how the web application would function.  

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Javascript - to formulate methods, strings, etc to run the application 
MySql Workbench - Data storage
HTML- Used to generate RSS Feeds
Contributing
Handlebars - HTML + CSS organization that allows calling data to be more effective. 

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Ronaldo DeGuzman

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Aaron Farber


