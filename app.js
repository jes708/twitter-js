// small change

var express = require( 'express' );
var app = express();

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

app.get('/', function (req, res) {
  res.send('Welcome to THE best tweet app...EVER!!!!');
});

app.get('/news', function (req, res) {
  res.send('Welcome to THE best tweet app news page...EVER!!!!');
});

app.get('/special', function (req, res) {
  res.send('Welcome to THE best tweet app special page...EVER!!!!');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});