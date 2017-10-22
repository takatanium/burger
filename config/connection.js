let mysql = require('mysql');
let source = {
  localhost: {
    port: 3306,
    host: 'localhost',
    user: 'testuser',
    password: '',
    database: 'burgers_db'
  }
};

let connection = mysql.createConnection(source.localhost);
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
