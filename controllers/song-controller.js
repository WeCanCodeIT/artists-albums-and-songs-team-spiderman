const SongServices = require("../services/song-services");

module.exports = {
  addNewSong(req, res) {
    const { name, artist, album, recordLabel, year } = req.body;

    SongServices.add(name, artist, album, recordLabel, year, response => {
      res.json({ response });
    });
  },
  getAllSongs(req, res) {
    SongServices.findAll(Song => {
      res.json(Song);
    });
  }
};