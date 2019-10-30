const ArtistsService = require("../services/artists-services");

module.exports = {
  addNewArtist(req, res) {
    const { name, image, album, recordLabel } = req.body;

    ArtistsService.add(name, image, album, recordLabel, response => {
      res.json({ response });
    });
  },

  getAllArtists(req, res) {
    ArtistsService.findAll(Artists => {
      res.json({ Artists });
    });
  }
};