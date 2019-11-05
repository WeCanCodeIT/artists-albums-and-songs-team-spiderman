
const SongDomain = require("../models/song-domain");
const SongModel = require("../models/song-model");

module.exports = {
  add(name, artist, album, recordLabel, year, video, callback) {
    const newSong = new SongModel(new SongDomain(name, artist, album, recordLabel, year, video));
    newSong.save().then(callback);
  },
  findAll(callback) {
    SongModel.find().then(callback);
  },

  removeSong(id, callback){
    SongModel.deleteOne({_id: id}).then(callback)
  },

  updateSong(id,video,callback){
console.log(video)
    SongModel.updateOne({_id: id},{$set: {video}}).then(callback)
  }
};