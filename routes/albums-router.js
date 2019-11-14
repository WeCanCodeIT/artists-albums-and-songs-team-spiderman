var express = require('express');
var router = express.Router();

const AlbumsController = require("../controllers/albums-controller")

router.get("/", AlbumsController.getAllAlbums);

// GET One Album by ID
router.get("/:id", AlbumsController.getOneAlbum);

router.post("/", AlbumsController.addNewAlbum);

router.delete("/", AlbumsController.removeOneAlbum);

router.put("/:id", AlbumsController.pushOneSongToAlbum)

router.patch("/", AlbumsController.updateOneAlbum);

module.exports = router;