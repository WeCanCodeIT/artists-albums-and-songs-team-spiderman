const AlbumsDomain = require("../models/artist-domain");
const AlbumsModel = require("../models/album-model");

module.exports = {
    add(title, image, songs, recordLabel) {
        const newAlbum = new AlbumsModel(new AlbumsDomain(title, image, songs, recordLabel));
        newAlbum.save().then(callback);
            //AlbumModel.findById(AlbumId).then(Album => {
            //Album.songs.push(newSong);
            //Album.save().then(Album => {
            //});
          //});
          //newAlbum.save().then(callback);
        //findAll(callback) {
          //ArtistModel.find().then(callback);
        //}
      //};
    }
};