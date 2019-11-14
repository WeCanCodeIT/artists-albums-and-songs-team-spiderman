var express = require('express');
var router = express.Router();

const SongController = require("../controllers/song-controller")

router.get("/", SongController.getAllSongs);

router.get("/:id", SongController.getSongById);

router.post("/", SongController.addNewSong);

router.delete("/", SongController.removeOneSong);

router.patch("/", SongController.updateOneSong);

module.exports = router;
