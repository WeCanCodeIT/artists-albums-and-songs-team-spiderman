var express = require('express');
var router = express.Router();

const ArtistController = require("../controllers/artists-controller")

// GET All Artists
router.get("/", ArtistController.getAllArtists);

// GET One Artist
router.get("/:id", ArtistController.getOneArtist);

// POST New Artist
router.post("/", ArtistController.addNewArtist);

// REMOVE One Artist
router.delete("/", ArtistController.removeOneArtist);

// router.put("/", ArtistController.updateArtist);

module.exports = router;