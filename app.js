const express = require("express");
// const routes = require("./routes");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models/index.js");
const app = express();
const pg = require('pg');
const home = require('./routes/home');
const companies = require('./routes/companies');
const hubs = require('./routes/hubs');
const investors = require('./routes/investors');
const services = require('./routes/services');
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

// what do we want to grab?
app.get("/api/data", (req, res) => {});

// @route GET /
// @desc Renders home.hbs view
// @access Public
app.get("/", (req, res) => {
  console.log(req.user);
  res.render("home", {
    title: "Welcome",
    message: "Hello world",
    subheading: "It's nice to meet you"
  });
});
app.get("/register/entity", (req, res) => {
  console.log(req.user);
  res.render("registerentity", {
    title: "Welcome",
    message: "Hello world",
    subheading: "It's nice to meet you"
  });
});

// Use routes
app.use('/companies', companies);
app.use('', home);

app.use('/hubs', hubs);
app.use('/investors', investors);
app.use('/services', services);

app.use('/users', users);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
