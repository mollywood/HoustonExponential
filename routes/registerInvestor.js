const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const validateLogin = require('./routeProtection').validateLogin;


router.get('', (req, res) => {
    res.render("registerInvestor", {});
});

router.post("", (req, res) => {
	db.Investor.findOrCreate({
	  where: {
		name: req.body.iname
	  },
	  defaults: {
		logo: req.body.logo,
		description: req.body.idescription,
		investorType: req.body.investorType,
		location: req.body.ilocation,
		investmentThesis: req.body.investmentThesis,
		investmentThesis: req.body.investmentThesis,
		foundedDate: req.body.foundedDate,
		managedAssets: req.body.productStage,
		portfolioSize: req.body.businessModel,
		website: req.body.websiteUrl,
		contact: req.body.contact,
		bio: req.body.bio,
		userid: req.session.user
	  }
	}).spread((investor, created) => {
	  if (created) {
		res.render("investors", {});
	  } else {
		res.render("registerInvestor", {
		  message: "Investor already exists"
		});
	  }
	});
  });
module.exports = router;