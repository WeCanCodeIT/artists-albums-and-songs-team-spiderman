const ArtistsService = require("../services/artists-services");

module.exports = {
  addNewArtist(req, res) {
    const { name, image, albums } = req.body;

    ArtistsService.add(name, image, albums, response => {
      res.json({ response });

      console.log({ response });
    });
  },

  getOneArtist(req, res) {
    const id = req.params.id;
    ArtistsService.findById(id, ArtistInfo => {
      res.json({ ArtistInfo });
    })
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

  updateArtistImage(req, res) {
    const { _id, image } = req.body;
    ArtistsService.update_Artist_Image(_id, image, response => {
      res.json({ response });
    });
  },
  updateArtistName(req, res) {
    const { _id, name } = req.body;
    ArtistsService.update_Artist_Name(_id, name, response => {
      res.json({ response });
    });
  }

};
