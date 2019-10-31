var express = require('express');
var router = express.Router();

const ArtistController = require("../controllers/artists-controller")

// GET All Artists
router.get("/", ArtistController.getAllArtists);

// POST New Artist
router.post("/", ArtistController.addNewArtist);

module.exports = router;