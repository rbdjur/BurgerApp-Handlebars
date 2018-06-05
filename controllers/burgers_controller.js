var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

// GET the data from the database to fill the index handlbars html. 
router.get("/index", function(req, res) {
    console.log('getting gotten');
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/index", function (req,res) {
    console.log("getting updated");
    burger.create(function(data) {
        console.log("LOOK HERE", data)
        var postObject = {
            burgers: data
        };
        console.log(postObject);
        res.render("index", postObject);

    });
});

// POST the data from the database after the user submitted their own type of burger in the text area
router.put("/index", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(function(data) {
        var updatedObject = {
            burgers: data
        };
        console.log(updatedObject);
        res.render("index", updatedObject);
    });
});


module.exports = router;

// // route to the main site
// router.get("/", function (req, res) {
//     connection.query("SELECT * FROM hamburgers", function (err, result) {  
//     }
//         // res.send("index", { hamburgers : data });
//         res.json(result);
//         console.log("REQ", req);
//         console.log("RES", res);
//     });
// });

// app.get("")