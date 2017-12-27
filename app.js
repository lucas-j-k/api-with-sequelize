'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var validator = require('express-validator');


//Instantiate Express
var app = express();

//Set up body-parser to enable us to read JSON requests and send responses
app.use(bodyParser.json());

//Initialize express-validator to check incoming POST request values.
app.use(validator());


//===========================================
//Connecting to database via Sequelize
//===========================================

//Pull database credentials from the environment variables.
//They default to empty localhost config if no env variables are specified. Expects a database called 'recipe-demo'
var DB_HOST = process.env.DB_HOST || "localhost";
var DB_DATABASE = process.env.DB_DATABASE || "art-demo";
var DB_USER = process.env.DB_USER || "root";
var DB_PASS = process.env.DB_PASS || "";
var DB_DIALECT = process.env.DB_DIALECT || "mysql";

//instantiate sequelize and connect to the database. Credentials are pulled from the environment vars.
var sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
	host: DB_HOST,
	dialect: DB_DIALECT
});

//Import the Sequelize models. We import the whole folder, so Node will pull in index.js, which is where the associations are defined.
var models = require("./db/models");
// var models = require("../node_modules/.bin/models");


//===========================================
// Route Handlers
//===========================================

app.get('/', function(req, res, next){
	res.send('Home Route - nothing to see here yet ');
});


//Return all artworks in database
app.get('/api/v1/artworks', function(req, res, next){
  models.Artwork.findAll()
    .then(function(artworks){
      res.json(artworks);
    });
});



//Return all artists in the database
app.get('/api/v1/artists', function(req, res, next){
  models.Artist.findAll()
    .then(function(artists){
      res.json(artists);
    });
});





//===========================================
// End of Route Handlers
//===========================================


// Catch 404 errors and forward to error handler. This is called if no match is found in the preceding route functions.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
// called as the last middleware. Expects an error object as the first argument, which we pass in manually as part of the next() function
//from within the other routes. This allows us to catch and handle errors in routes.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var errorResponse = {};
  errorResponse.status = err.status;
  errorResponse.message = err.message;
  res.json(errorResponse);
});


//Tell node to listen for the App on port 3000:
// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express app listening on port 3000');
})




