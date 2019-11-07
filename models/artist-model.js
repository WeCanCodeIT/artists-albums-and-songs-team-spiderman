const mongoose = require("mongoose");

const Artist = mongoose.model("Artist", {
    name: { required: true, type: String },
    image: { required: true, type: String },
    albums: [{ ref: "Album", type: mongoose.Schema.Types.ObjectId }]
})

module.exports = Artist;