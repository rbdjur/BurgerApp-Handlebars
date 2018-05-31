var connection = require("./connection.js");
console.log("Here");
var yes;

var orm = {
    select: function (whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
            if (err) throw err;
            console.log("This is result", result);
        });
    },
    selectWhere: function (tableInput, colToSearch, valOfCol, callback) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            callback(result);
            yes = callback(result);
        });
    }
}
module.exports = orm;