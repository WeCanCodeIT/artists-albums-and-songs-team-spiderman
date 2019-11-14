const AlbumDomain = require("../models/album-domain");
const AlbumModel = require("../models/album-model");
const ArtistModel = require('../models/artist-model')

module.exports = {
  add(title, image, recordLabel, songs, artist, callback) {
      const newAlbum = new AlbumModel(new AlbumDomain(title, image, recordLabel, artist, songs));
      newAlbum.save().then(callback);
  },

  addSong(albumId, newSong, callback) {
    AlbumModel.updateOne({_id: albumId}, {$set: newSong}).then(callback);
  },

  findAll(callback) {
      AlbumModel.find().then(callback);
  },

  findById(id, callback) {
    AlbumModel.findById(id).then(callback)
  },

  removeAlbum(id, callback){
    AlbumModel.deleteOne({_id: id}).then(callback);
  },

  updateAlbum(id,title,callback){
    AlbumModel.updateOne({_id: id},{$set: {title}}).then(callback)
  }
     
};