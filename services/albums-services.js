const AlbumsDomain = require("../models/album-domain");
const AlbumModel = require("../models/album-model");

module.exports = {
  add(artistName, title, image, recordLabel, callback) {
      const newAlbum = new AlbumsModel(new AlbumsDomain(artistName, title, image, recordLabel));
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