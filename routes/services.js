const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require("./routeProtection").validateLogin;

// @route GET routes/services
// @desc Queries database and displays services on page
// @access Public
router.get("", (req, res) => {
  db.Service.findAll().then(services => {
    res.render("services", { serviceList: services });
  });
});

// @route GET routes/services/register
// @desc Renders registerService.hbs view
// @access Protected
router.get("/register", (req, res) => {
  res.render("registerService", {});
});

// @route POST routes/services/register
// @desc Posts Service inputs into database
// @access Protected
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
      founded: req.body.founded,
      contact: req.body.contact,
      bio: req.body.bio
    }
  }).spread((service, created) => {
    if (created) {
      res.redirect("/services");
    } else {
      res.render("registerService", {
        message: "Service already exists"
      });
    }
  });
});

// @route POST routes/services/serviceprofile
// @desc displays service profile page
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

// @route GET routes/investors/get_all
// @desc Queries database and sends services data in json
// @access Public
router.get("/get_all", function(req, res) {
  db.Service.findAll().then(function(services) {
    res.json({ serviceList: services });
  });
});

module.exports = router;
