var level = require('level');

var dbdir = process.argv[2];
var key = process.argv[3];
var db = level(dbdir);
db.get(key, function (err, value){
	console.log(value);
});
