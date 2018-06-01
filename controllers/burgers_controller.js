var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")


router.get("/", function(req, res) {
    console.log('getting gotten')
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
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