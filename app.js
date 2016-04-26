// small change

var express = require( 'express' );
var swig = require('swig');
var app = express();
var routes = require('./routes/');
app.use('/', routes);

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method)
    console.log(req.url)
    next();
})

app.use('/special/', function(req, res, next) {
  console.log("you reached the special area.")
  next();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
    console.log(output);
});

swig.setDefaults({ cache: false });

