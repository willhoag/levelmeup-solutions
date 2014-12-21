level = require('level');
db = level(process.argv[2], {valueEncoding: 'json'});
arr = require(process.argv[3]);

arr.forEach( function(obj) {
	var key;
	if (obj.type === 'repo') {
		key = obj.user + '!' + obj.name;
	} else if (obj.type === 'user') {
		key = obj.name;
	}
	db.put(key, obj);
});
