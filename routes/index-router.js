var express = require('express');
var router = express.Router();

// GET Home Page
router.get("/", function(req, res, next) {
  res.redirect("/artists");
});

module.exports = router;