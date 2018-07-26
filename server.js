var express = require("express");
var bodyParser = require("body-parser");

// create a port
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burgerRoutes = require('./controllers/burgers_controller.js')

app.use(burgerRoutes);

// have server begin listening. 
app.listen(PORT, function() {
    console.log("Listening on http:localhost/", PORT);
    console.log("Working");
}); 

console.log("Test for rename of git repo on git")
 
