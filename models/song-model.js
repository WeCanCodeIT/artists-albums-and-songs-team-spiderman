const mongoose = require("mongoose");

const Song = mongoose.model("Song", {
    name: {required: true, type: String},
    artist: {required: true, type: String},
    album: {required: true, type: String},
    recordLabel: {required: true, type: String},
    year: {required: true, type: String},
})

module.exports = Song;
