const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');


router.get('', (req, res) => {
    res.render("registerService", {});
});

module.exports = router;