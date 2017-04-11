'use strict';

const express 		= require('express'),
			app 				= express(),
			bodyParser  = require('body-parser'),
			mongoose 		= require('mongoose'),
			path 				= require('path');

const port = 3000;
const db = 'mongodb://localhost/meetupApp';

// connect to mongo database
mongoose.connect(db);

let routes = require('./routes/index');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public')); //setup static public directory to serve-up css/js files
app.set('view engine', 'html');// setup view engine

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', routes);

app.listen(port, function() {
  console.log('app listening on port ' + port);
});