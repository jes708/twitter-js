// small change

var express = require( 'express' );
var swig = require('swig');
var bodyParser = require('body-parser');
var app = express();
var socketio = require('socket.io');
var routes = require('./routes/');
var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
var io = socketio.listen(server);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(function (req, res, next) {
  console.log(req.method)
  console.log(req.url)
  next();
})

app.use('/', routes(io));


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     console.log(output);
// });

swig.setDefaults({ cache: false });

app.use(express.static('public'));
