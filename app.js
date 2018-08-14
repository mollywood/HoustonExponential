const express = require("express");
// const routes = require("./routes");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models/index.js");
const app = express();

// // Investor is the model name defined in the models/investor.js
// db.Investor.create({ name: "Chris" }).then(result => {
//   console.log(result);
// });

//Middleware
app.use(express.static("public"));
app.use(
  body_parser.urlencoded({
    extended: false
  })
);
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

app.get("/", (req, res) => {
  db.Investor.findAll().then(result => {
    let investors = result
    res.render("home", {
      title: "Welcome",
      investors: investors
    });
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Register"
  });
});

app.post("/register", (req, res) => {});

app.get("/register/company", (req, res) => {
  res.render("register-company", {
    title: "Register a Company"
  });
});

app.post("/register/company", (req, res) => {});

app.get("/register/investor", (req, res) => {
  res.render("register-investor", {
    title: "Register an Investor"
  });
});

app.post("/register/investor", (req, res) => {});

app.get("/register/hub", (req, res) => {
  res.render("register-hub", {
    title: "Register a Hub"
  });
});

app.post("/register/hub", (req, res) => {});

// post for register for user, company, investor, hub.

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
