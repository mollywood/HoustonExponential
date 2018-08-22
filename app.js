const express = require("express");
const app = express();
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const Sequelize = require("sequelize");
const db = require("./models/index");
const about = require('./routes/about');
const companies = require("./routes/companies");
const home = require("./routes/home");
const investors = require("./routes/investors");
const registerCompany = require("./routes/registerCompany");
const registerEntity = require("./routes/registerentity");
const registerInvestor = require("./routes/registerInvestor");
const registerService = require("./routes/registerService");
const services = require("./routes/services");
const users = require("./routes/users");

// Authentication packages
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const passport = require("passport");
const session = require("express-session");

//Middleware
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

app.use(session({
    secret: "thisshouldbechangedondeployment",
    resave: false,
    saveUninitialized: false
}))

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  // the LinkedIn API keys should be hidden on deployment
  new LinkedInStrategy(
    {
      clientID: "78umadn462runs",
      clientSecret: "JzPt9cNwIpvkSQZ1",
      callbackURL: "http://127.0.0.1:8000/users/linkedin/callback",
      scope: ["r_emailaddress", "r_basicprofile"]
    },
    (accessToken, refreshToken, profile, done) => {
      // asynchronous verification, for effect...
      process.nextTick(function() {
        db.User.findOrCreate({
          where: {
            email: profile._json.emailAddress
          },
          defaults: {
            firstName: profile._json.firstName,
            lastName: profile._json.lastName,
            linkedinprofile: profile._json.publicProfileUrl
          }
        });
        return done(null, profile);
      });
    }
  )
);

//Used to change header
app.use(function(req,res,next){
if (req.session.user) {
    res.locals.user = req.session.user;
}
next();
});

// Use routes
app.use("/companies", companies);
app.use("", home);
app.use("/investors", investors);
app.use("/services", services);
app.use("/users", users);
app.use('/about', about);
app.use("/registerEntity", registerEntity);
app.use("/registerCompany", registerCompany);
app.use("/registerInvestor", registerInvestor);
app.use("/registerService", registerService);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
