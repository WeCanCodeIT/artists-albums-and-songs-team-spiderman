const mongoose = require("mongoose");

const Album = mongoose.model("Album", {
    title: {required: true, type: String},
    image: {required: true, type: String},
    recordLabel: {required: true, type: String},
    songs: [{ ref: "Song", type: mongoose.Schema.Types.ObjectId}]
})

module.exports = Album;