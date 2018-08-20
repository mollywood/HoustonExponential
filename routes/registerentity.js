const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const passport = require("passport");


router.get('', passport.authenticate("jwt", {session: false}), (req, res) => {
    res.render("registerentity", {});
});

module.exports = router;
