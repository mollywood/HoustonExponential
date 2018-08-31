const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require("./routeProtection").validateLogin;

// @route GET routes/companies
// @desc Queries database and displays companies on page
// @access Public
router.get("", (req, res) => {
  db.Company.findAll().then(companies => {
    res.render("companies", { companyList: companies });
  });
});

// @route GET routes/companies/register
// @desc Renders registerCompany.hbs view
// @access Protected
router.get("/register", (req, res) => {
  res.render("registerCompany", {});
});

// @route POST routes/companies/register
// @desc Posts Company inputs into database
// @access Protected
router.post("/register", (req, res) => {
  db.Company.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      logo: req.body.logo,
      description: req.body.description,
      category: req.body.category,
      location: req.body.location,
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
      res.redirect("/companies");
    } else {
      res.render("registerCompany", {
        message: "Company already exists"
      });
    }
  });
});

// @route POST routes/companies/companyprofile
// @desc Displays company's profile page
// @access Public
router.post("/companyprofile", (req, res) => {
  db.Company.findOne({
    where: {
      id: req.body.company_id
    }
  }).then(function(company) {
    res.render("companyprofile", { companyInfo: company.dataValues });
  });
});

// @route GET routes/companies/get_all
// @desc Queries database and sends companies data in json
// @access Public
router.get("/get_all", function(req, res) {
  db.Company.findAll().then(function(companies) {
    res.json({ companies: companies });
  });
});

module.exports = router;
