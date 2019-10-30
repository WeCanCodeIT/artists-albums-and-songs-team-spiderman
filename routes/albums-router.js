var express = require('express');
var router = express.Router();

const AlbumsController = require("../controllers/albums-controller")

router.get("/", AlbumsController.getAllAlbums);

module.exports = router;