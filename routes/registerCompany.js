const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const validateLogin = require('./routeProtection').validateLogin;


router.get('', (req, res) => {
    res.render("registerCompany", {});
});
router.post("/registerCompany", (req, res) => {
	db.Companies.findOrCreate({
	  where: {
		name: req.body.cname
	  },
	  defaults: {
		logo: req.body.logo,
		description: req.body.cdescription,
		category: req.body.category,
		location: req.body.clocation,
		employees: req.body.employees,
		fundingstage: req.body.fundingstage,
		foundedDate: req.body.foundedDate,
		productStage: req.body.productStage,
		businessModel: req.body.businessModel,
		websiteUrl: req.body.websiteUrl,
		contact: req.body.contact,
		bio: req.body.bio,
		userid: req.session.user.id
	  }
	}).spread((company, created) => {
	  if (created) {
		res.render("companies", {});
	  } else {
		res.render("registerCompany", {
		  message: "Company already exist"
		});
	  }
	});
  });
module.exports = router;