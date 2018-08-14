const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

// Load User model
const db = require('../../models/index');

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({msg: 'User works'}));

// @route GET api/users/register
// @desc
// @access Public
router.post('/register', (req, res) => {
  db.User
    .findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        password2: req.body.password2
      }
    })
    .spread((user, created) => {
      if(created) {
        // create JWT
      }
      else {
        res.json({
          message: 'User already exists'
        })
      }
    });
});


module.exports = router;
