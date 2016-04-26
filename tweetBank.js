var _ = require('lodash');
var data = [];

function add (name, text) {
  data.push({ name: name, text: text });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

//Randomly generating names
var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Tweet Authors
var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe', 'Jenna', 'Jon'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma', "Zenk", "Schwarz"];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

//Their Tweets
var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// Tweet Generator
for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

console.log(data)