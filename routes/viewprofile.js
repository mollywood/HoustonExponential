const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const validateLogin = require('./routeProtection').validateLogin;


router.get('', validateLogin, (req, res) => {
	console.log(req.session.email);
	db.Company.findOne({
		where: {
			userid: req.session.email
		}
	}).then(function(company) {
		if (company) {
			res.render("companyprofile", { companyInfo: company.dataValues });
	} else {
		db.Investor.findOne({
			where: {
				userid: req.session.email
			}
		}).then(function(investor) {
			if (investor) {
				res.render("investorprofile", { investorInfo: investor.dataValues });
		}
			else {
				db.Service.findOne({
					where: {
						userid: req.session.email
					}
				}).then(function(service) {
					if (service) {
					res.render("serviceprofile", { serviceInfo: service.dataValues });
				}
					else {
						res.render("registerentity", {});
					}});
				}});
	}});
});

module.exports = router;
