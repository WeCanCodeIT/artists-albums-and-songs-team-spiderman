require("./utils/db");
const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

const indexRouter = require("./routes/index-router");
const artistsRouter = require("./routes/artists-router");
const albumsRouter = require("./routes/albums-router");
const songRouter = require("./routes/song-router");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/artists", artistsRouter);
app.use("/albums", albumsRouter);
app.use("/songs", songRouter);
module.exports = app;
