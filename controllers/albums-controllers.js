const AlbumsService = require("../services/albums-service");

module.exports = {
    addNewAlbums(req, res) {
        const {title, image, songs, recordLabel } = req.body;

        AlbumsService.add(title, image, songs, recordLabel => {
            res.json({respone});
        });
    },
    getAllAlbums(req, res) {
        AlbumsService.findAll(Albums => {
            res.json(Albums);
        });
    }
};