const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const validateLogin = require('./routeProtection').validateLogin;


router.get('', validateLogin, (req, res) => {
    res.render("viewprofile", {});
});
router.post("viewprofile", (req, res) => {
	db.Company.findOne({
		where: {
			userid: req.body.user
		}
	}).then(function(company) {
		if (company) {
			res.render("companyprofile", { companyInfo: company.dataValues });
	} else {
		db.Investor.findOne({
			where: {
				userid: req.body.user
			}
		}).then(function(investor) {
			if (investor) {
				res.render("investorprofile", { investorInfo: investor.dataValues });
		}
			else {
				db.Service.findOne({
					where: {
						userid: req.body.user
					}
				}).then(function(service) {
					if (service) {
					res.render("serviceprofile", { serviceInfo: service.dataValues });
				}
					else {
						//throw error
					}});
				}});
	}});
});