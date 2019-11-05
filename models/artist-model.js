const mongoose = require("mongoose");

const Artist = mongoose.model("Artist", {
    name: { required: true, type: String },
    image: { required: true, type: String },
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: "Album"}],
    recordLabel: { required: true, type: String },
})

module.exports = Artist;
