const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const db = require("../models/index");

router.use(passport.initialize());
router.use(passport.session());

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

// @route GET routes/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({msg: 'User works'}));

// // @route GET routes/users/register
// // @desc Renders register.hbs view
// // @access Public
router.get("/register", (req, res) => {
  res.render("register", {
  });
});

// @route POST routes/users/register
// @desc Posts user inputs into database
// @access Public
router.post("/register", (req, res) => {
  db.User.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    }
  }).spread((user, created) => {
    if (created) {

    } else {
      res.render("register", {
        message: "User already exist"
      });
    }
  });
});

// @route GET routes/users/login
// @desc Renders login.hbs view
// @access Public
router.get("/login", (req, res) => {
  res.render("login", {
  });
});

// @route POST routes/users/login
// @desc
// @access Public
router.post("/login", (req, res) => {});

// @route GET routes/users/linkedin
// @desc
// @access Public
router.get(
  "/linkedin",
  passport.authenticate("linkedin", { state: "SOME STATE" }),
  (req, res) => {
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  }
);

// @route GET routes/users/linkedin/callback
// @desc
// @access Public
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/",
    failureRedirect: "/register"
  })
);

module.exports = router;
