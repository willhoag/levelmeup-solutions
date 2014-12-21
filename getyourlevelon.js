level = require('level');

dbdir = process.argv[2];
key = process.argv[3];
db = level(dbdir);
db.get(key, function (err, value){
	console.log(value);
});
