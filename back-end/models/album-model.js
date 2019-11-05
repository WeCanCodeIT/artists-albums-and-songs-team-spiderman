const mongoose = require("mongoose");

const Album = mongoose.model("Album", {
    artistName: {required: true, type: String},
    title: {required: true, type: String},
    image: {required: true, type: String},
    recordLabel: {required: true, type: String},
})

module.exports = Album;