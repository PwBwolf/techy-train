var express = require('express'),
  stylus = require('stylus'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');
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

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'))
db.once('open', function callback() {
  console.log('multivision db opened')
})
var messageSchema =mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function (err, messageDoc) {
  mongoMessage = messageDoc.message;
})

app.get('/partials/:partialPath', function (req, res) {
  res.render('partials/' + req.params.partialPath);
})

app.get('*', function (req, res) { // * matches all routes to deleviver index page that has client side routing.
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

var port = 3030;
app.listen(port);
console.log('listening on port ' + port + '...')

