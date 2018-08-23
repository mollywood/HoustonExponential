const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require('./routeProtection').validateLogin;

// @route GET routes/companies
// @desc Display services on services.hbs page
// @access Public
router.get("", (req, res) => {
  db.Service.findAll().then(services => {
    res.render("services", { serviceList: services });
  });
});

router.get("/register", (req, res) => {
    res.render("registerService", {});
});

router.post("/register", (req, res) => {
	db.Service.findOrCreate({
	  where: {
		name: req.body.name
	  },
	  defaults: {
		logo: req.body.logo,
		description: req.body.description,
		type: req.body.type,
		location: req.body.location,
		batchSize: req.body.batchSize,
		academiaSupported: req.body.academiaSupported,
		associatedFund: req.body.associatedFund,
		website: req.body.website,
		founded: req.body.foundedDate,
		contact: req.body.contact,
		bio: req.body.bio,
	  }
	}).spread((service, created) => {
	  if (created) {
		res.redirect("/services")
	  } else {
		  res.render("registerService", {
		  message: "Service already exists"});
    };
	});
});

// @route routes/services/serviceprofile
// @desc POST display service profile page
// @access Public
router.post("/serviceprofile", (req, res) => {
  db.Service.findOne({
    where: {
      id: req.body.service_id
    }
  }).then(function(service) {
    res.render("serviceprofile", { serviceInfo: service.dataValues });
  });
});

router.get("/get_all", function(req, res) {
  db.Service.findAll().then(function(services) {
    res.json({ serviceList: services });
  });
});

module.exports = router;
