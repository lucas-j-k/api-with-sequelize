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
// Route Handlers
//===========================================

app.get('/', function(req, res, next){
	res.send('Home Route - nothing to see here yet ');
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
// define as the last app.use callback. This applies to /, app and auth routes, but api routes have their own error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var errorMsg = 'Error: ' + err.status + " - " + err.message;
  res.send(errorMsg);
});


//Tell node to listen for the App on port 3000:
// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express app listening on port 3000');
})




