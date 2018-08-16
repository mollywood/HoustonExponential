const bcrypt = require("bcryptjs");

"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      linkedinprofile: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          return bcrypt.hash(user.password, 10)
            .then((hash) => {
              user.password = hash;
              return user
            })
            .catch((err) => {console.log(err)});
        }
      }
    }
  );
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
