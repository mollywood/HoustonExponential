const express = require("express");
const app = express();
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const passport = require("passport");
const companies = require("./routes/companies");
const home = require("./routes/home");
const investors = require("./routes/investors");
const services = require("./routes/services");
const users = require("./routes/users");
const about = require('./routes/about');
const registerentity = require("./routes/registerentity");
const registerCompany = require("./routes/registerCompany");
const registerInvestor = require("./routes/registerInvestor");
const registerService = require("./routes/registerService");


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

// Passport Middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Used to change header
app.use(function(req, res, next){
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
})

// Use routes
app.use("/companies", companies);
app.use("", home);
app.use("/investors", investors);
app.use("/services", services);
app.use("/users", users);
app.use('/about', about);
app.use("/registerentity", registerentity);
app.use("/registerCompany", registerCompany);
app.use("/registerInvestor", registerInvestor);
app.use("/registerService", registerService);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
