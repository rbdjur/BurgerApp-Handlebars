var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// create a port
var PORT = process.env.PORT || 8000;

// have server begin listening. 
app.listen(PORT, function() {
    console.log("Listening on http:localhost/", PORT);
})