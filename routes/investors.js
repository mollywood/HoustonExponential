const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');

// @route GET routes/investors
// @desc Display investors on investors.hbs page
// @access Public
router.get('', (req,res) => {
  db.Investor.findAll().then((investors) => {
    res.render('investors', {investorList: investors})
  });
});

// @route GET routes/investors/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("#", {
    title: "Register an Investor"
  });
});

// @route POST routes/investors/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

// @route POST routes/investors/investorprofile
// @desc display investors profile page
// @access Public
router.post("/investorprofile", (req,res) => {
  
  db.Investor.findOne({
    where: {
      id : req.body.investor_id
    }
  }).then(function(investor) {
    res.render("investorprofile", {investorInfo: investor.dataValues})
    })
})


module.exports = router;
