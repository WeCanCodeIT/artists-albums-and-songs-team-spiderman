var express = require('express');
var router = express.Router();

const AlbumsController = require("../controllers/albums-controller")

router.get("/", AlbumsController.getAllAlbums);

router.post("/", AlbumsController.addNewAlbum);

router.delete("/", AlbumsController.removeOneAlbum);

router.patch("/", AlbumsController.updateOneAlbum);

module.exports = router;