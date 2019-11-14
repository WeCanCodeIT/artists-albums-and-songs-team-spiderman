const mongoose = require("mongoose");

const Song = mongoose.model("Song", {
    name: {required: true, type: String},
    album: {type: mongoose.Schema.Types.ObjectId, ref: "Album"},
    video: {required: false, type: String}
})

module.exports = Song;