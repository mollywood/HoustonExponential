const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");

// @route GET routes/investors
// @desc Display investors on investors.hbs page
// @access Public
router.get("", (req, res) => {
  db.Investor.findAll().then(investors => {
    res.render("investors", { investorList: investors });
  });
});

// @route GET routes/investors/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("#", {
    title: "Register an Investor"
  });
});

// @route POST routes/investors/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

router.get("/get_all", function(req, res) {
  db.Investor.findAll().then(function(investors) {
    res.json({ investorList: investors });
  });
});

module.exports = router;
