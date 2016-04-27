var _ = require('lodash');
var data = [{ name: "Jenna Zenk", text: "Jon is the best partner in the 1604 cohort.", id: '0' },
{name: "Jon Schwarz", text: "Jenna is the best partner in the history of coding bootcamps.", id: '1' }, 
{name: "Jon Schwarz", text: "I am the best partner in the history of partners.", id: '2' }];

// pushes tweet data to array
function add (name, text) {
  data.push({ name: name, text: text, id: String(data.length) });
}

// creating a copy of data
function list () {
  return _.cloneDeep(data);
}

// filters data array based on predicate, and then creates a copy
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

// console.log(find(function(tweet) {return (/history/).test(tweet.text);}))
console.log(data)