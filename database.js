const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection(process.env.database);
module.exports = connection;
