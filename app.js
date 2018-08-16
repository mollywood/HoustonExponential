const express = require("express");
// const routes = require("./routes");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models/index.js");
const app = express();
const pg = require('pg');

const companies = require('./routes/companies');
const hubs = require('./routes/hubs');
const investors = require('./routes/investors');
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

// @route GET /
// @desc Renders home.hbs view
// @access Public
app.get("/", (req, res) => {
  db.Company.findAll().then(result => {
    res.render("home", {
      title: "Welcome",
      companies: result
    });
  });
});

// Use routes
app.use('/', companies);
app.use('/', hubs);
app.use('/', investors);
app.use('/users', users);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
