const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');

// @route GET /
// @desc Renders home.hbs view
// @access Public
router.get("/", (req, res) => {
  db.Company.findAll().then(result => {
    res.render("home", {
      title: "Welcome",
      companies: result
    });
  });
});

module.exports = router;
