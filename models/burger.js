var orm = require("../config/orm");

var burger = {

selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callbackb(res);
    });
  },
 
  insertOne: function(burger_name, callback) {
    orm.insertOne("burgers", function(res) {
      callback(res);
    });
  },
  updateOne: function(burger_id, callback) {
    orm.updateOne("burgers", function(res) {
      callback(res);
    });
  }
};


module.exports = burger;