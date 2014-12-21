module.exports = function (db, date, callback) {
	var tweets = [];

	db.createReadStream({start: date, end: date + '\xff'})
		.on('data', function (data) {
			tweets.push(data.value);
		})
		.on('end', function () {
			callback(null, tweets);
		});

};
