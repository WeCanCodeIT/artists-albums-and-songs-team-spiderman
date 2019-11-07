const AlbumDomain = require("../models/album-domain");
const AlbumModel = require("../models/album-model");

module.exports = {
  add(title, image, recordLabel, songs, callback) {
      const newAlbum = new AlbumModel(new AlbumDomain(title, image, recordLabel, songs));
      newAlbum.save().then(callback);
  },
  findAll(callback) {
      AlbumModel.find().then(callback);
  },
  removeAlbum(id, callback){
    AlbumModel.deleteOne({_id: id}).then(callback);
  },

  updateAlbum(id,title,callback){
    AlbumModel.updateOne({_id: id},{$set: {title}}).then(callback)
  }
     
};