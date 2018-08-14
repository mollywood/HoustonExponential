const express = require("express");
// const routes = require("./routes");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models/index.js");
const app = express();
const pg = require('pg');

const users = require('./routes/users');

//Middleware
app.use(express.static("public"));
app.use(
  body_parser.urlencoded({
    extended: false
  })
);
app.use(body_parser.json());

app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

app.get("/api/data", (req, res) => {});

// @route GET /
// @desc Renders home.hbs view
// @access Public
app.get("/", (req, res) => {
  res.render("home", {
    title: "Welcome",
    message: "Hello world",
    subheading: "It's nice to meet you"
  });
});

// // @route GET /register
// // @desc Renders register.hbs view
// // @access Public
// app.get("/register", (req, res) => {
//   res.render("register", {
//   });
// });

// // @route GET /login
// // @desc Renders login.hbs view
// // @access Public
// app.get("/login", (req, res) => {
//   res.render("login", {
//   });
// });

// @route GET /register/company
// @desc
// @access Protected
app.get("/register/company", (req, res) => {
  res.render("register-company", {
    title: "Register a Company"
  });
});

// @route POST /register/company
// @desc
// @access Public
app.post("/register/company", (req, res) => {});

// @route GET /register/investor
// @desc
// @access Protected
app.get("/register/investor", (req, res) => {
  res.render("register-investor", {
    title: "Register an Investor"
  });
});

// @route POST /register/investor
// @desc
// @access Public
app.post("/register/investor", (req, res) => {});

// @route GET /register/hub
// @desc
// @access Protected
app.get("/register/hub", (req, res) => {
  res.render("register-hub", {
    title: "Register a Hub"
  });
});

// @route POST /register/hub
// @desc
// @access Public
app.post("/register/hub", (req, res) => {});

// post for register for user, company, investor, hub.

// Use routes
app.use('/users', users);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
