"use strict";
module.exports = (sequelize, DataTypes) => {
  var Investor = sequelize.define('Investor', {
    name: DataTypes.STRING,
    investorType: DataTypes.STRING,
    investmentThesis: DataTypes.STRING,
    investmentRange: DataTypes.STRING,
    managedAssets: DataTypes.STRING,
    portfolioSize: DataTypes.STRING,
    foundedDate: DataTypes.STRING,
    location: DataTypes.STRING,
    contact: DataTypes.STRING,
    description: DataTypes.STRING,
    website: DataTypes.STRING,
    bio: DataTypes.STRING(500000),
    logo: DataTypes.STRING,
    userid: DataTypes.UUID

  }, {});
  Investor.associate = (models) => {
    // associations can be defined here
  };
  return Investor;
};
