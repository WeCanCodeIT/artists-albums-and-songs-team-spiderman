const mongoose = require("mongoose");

const Artist = mongoose.model("Artist", {
    name: { required: true, type: String },
    image: { required: true, type: String },
    recordLabel: { required: true, type: String },
})

module.exports = Artist;
