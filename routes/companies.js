const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");

// @route GET routes/companies
// @desc Display companies on companies.hbs page
// @access Public
router.get("", (req, res) => {
  console.log("root url for companies");
  // need to access the query string which was just passed
  let stage = req.query.fundingStage;
  console.log(stage);

  db.Company.findAll({
    where: {
      fundingStage: stage
    }
  }).then(companies => {
    res.render("companies", { companyList: companies });
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
router.get("/", function(req, res) {
  console.log("root url for companies");
  // need to access the query string which was just passed
  let stage = req.query.fundingStage;
  console.log(stage);

  db.Company.findAll().then(function(companies) {
    res.render("companies", { companyList: companies });
  });
});

router.get("/foo", function(req, res) {
  res.render("foo", { foo: "Hello World" });
});

/*
router.post("/companies", (req, res) => {
  db.Company.findAll({ where: {productstage: } }).then();
}); */

module.exports = router;
