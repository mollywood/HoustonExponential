const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')
const app = express()
let db = require('./models/index.js')

db.User.findOrCreate({ where:
  {firstName: 'Test'},
  defaults:
  {lastName: 'Testy',
  email: 'test@gmail.com',
  password: 'qwerty1',
  password2: 'qwerty1'}
}).spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
})





// User
//   .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
//   .spread((user, created) => {
//     console.log(user.get({
//       plain: true
//     }))
