const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models');
const passport = require("passport");
const validateLogin = require('./routeProtection').validateLogin;


router.get('', validateLogin, (req, res) => {
    res.render("registerEntity", {});
});

module.exports = router;
