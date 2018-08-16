'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Investors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      investorType: {
        type: Sequelize.STRING
      },
      investmentThesis: {
        type: Sequelize.STRING
      },
      investmentRange: {
        type: Sequelize.STRING
      },
      managedAssets: {
        type: Sequelize.STRING
      },
      portfolioSize: {
        type: Sequelize.STRING
      },
      foundedDate: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Investors');
  }
};