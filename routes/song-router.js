var express = require('express');
var router = express.Router();

const SongController = require("../controllers/song-controller")

router.get("/", SongController.getAllSongs);

router.post("/", SongController.addNewSong);

router.delete("/", SongController.removeOneSong);

router.put("/", SongController.updateOneSong);

module.exports = router;
