const ArtistDomain = require("../models/artist-domain");
const ArtistModel = require("../models/artist-model");

module.exports = {
  add(name, image, recordLabel, callback) {
    const newArtist = new ArtistModel(new ArtistDomain(name, image, recordLabel));
    newArtist.save().then(callback);
  },
  findAll(callback) {
    ArtistModel.find().then(callback);
  },

  removeArtist(id, callback){
    ArtistModel.deleteOne({_id: id}).then(callback)
  },

  updateArtist(id,image,callback){
    console.log(image)
    ArtistModel.updateOne({_id: id},{$set: {image}}).then(callback)
  }
};