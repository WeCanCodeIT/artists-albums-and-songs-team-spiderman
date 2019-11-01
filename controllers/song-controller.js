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
  },

  removeOneSong(req,res){
    const id = req.body
    SongServices.removeSong(id, response => {
      res.json({ response });
    })
  },

  updateOneSong(req,res){
    // const revision = req.body;
    const {_id,year} = req.body;
    // console.log(year)
    // console.log(req.body)
    console.log({_id,year})
    // console.log(_id)
    // console.log(year)
    SongServices.updateSong(_id, year, response => {
    res.json({ response });
    })
  },
}