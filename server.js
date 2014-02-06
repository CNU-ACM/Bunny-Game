var http = require('http');
var io = require('socket.io');
var fs = require('fs');
var mysql = require('mysql');

var database = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'dabase'
});

database.connect(function(err) {
	if(err) console.log(err);
	else console.log('Connected to the database.')
});

var server = http.createServer(function(req,res) {
	var url = req.url;

	if(url == '/db_dump') {
		database.query("SELECT * FROM hacku",function(err,rows) {
			res.writeHead(200);
			res.end(JSON.stringify(rows));
		});
	} else {
		fs.readFile('index.html',function(err,data) {
			if(err) {
				res.writeHead(500);
				return res.end('Error reading index file.');
			}

			res.writeHead(200,{'Content-type':'text/html'});
			res.end(data);
		});
	}
});

server.listen(8888);

