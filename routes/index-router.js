var express = require('express');
var router = express.Router();

// GET Home Page
router.get("/", function(req, res, next) {
  res.redirect("/artist");
});

module.exports = router;