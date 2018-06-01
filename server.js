var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var burgerRoutes = require('./controllers/burgers_controller.js')

app.use(burgerRoutes);

// create a port
var PORT = process.env.PORT || 8080;


// have server begin listening. 
app.listen(PORT, function() {
    console.log("Listening on http:localhost/", PORT);
    console.log("Working");
}); 






// console.log("Hello");

// var data = orm.selectWhere("burgers","burger_name","devoured", function(data) {
//     res.send(data);
// });




//  This code went inside orm.selectWhere() - tableInput, colToSearch, valOfCol,

// line 11 is a guess, clarify with TA's / Michael on the syntax that will be able to call the information on the data base. 
