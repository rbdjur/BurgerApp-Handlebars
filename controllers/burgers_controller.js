var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");



console.log("Hello from burgers_controller.js");

// GET the data from the database to fill the index handlbars html. 
router.get("/", function (req, res) {
    console.log('getting gotten from burgers_controller.js GET ROUTE - req.body', req.body);
    // Nothing in the req.body
    console.log('getting gotten from burgers_controller.js GET ROUTE - res.body', res.body);
    // undefined in the res.body
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log("Current database data", hbsObject);
        res.render("index", hbsObject);
    });
});

// /burgers/create
// Post route - to create a new column in the current data
router.post("/api/burger", function (req, res) {
    burger.create(req.body.burger_name, function(result){
        console.log("/burgers/create", result);
        res.redirect("/");
    });
    });



router.put("/api/burger/:id", function(req,res) {
    console.log("Hi");
    var condition = req.params.id;
    burger.update(condition, function(result) {
                res.redirect("/");
            });
        });



















    // console.log("getting updated from burgers_controllers.js POST ROUTE", req.body);
    // burger.create(["burger_name"], [req.body.burger_name], function (result) {
    //     console.log("Router.post", result)
    //     res.json({ id: data.insertId });
        // res.send(data);
        // var postObject = {
        //     burgers: data
        // };
        // console.log(postObject);
        // res.render("index", postObject);

    // });

// });

// router.put("/index", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("UPDATE ROUTE - from burgers_controllers.js" + condition);
//     burger.update(function (data) {
//         var updatedObject = {
//             burgers: data
//         };
//         console.log("updated object" + updatedObject);
//         res.render("index", updatedObject);
//     });
// });


// POST the data from the database after the user submitted their own type of burger in the text area


// router.post("/index", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     burger.update(function(data) {
//         var updatedObject = {
//             burgers: data
//         };
//         console.log(updatedObject);
//         res.render("index", updatedObject);
//     });
// });


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