const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require("./routeProtection").validateLogin;

// @route GET routes/investors
// @desc Queries database and displays investors on page
// @access Public
router.get("", (req, res) => {
  db.Investor.findAll().then(investors => {
    res.render("investors", { investorList: investors });
  });
});

// @route GET routes/investors/register
// @desc Renders registerInvestor.hbs view
// @access Protected
router.get("/register", (req, res) => {
  res.render("registerInvestor", {});
});

// @route POST routes/investors/register
// @desc Posts Investor inputs into database
// @access Protected
router.post("/register", (req, res) => {
  db.Investor.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      logo: req.body.logo,
      description: req.body.description,
      investorType: req.body.investorType,
      location: req.body.location,
      investmentThesis: req.body.investmentThesis,
      investmentRange: req.body.investmentRange,
      foundedDate: req.body.foundedDate,
      managedAssets: req.body.managedAssets,
      portfolioSize: req.body.portfolioSize,
      website: req.body.websiteUrl,
      contact: req.body.contact,
      bio: req.body.bio
    }
  }).spread((investor, created) => {
    if (created) {
      res.redirect("/investors");
    } else {
      res.render("registerInvestor", {
        message: "Investor already exists"
      });
    }
  });
});

// @route POST routes/investors/investorprofile
// @desc display investors profile page
// @access Public
router.post("/investorprofile", (req, res) => {
  db.Investor.findOne({
    where: {
      id: req.body.investor_id
    }
  }).then(function(investor) {
    res.render("investorprofile", { investorInfo: investor.dataValues });
  });
});

// @route GET routes/investors/get_all
// @desc Queries database and sends investors data in json
// @access Public
router.get("/get_all", function(req, res) {
  db.Investor.findAll().then(function(investors) {
    res.json({ investorList: investors });
  });
});

module.exports = router;
