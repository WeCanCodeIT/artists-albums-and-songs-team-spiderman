const ArtistsService = require("../services/artists-services");

module.exports = {
  addNewArtist(req, res) {
    const { name, image, recordLabel } = req.body;

    ArtistsService.add(name, image, recordLabel, response => {
      res.json({ response });

      console.log({ response });
    });
  },

  getAllArtists(req, res) {
    ArtistsService.findAll(Artists => {
      res.json({ Artists });
    });
  },

  removeOneArtist(req, res) {
    const id = req.body;
    ArtistsService.removeArtist(id, response => {
      res.json({ response });
    });
  },

  updateOneArtist(req, res) {
    const { _id, image } = req.body;
    ArtistsService.updateArtist(_id, image, response => {
      res.json({ response });
    });
  }
};
