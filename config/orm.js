var connection = require("./connection.js");

var orm = {
  selectAll: function(callback){
    connection.query("SELECT * FROM burgers", function(err, result){
      if(err) throw err;
      callback(result);
    });
  },

  // insertOne: function(burger_name, callback){
  //   connnection.query("INSERT INTO burgers SET ?")
  // }

};


  







module.exports = orm;