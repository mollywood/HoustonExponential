const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const keys = require("../config/keys")

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// @route GET routes/users/register
// @desc Renders register.hbs view
// @access Public
router.get("/register", (req, res) => {
  res.render("register", {});
});

// @route POST routes/users/register
// @desc Posts user inputs into database
// @access Public
router.post("/register", (req, res) => {
  const {errors, isValid} = validateRegisterInput(req.body);
  if(!isValid) {
    return res.render("register", { errors: errors });
  }

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
      req.session.user = user.id
      res.render("login", {});
    } else {
        errors.email = "Email already exist"
        return res.render("register", { errors: errors });
      };
    });
});

// @route GET routes/users/login
// @desc Renders login.hbs view
// @access Public
router.get("/login", (req, res) => {
  res.render("login", {});
});

// @route POST routes/users/login
// @desc Login User / Return JsonWebToken
// @access Public
router.post("/login", (req, res) => {

  req.session = { user: null }
  const {errors, isValid} = validateLoginInput(req.body);
  if(!isValid) {
    return res.render("login", { errors: errors });
  }

  db.User.findOne({
    where: {
      email: req.body.email,
    }
  }).then(user => {
    if(!user)  {
      errors.email = "User not found"
      return res.render("login", { errors: errors });
    }

    //Checks for password
    bcrypt.compare(req.body.password, user.password)
      .then(isMatch => {
        if(isMatch) {
          req.session = { user: user.id }

          res.redirect("/")
        } else {
          errors.password = "Password is incorrect"
          return res.render("login", { errors: errors });
        }
    });
  });
});

// @route POST routes/users/logout
// @desc Logs out user
// @access Public
router.get('/logout', function(req, res){
    req.session = null
    res.redirect("/");
})

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

passport.serializeUser((user, done) => {
  done(null, user.id)
});
passport.deserializeUser((user, done) => {
  db.User.findById(id).then((user) => {
    done(null, user);
  });
});

module.exports = router;
