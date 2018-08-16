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
    },  {
      hooks: {
        beforeCreate: (user, options) => {
          bcrypt.genSalt(10, (err, salt) => {
            console.log(user.password)
            bcrypt.hash(user.password, salt, (err, hash) => {
              if(err) console.log(err);
              user.password = hash;
              user.save()
                .then((savedUser)=>{console.log(savedUser)})
                  .catch((error)=>{console.log(error)})
            });
          });
        }
      }
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
