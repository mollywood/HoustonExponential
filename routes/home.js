const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require('../models/index');
const app = require("../app")
const Op = Sequelize.Op

// @route GET /
// @desc Renders home.hbs view and queries database for companies
// @access Public
router.get("/", (req, res) => {
  db.Company.findAll().then(result => {
    res.render("home", {
      title: "Welcome",
      companies: result
    });
  });
});

// @ route POST /globalsearch
// @ desc Makes an API call for search
// @ access Public
router.post("/globalsearch", (req, res) => {

  function titleCase(str) {
    str = str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
  })
   return str.join(' ')
  }

  var queryString = titleCase(req.body.name);

  var resultsArray = []

  var results = 0
  var responded = false
  if(req.body && req.body.name){
    console.log(req.body)
    db.Company.findAll({ 
      where: {
         name: { $like: '%' + queryString + '%'} } })
         .then((companies)=> {
      console.log(companies)
      if(companies && companies.length){
        if(resultsArray.length){
          resultsArray = [resultsArray? resultsArray : null, ...companies]
        }
        else{
          resultsArray = companies
        }
      }

      results = results + 1
      respond()
    });

    db.Service.findAll({ 
      where: { 
        name: { $like: '%' + queryString + '%'} } }  )
        .then((services) =>{
      if(services && services.length){
        if(resultsArray.length){
          resultsArray = [resultsArray? resultsArray : null, ...services]
        }
        else{
          resultsArray = services
        }

      }

      results = results + 1
      respond()
    });


    db.Investor.findAll({ 
      where: { 
        name: { $like: '%' + queryString + '%'} } }  )
        .then((investors)=> {
      if(investors && investors.length){
        if(resultsArray.length){
          resultsArray = [resultsArray, ...investors]
        }
        else{
          resultsArray = investors
        }

      }
      results = results + 1
      respond()
    })

    

    function respond(){

      if(!responded && results >= 3){
        responded = true
        return res.status(200).json({ results: resultsArray });
      }
    }

  
  }

});


module.exports = router;
