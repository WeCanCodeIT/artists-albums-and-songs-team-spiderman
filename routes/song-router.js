var express = require('express');
var router = express.Router();

const SongController = require("../controllers/song-controller")

router.get("/", SongController.getAllSongs);

router.post("/", SongController.addNewSong);

module.exports = router;
