const express = require("express");
const router = express.Router();


// @route GET /
// @desc Renders about.hbs view
// @access Public
router.get("/about", (req, res) => {
    res.render("about", {
      title: "About"
    });
  });


module.exports = router;
