const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const validateLogin = require("./routeProtection").validateLogin;

// @route GET routes/companies
// @desc display companies on /companies page
// @access Public
router.get("", (req, res) => {
  db.Company.findAll().then(companies => {
    res.render("companies", { companyList: companies });
  });
});

// @route POST routes/companies/register
// @desc
// @access Protected
router.get("/register", validateLogin, (req, res) => {
  res.render("registerCompany", {});
});

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
      res.redirect("/companies")
    } else {
		    res.render("registerCompany", {
		    message: "Company already exists"});
      };
  });
});

// @route routes/companies/companyprofile
// @desc POST display company's profile page
// @access Public
router.post("/companyprofile", (req,res) => {
  db.Company.findOne({
    where: {
      id : req.body.company_id
    }
  }).then(function(company) {
    res.render("companyprofile", {companyInfo: company.dataValues})
    })
})

router.get("/get_all", function(req, res) {
  db.Company.findAll().then(function(companies) {
    res.json({ companies: companies });
  });
});

module.exports = router;
