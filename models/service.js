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
    associatedFund: DataTypes.STRING,
    bio: DataTypes.STRING(500000),
    logo: DataTypes.STRING
  }, {});
  Service.associate = (models) => {
    // associations can be defined here
  };
  return Service;
};
