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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');// setup view engine
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, function() {
  console.log('app listening on port ' + port);
});