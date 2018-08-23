const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require("./routeProtection").validateLogin;

// @route GET routes/investors
// @desc Display investors on investors.hbs page
// @access Public
router.get("", (req, res) => {
  db.Investor.findAll().then(investors => {
    res.render("investors", { investorList: investors });
  });
});

router.get("/register", (req, res) => {
    res.render("registerInvestor", {});
});

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
		investmentThesis: req.body.investmentThesis,
		foundedDate: req.body.foundedDate,
		managedAssets: req.body.productStage,
		portfolioSize: req.body.businessModel,
		website: req.body.websiteUrl,
		contact: req.body.contact,
		bio: req.body.bio,
	  }
	}).spread((investor, created) => {
	  if (created) {
		res.redirect("/investors")
	  } else {
		  res.render("registerInvestor", {
		  message: "Investor already exists"});
    };
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

router.get("/get_all", function(req, res) {
  db.Investor.findAll().then(function(investors) {
    res.json({ investorList: investors });
  });
});

module.exports = router;
