const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');


router.get('', (req, res) => {
    res.render("registerService", {});
});

router.post("", (req, res) => {
	db.Service.findOrCreate({
	  where: {
		name: req.body.sname
	  },
	  defaults: {
		logo: req.body.logo,
		description: req.body.sdescription,
		type: req.body.type,
		location: req.body.slocation,
		batchSize: req.body.batchSize,
		academiaSupported: req.body.academiaSupported,
		associatedFund: req.body.associatedFund,
		website: req.body.website,
		founded: req.body.foundedDate,
		contact: req.body.contact,
		bio: req.body.bio
	  }
	}).spread((service, created) => {
	  if (created) {
		res.render("services", {});
	  } else {
		res.render("registerService", {
		  message: "Service Hub already exists"
		});
	  }
	});
  });

module.exports = router;