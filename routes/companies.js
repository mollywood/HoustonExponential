const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");

// @route GET routes/companies
// @desc Display companies on companies.hbs page
// @access Public
router.get('', (req,res) => {
  db.Company.findAll().then((companies) => {
    res.render('companies', {companyList: companies})
  });
});

// @route GET routes/companies/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("#", {
    title: "Register a Company"
  });
});

// @route POST routes/companies/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

// display companies on /companies page
router.get("", function(req, res) {
  db.Company.findAll().then(function(companies) {
    res.render("companies", { companyList: companies });
  });
});

router.post("/companies", (req, res) => {
  db.Company.findAll({ where: j }).then();
});

module.exports = router;
