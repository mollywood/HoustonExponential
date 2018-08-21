const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const passport = require("passport");
const validateUserLogin = require('./routeProtection').validateUserLogin;


router.get('', validateUserLogin, (req, res) => {
    res.render("registerEntity", {});
});

module.exports = router;
