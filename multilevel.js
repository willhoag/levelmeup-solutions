var net = require('net');
var multilevel = require('multilevel');
var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);
db.get('multilevelmeup', function (err, data) {
	console.log(data);
	connection.end();
});
