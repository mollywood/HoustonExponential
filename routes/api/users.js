const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

// Load User model
const db = require('../../models/index');

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({msg: 'User works'}));

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.post('/register', (req, res) => {
  db.User.findOne({
    where: Sequelize.or({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    })
  })
  .success(function (user) {
    if (!user) {
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          password2: req.body.password2
        });
    }
  });
});

module.exports = router;
