const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');

// @route GET routes/investors/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("register-investor", {
    title: "Register an Investor"
  });
});

// @route POST routes/investors/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

// display investors on /investors
db.get('/investors', function(req,res){
  models.Investors.findAll().then(function(investors){
    res.render('/investors', {investorList: investors})
  })
})

module.exports = router;
