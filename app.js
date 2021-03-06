var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var bookRouter = require("./routes/book");
var customerRouter = require("./routes/customer");
var borrowRouter = require("./routes/borrow");

const helmet = require("helmet");
const cors = require("cors");

var app = express();

app.use(helmet());
app.use(cors());

// Authorization
const basicAuth = require("express-basic-auth");
// First auth method
//app.use(basicAuth({ users: { admin: "1234" } }));

// Second auth method, uses variables
const dotenv = require('dotenv');
dotenv.config();

app.use(
  basicAuth({
    authorizer: myAuthorizer,
    authorizeAsync: true,
  })
);
 function myAuthorizer(username, password, callback) {
  if (username === process.env.auth_user && password === process.env.auth_pass) {
    return callback(null, true);
  } else {
    return callback(null, false);
  }
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/book", bookRouter);
app.use("/customer", customerRouter);
app.use("/borrow", borrowRouter);

module.exports = app;
