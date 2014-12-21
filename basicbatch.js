var level = require('level');
var fs = require('fs');
var db = level(process.argv[2]);
var path = process.argv[3];

fs.readFile(path, function(err, data) {
	db.on('ready', function () {
		var batch = db.batch();
		var lines = data.toString().split('\n');
		lines.forEach(function(line){
			var e = line.split(',');
			batch[e[0]](e[1], e[2]);
		});
		batch.write();
	});
});
