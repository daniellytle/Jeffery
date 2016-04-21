//Think of these require statements as #include statements. They're just pre-built libraries.
var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var request = require('request');
var content = require('./app/content.js');
var messenger = require('./app/messenger.js');
var app = express();

// Body Parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Static Files
app.use(express.static(__dirname + '/public'));

// Load Routes
require('./app/routes')(app, messenger, content);
require('./app/cron')(content, messenger);

// This allows us to use handlebars as our template engine
app.set('views', __dirname + '/public/views');
app.set('view engine', '.hbs');
app.engine('.hbs', handles({
	defaultLayout: 'base',
	layoutsDir: 'public/views/layouts',
        extname: '.hbs'
}));

// BEGIN
var server = app.listen(80);
console.log('Server magic happens at port 8888');
