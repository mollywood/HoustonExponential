const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');

// @route GET routes/hub/register
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("register-hub", {
    title: "Register a Hub"
  });
});

// @route POST routes/hub/register
// @desc
// @access Protected
router.post("/register", (req, res) => {});

//display hubs on /hubs
db.get('/hubs', function(req,res){
  models.Service.findAll().then(function(hubs){
    res.render('/hubs', {hubList: hubs})
  })
})

module.exports = router;
