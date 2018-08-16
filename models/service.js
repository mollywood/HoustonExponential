'use strict';
module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define('Service', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    batchSize: DataTypes.STRING,
    founded: DataTypes.STRING,
    location: DataTypes.STRING,
    academiaSupported: DataTypes.STRING,
    contact: DataTypes.STRING,
    description: DataTypes.STRING,
    website: DataTypes.STRING,
    associatedFund: DataTypes.STRING
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};