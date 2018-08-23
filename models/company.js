"use strict";
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define(
    "Company",
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      location: DataTypes.STRING,
      employees: DataTypes.STRING,
      fundingstage: DataTypes.STRING,
      foundedDate: DataTypes.STRING,
      businessModel: DataTypes.STRING,
      productStage: DataTypes.STRING,
      websiteUrl: DataTypes.STRING,
      contact: DataTypes.STRING,
      bio: DataTypes.STRING(500000),
      
    },
    {}
  );
  Company.associate = models => {};
  return Company;
};
