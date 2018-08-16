"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("Investors", "bio", {
        type: Sequelize.STRING
      }),

      queryInterface.addColumn("Investors", "logo", {
        type: Sequelize.STRING
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("Investors", "bio"),
      queryInterface.removeColumn("Investors", "logo")
    ];
  }
};
