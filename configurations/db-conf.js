const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"tvcpw8tpu4jvgnnq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"cb2c3cpknjnmccsd",
    password:"eoxtn8ergot7imfc",
    database:"k2okijxvw93tpf10",
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('En linea...');
    }
  });

  module.exports = mysqlConnection;