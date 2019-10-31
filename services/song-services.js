
const SongDomain = require("../models/song-domain");
const SongModel = require("../models/song-model");

module.exports = {
  add(name, artist, album, recordLabel, year, callback) {
    const newSong = new SongModel(new SongDomain(name, artist, album, recordLabel, year));
    newSong.save().then(callback);
  },
  findAll(callback) {
    SongModel.find().then(callback);
  },

  removeSong(id, callback){
    SongModel.deleteOne({_id: id}).then(callback)
  }
};