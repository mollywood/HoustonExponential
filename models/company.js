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
<<<<<<< HEAD
      bio: DataTypes.STRING(500000)
=======
      bio: DataTypes.STRING,
      userid: DataTypes.UUID
>>>>>>> 1ef4eaaa71dc2449cc66437663c4a73b23e6929e
    },
    {}
  );
  Company.associate = models => {};
  return Company;
};
