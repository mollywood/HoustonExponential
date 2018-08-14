const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');

// @route GET /register/company
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("register-company", {
    title: "Register a Company"
  });
});

// @route POST /register/company
// @desc
// @access Protected
router.post("/register", (req, res) => {});

module.exports = router;
