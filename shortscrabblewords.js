module.exports = {
	init: function (db, arr, callback) {
		batch = arr.map( function(word) {
			key = word.length + "!" + word;
			return {type: 'put', key: key, value: word};
		});
		db.batch(batch, callback);
	},
	query: function (db, word, callback) {
		var key = word.length + '!' +  word.replace(/\*/g, '');
		var arr = []
		db.createReadStream({start: key, end: key + '\xff' })
			.on('data', function(data) {arr.push(data.value);})
			.on('error', function(err) {callback(err);})
			.on('end', function() {callback(null, arr);}); 
	}
}

