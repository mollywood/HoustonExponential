"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Services", "userid", {
      type: Sequelize.UUID,
      references: {
        model: "Users",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Services", "userid");
  }
};
