"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return [
			queryInterface.changeColumn(
		'Companies',
		'userid',
		{
		  type: Sequelize.STRING,
		  references: {
			model: "Users",
			key: "id"
		  }
		})
	];
	},

	down: (queryInterface, Sequelize) => {
		return [
			queryInterface.changeColumn(
		'Companies',
		'userid',
		{
		  type: Sequelize.UUID,
		  references: {
			model: "Users",
			key: "id"
		  }
		})
	];
}}