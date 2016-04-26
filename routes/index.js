var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by ' + name, list: list } );
});

module.exports = router;

// app.get('/', function (req, res) {
//   res.send('Welcome to THE best tweet app...EVER!!!!');
// });

// app.get('/news', function (req, res) {
//   res.send('Welcome to THE best tweet app news page...EVER!!!!');
// });

// app.get('/special', function (req, res) {
//   var tweets = [{name: 'I like Fullstack'}, {name: 'I am a Fullstacker'}, {name: 'My son is a Fullstacker too'}];
//   res.render( 'index', {title: 'Special', people: tweets} );
// });