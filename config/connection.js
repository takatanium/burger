let mysql = require('mysql');
// let source = {
//   localhost: {
//     port: 3306,
//     host: 'localhost',
//     user: 'testuser',
//     password: '',
//     database: 'burgers_db'
//   }
// };

// let connection = mysql.createConnection(source.localhost);

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
};

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
