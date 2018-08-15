'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'password2'
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'password2', {
        type: Sequelize.STRING
      }
    );
  }
};
