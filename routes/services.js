const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');

// @route GET routes/companies
// @desc Display services on services.hbs page
// @access Public
router.get('', (req,res) => {
  db.Service.findAll().then((services) => {
    res.render('services', {serviceList: services})
  });
});

// @route GET routes/services/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("#", {
    title: "Register a Hub"
  });
});

// @route POST routes/services/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

module.exports = router;
