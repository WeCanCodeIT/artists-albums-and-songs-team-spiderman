const ArtistDomain = require("../models/artist-domain");
const ArtistModel = require("../models/artist-model");

module.exports = {
  add(name, image, recordLabel, callback) {
    const newArtist = new ArtistModel(new ArtistDomain(name, image, recordLabel));
    newArtist.save().then(callback);
  },
  findAll(callback) {
    ArtistModel.find().then(callback);
  }
};