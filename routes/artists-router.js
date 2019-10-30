var express = require('express');
var router = express.Router();

const ArtistController = require("../controllers/artists-controller")

router.get("/", ArtistController.getAllArtists);

module.exports = router;