const AlbumsService = require("../services/albums-services");

module.exports = {
  addNewAlbum(req, res) {
      const {title, image, recordLabel, artist, songs } = req.body;

      AlbumsService.add(title, image, recordLabel, artist, songs, response => {
          res.json({response});
      });
  },

  getOneAlbum(req, res) {
    const id = req.params.id;
    console.log("album ID: " + id)
    AlbumsService.findById(id, AlbumInfo => {
      res.json({ AlbumInfo})
    });
  },
  
  
  getAllAlbums(req, res) {
      AlbumsService.findAll(Albums => {
          res.json(Albums);
      })
  },
  
  
  getAlbumById(req, res) {
    AlbumsService.findOne(req.params._id, )
  },

  // populate example
  // populateSongsFromAlbum(req, res) {
  // const albumSongs = AlbumsService.findOne("5db9de6ef1ce113c186ad83e").populate("songs").exec();
  
  // },
  pushOneSongToAlbum(req, res) {
    const newSong = req.body;
    const albumId = req.params.id;
    AlbumsService.addSong(albumId, newSong, response => {
      res.json({ response });
    });
  },

  removeOneAlbum(req, res){
    const id = req.body;
    AlbumsService.removeAlbum(id, response => {
      res.json({ response });
    })
  },

  updateOneAlbum(req, res){
    const {_id, title} = req.body;
    AlbumsService.updateAlbum(_id, title, response => {
    res.json({ response });
    })
  }
};