
module.exports = function(io) {

  var express = require('express');
  var router = express.Router();
  // could use one line instead: var router = require('express').Router();
  var tweetBank = require('../tweetBank');

  router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  });

  router.get('/tweets', function (req, res) {
    var tweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { title: 'Twitter.js - Posts by ' + name, tweets: list, showForm: true, name: name } );
  });

  router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var list = tweetBank.find( {id: id} );
    res.render( 'index', { title: 'Twitter.js - Posts by ' + id, tweets: list } );
  });
  
  io.sockets.emit('new_tweet', { name: "Jenna Zenk", text: "Jon is the best partner in the 1604 cohort.", id: '66' });

  return router;
}
// module.exports = router;