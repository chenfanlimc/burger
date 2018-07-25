var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, callback){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    },

    insertOne: function(tableInput, colSelect, valOfCol, callback){
        var queryString = "INSERT INTO ??(??) VALUES (?)";
        connection.query(queryString, [tableInput, colSelect, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    },

    updateOne: function(tableInput, colOne, valOne, colTwo, valTwo, id, callback){
        var queryString = "UPDATE ?? SET ?? = ?, ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, colOne, valOne, colTwo, valTwo, id], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    }


  // The last variable cb represents the anonymous function being passed from server.js
//   selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       cb(result,err);
//     });
//   }
};

module.exports = orm;

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`