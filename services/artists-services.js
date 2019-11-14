const ArtistDomain = require("../models/artist-domain");
const ArtistModel = require("../models/artist-model");

module.exports = {
  add(name, image, albums, callback) {
    const newArtist = new ArtistModel(new ArtistDomain(name, image, albums));
    newArtist.save().then(callback);
  },
  findAll(callback) {
    ArtistModel.find().then(callback);
  },

  findById(id, callback) {
    ArtistModel.findById(id).then(callback);
  },

  removeArtist(id, callback){
    ArtistModel.deleteOne({_id: id}).then(callback)
  },

  update_Artist_Image(id,image,callback){
    console.log(image)
    ArtistModel.updateOne({_id: id},{$set: {image}}).then(callback)
  },

  update_Artist_Name(id,name,callback){
    console.log(name)
    ArtistModel.updateOne({_id: id},{$set: {name}}).then(callback)
  }

};