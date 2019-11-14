const mongoose = require("mongoose");

const Album = mongoose.model("Album", {
    title: {required: true, type: String},
    image: {required: true, type: String},
    recordLabel: {required: true, type: String},
    artist: { ref: "Artist", type: mongoose.Schema.Types.ObjectId },
    songs: [{ required: false, ref: "Song", type: mongoose.Schema.Types.ObjectId}]
})

module.exports = Album;