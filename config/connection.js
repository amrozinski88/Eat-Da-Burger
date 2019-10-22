const dotenv = require("dotenv").config()
const mysql = require("mysql");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env]
console.log(config)

let connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.username,
  password: process.env.SQL_PW,
  database: config.database
});

if(env ==="production"){
  connection = mysql.createConnection(process.env[config.use_env_variable])
}
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;