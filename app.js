const express = require("express");
// const routes = require("./routes");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models/index.js");
const app = express();
const passport = require("passport");
var LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

app.use(express.static("public"));
// app.use(express.cookieParser());
// app.use(express.bodyParser());
// app.use(express.session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: "78umadn462runs",
      clientSecret: "JzPt9cNwIpvkSQZ1",
      callbackURL: "http://127.0.0.1:8000/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_basicprofile"]
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function() {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        // console.log(profile);
        // console.log(profile._json.firstName);
        // console.log(profile._json.lastName);
        // profile._json.id
        // profile._json.firstName
        // profile._json.lastName
        // profile._json.emailAddress
        // profile._json.publicProfileUrl

        return done(null, profile);
      });
    }
  )
);

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

app.get("/api/data", (req, res) => {});

app.get("/", (req, res) => {
  console.log(req.user);
  res.render("home", {
    title: "Welcome",
    message: "Hello world",
    subheading: "It's nice to meet you"
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Register",
    message: "Hello world",
    subheading: "It's nice to meet you"
  });
});

app.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", { state: "SOME STATE" }),
  function(req, res) {
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  }
);

app.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/",
    failureRedirect: "/register"
  })
);

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
