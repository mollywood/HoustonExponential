const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require("./routeProtection").validateLogin;

router.get("", validateLogin, (req, res) => {
  res.render("registerCompany", {});
});

router.post("", validateLogin, (req, res) => {
  db.Company.findOrCreate({
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
      bio: req.body.bio
    }
  }).spread((company, created) => {
    if (created) {
      res.render("companies", {});
    } else {
      res.render("registerCompany", {
        message: "Company already exists"
      });
    }
const db = require('../models/index');
const validateLogin = require('./routeProtection').validateLogin;

router.get('', validateLogin, (req, res) => {
    res.render("registerEntity", {});
});

module.exports = router;

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
		userid: req.session.user
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
});
module.exports = router;
