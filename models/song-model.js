const mongoose = require("mongoose");

const Song = mongoose.model("Song", {
    name: {required: true, type: String},
    video: {required: false, type: String}
})

module.exports = Song;
