// ./wedding-website/server.js
// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';
// import logger from 'morgan';
// import mongoose from 'mongoose';
// import SourceMapSupport from 'source-map-support';
// import cors from 'cors';

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const SourceMapSupport = require("source-map-support");
const cors = require("cors");

// import routes
// import weddingRoutes from './routes/wedding.server.route';
const weddingRoutes = require('./routes/wedding.server.route');

// define our app using express
const app = express();

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// var cors = require('cors');
app.use(cors());

// set the port
const port = process.env.PORT || 3001;

// connect to database
var mongoDB = 'mongodb://127.0.0.1/wedding-website-app';

mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// add Source Map Support
SourceMapSupport.install();

app.use('/api', weddingRoutes);

app.get('/', (req,res) => {
  return res.send('Api working');
})

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});