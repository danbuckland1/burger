var connection = require("./connection.js");

var orm = {
    selectAll: function(burger_name,){
    var queryString = "";
    connection.query(queryString, [tableName, columnName, value], function(err, result){
        if(err) throw err;
        console.log(result);
    });
    }
};



`insertOne()`
`updateOne()`











module.exports = orm;