const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
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
    return res.status(400).json(errors);
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
      res.render("login", {});
    } else {
        errors.email = "Email already exist"
        return res.status(400).json(errors);
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
  const {errors, isValid} = validateLoginInput(req.body);
  if(!isValid) {
    return res.status(400).json(errors);
  }

  db.User.findOne({
    where: {
      email: req.body.email,
    }
  }).then(user => {
    if(!user)  {
      errors.email = "User not found"
      return res.status(404).json(errors);
    }

    //Checks for password
    bcrypt.compare(req.body.password, user.password)
      .then(isMatch => {
        if(isMatch) {
          //Create JWT payload
          const payload = { id: user.id, email: user.email}
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {expiresIn: 3600},
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password is incorrect"
          return res.status(400).json(errors);
        }
    });
  });
});

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

// @route GET routes/users/current
// @desc Return current user
// @access Private
router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
     firstName: req.user.firstName,
     lastName: req.user.lastName,
     email: req.user.email,
     linkedinprofile: req.user.linkedinprofile,
     createdAt: req.user.createdAt,
     updatedAt: req.user.updatedAt
  });
});

module.exports = router;
