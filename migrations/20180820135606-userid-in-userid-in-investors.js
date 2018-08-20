"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Investors", "userid", {
      type: Sequelize.UUID,
      references: {
        model: "Users",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Investors", "userid");
  }
};
