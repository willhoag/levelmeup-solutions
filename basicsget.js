var level = require('level');
var db = level(process.argv[2]);

for (i=0; i<=100; i++) {

	(function () {
		var key = 'key' + i
		db.get(key, function(err, value) {
			if (err) {
				if (!err.type === 'NotFoundError') { throw err; }
			} else {
				console.log(key + '=' + value);
			}
		});
	})();
};
