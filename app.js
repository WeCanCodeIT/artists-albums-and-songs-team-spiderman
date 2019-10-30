require("./utils/db");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index-router');
const artistsRouter = require('./routes/artists-router');
const albumsRouter = require('./routes/albums-router');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/artists', artistsRouter);
app.use('/albums', albumsRouter);

module.exports = app;
