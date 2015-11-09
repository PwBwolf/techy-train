var express = require('express'),
  stylus = require('stylus'),
  logger = require('morgan'),
  bodyParser = require('body-parser')
//set the enviroment if it has been set by node 

var env  = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var app = express();

function compile (str, path) {
  return stylus(str).set('filename', path);
}

//configuration for views engine
app.set('views', __dirname + '/server/views'); // setting views property to where we are holding our views
app.set('view engine', 'jade'); //setting the views engine proeprty 
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));

app.use(express.static(__dirname + '/public'))

app.get('*', function (req, res) { // * matches all routes to deleviver index page that has client side routing.
  res.render('index');
});

var port = 3030;
app.listen(port);
console.log('listening on port ' + port + '...')