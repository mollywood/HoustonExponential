'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Companies", "bio", {
        type: Sequelize.STRING(500000)
      }),
      queryInterface.changeColumn("Services", "bio", {
        type: Sequelize.STRING(500000)
      }),
      queryInterface.changeColumn("Investors", "bio", {
        type: Sequelize.STRING(500000)
      })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Companies", "bio", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Services", "bio", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Investors", "bio", {
        type: Sequelize.STRING
      })
    ]
  }
};
