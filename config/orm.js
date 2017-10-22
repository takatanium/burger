let connection = require("./connection.js");

let orm = {
  selectAll: (table, callback) => {
    connection.query(`SELECT * FROM ${table}`, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: (table, name, callback) => {
    let s = `INSERT INTO ${table} (burger_name, devoured) VALUES (?,?)`;
    connection.query(s, [name, false], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: (table, id, callback) => {
    let s = `UPDATE ${table} SET devoured=true WHERE id=${id}`;
    connection.query(s, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
