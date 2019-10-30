const ArtistDomain = require("../models/artist-domain");
const ArtistModel = require("../models/artist-model");

module.exports = {
  add(name, image, album, recordLabel, callback) {
    const newArtist = new ArtistModel(new ArtistDomain(name, image, album, recordLabel));
    newArtist.save().then(callback);
  },
  findAll(callback) {
    ArtistModel.find().then(callback);
  }
};