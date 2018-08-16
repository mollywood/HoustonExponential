"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn("Users", "linkedinprofile", {
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Users", "linkedinprofile");
  }
};
