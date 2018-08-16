"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("Services", "bio", {
        type: Sequelize.STRING
      }),

      queryInterface.addColumn("Services", "logo", {
        type: Sequelize.STRING
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn("Services", "bio"),
      queryInterface.removeColumn("Services", "logo")
    ];
  }
};
