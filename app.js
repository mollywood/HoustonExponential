const express = require("express");
const app = express();
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const keys = require("./config/keys")

const companies = require("./routes/companies");
const home = require("./routes/home");
const investors = require("./routes/investors");
const services = require("./routes/services");
const users = require("./routes/users");
const registerentity = require("./routes/registerentity");
const registerCompany = require("./routes/registerCompany");
const registerInvestor = require("./routes/registerInvestor");
const registerService = require("./routes/registerService");

// Authentication packages
// const session = require("express-session");
const cookieSession = require("cookie-session");
const passport = require("passport");
// const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

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

app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: keys.sessionKey,
//     resave: false,
//     saveUninitialized: false
// }))

app.use(cookieSession({
  name: 'session',
  keys: keys.sessionKey,
  maxAge: 6 * 60 * 60 * 1000 // 6 hours
}));

// // Passport Middleware
// app.use(passport.initialize());
// // app.use(passport.session());
//
// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: "78umadn462runs",
//       clientSecret: "JzPt9cNwIpvkSQZ1",
//       callbackURL: "http://127.0.0.1:8000/users/linkedin/callback",
//       scope: ["r_emailaddress", "r_basicprofile"]
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // asynchronous verification, for effect...
//       process.nextTick(function() {
//         db.User.findOrCreate({
//           where: {
//             email: profile._json.emailAddress
//           },
//           defaults: {
//             firstName: profile._json.firstName,
//             lastName: profile._json.lastName,
//             linkedinprofile: profile._json.publicProfileUrl
//           }
//         });
//         return done(null, profile);
//       });
//     }
//   )
// );

// Use routes
app.use("/companies", companies);
app.use("", home);
app.use("/investors", investors);
app.use("/services", services);
app.use("/users", users);
app.use("/registerentity", registerentity);
app.use("/registerCompany", registerCompany);
app.use("/registerInvestor", registerInvestor);
app.use("/registerService", registerService);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
