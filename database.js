const mysql = require("mysql");
const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "library",
});
module.exports = connection;
