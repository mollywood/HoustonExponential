"use strict";
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 059fb4f1759a56d774befe9885e2e817a8655196
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
      bio: DataTypes.STRING
    },
    {}
  );
  Company.associate = function(models) {
<<<<<<< HEAD
=======
  var Company = sequelize.define('Company', {
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
    contact: DataTypes.STRING
  }, {});
  Company.associate = (models) => {
>>>>>>> master
=======
>>>>>>> 059fb4f1759a56d774befe9885e2e817a8655196
    // associations can be defined here
  };
  return Company;
};
