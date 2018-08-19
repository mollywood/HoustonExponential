"use strict";
module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define(
    "Service",
    {
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
      bio: DataTypes.STRING,
      logo: DataTypes.STRING,
      userid: DataTypes.UUID
    },
    {}
  );
  Service.associate = models => {
    Service.hasOne(Users.id, { as: "User ID", foreignKey: "userid" });
  };
  return Service;
};
