"use strict";
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be953d307ca5a2946640b1dfefac1ad2f893457c
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
<<<<<<< HEAD
    logo: DataTypes.STRING
=======
    logo: DataTypes.STRING,
    userid: DataTypes.UUID
>>>>>>> be953d307ca5a2946640b1dfefac1ad2f893457c
  }, {});
  Service.associate = (models) => {
    // associations can be defined here
  };
<<<<<<< HEAD
=======
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
  Service.associate = models => {};
>>>>>>> 1ef4eaaa71dc2449cc66437663c4a73b23e6929e
=======
>>>>>>> be953d307ca5a2946640b1dfefac1ad2f893457c
  return Service;
};
