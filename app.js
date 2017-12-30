'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var validator = require('express-validator');


//Import controllers which hold the CRUD methods for each model
var artworksController = require('./db/controllers/artworks');
var artistsController = require('./db/controllers/artists');
var locationsController = require('./db/controllers/locations');

//Instantiate Express
var app = express();

//Set up body-parser to enable us to read JSON requests and send responses
app.use(bodyParser.json());

//Initialize express-validator to check incoming POST request values.
app.use(validator());


//Import the Sequelize models. We import the whole folder, so Node will pull in index.js, which is where the connection o
//sequelize is made.
var models = require("./db/models");


//===========================================
// Route Handlers
//===========================================

//Basic home route with documentation. Just for presentation, not functional.
app.get('/', function(req, res, next){
	res.send('Home Route - nothing to see here yet ');
});

//API endpoints and CRUD routes. The second arguments are referring to functions defined in the individual controller files.

//Artworks CRUD routes.
app.get('/api/v1/artworks', artworksController.fetchAll);
app.get('/api/v1/artworks/:id', artworksController.fetchOne);


//Artists CRUD routes.
app.get('/api/v1/artists', artistsController.fetchAll);
app.get('/api/v1/artists/:id', artistsController.fetchOne);


//Locations CRUD routes.
app.get('/api/v1/locations', locationsController.fetchAll);
app.get('/api/v1/locations/:id', locationsController.fetchOne);




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




