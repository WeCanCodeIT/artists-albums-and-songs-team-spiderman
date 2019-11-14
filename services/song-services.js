
const SongDomain = require("../models/song-domain");
const SongModel = require("../models/song-model");

module.exports = {
  add(name, album, video, callback) {
    const newSong = new SongModel(new SongDomain(name, album,  video));
    newSong.save().then(callback);
  },
  
  findAll(callback) {
    SongModel.find().then(callback);
  },

  findById(id, callback) {
    SingModel.finById(id).then(callback);
  },

  removeSong(id, callback){
    SongModel.deleteOne({_id: id}).then(callback)
  },

  updateSong(id,video,callback){
    console.log(video)
    SongModel.updateOne({_id: id},{$set: {video}}).then(callback)
  }
};