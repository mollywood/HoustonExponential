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

module.exports = router;
