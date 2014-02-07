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
	var url = req.url == '/' ? 'index.html' : req.url;
	if(url == '/game') {
		url = 'game.html';
	}

	var filesplit = url.split(".");
	filesplit = filesplit[filesplit.length-1];

	var types = {
		'js':'application/javascript',
		'html':'text/html',
		'png':'image/png',
		'jpg':'image/jpeg',
		'jpeg':'image/jpeg',
		'css':'text/css',
		'ico':'image/x-ico',
		'text':'text/plain',
		'gif':'image/gif'
	};

	if(url == '/db_dump') {
		database.query("SELECT * FROM hacku",function(err,rows) {
			res.writeHead(200);
			res.end(JSON.stringify(rows));
		});
	} else {
		fs.readFile(__dirname+'/'+url,function(err,data) {
			if(err) {
				res.writeHead(500);
				return res.end('Error reading index file.');
			}

			res.writeHead(200,{'Content-type':(types[filesplit] || types['text'])});
			res.end(data);
		});
	}
});

server.listen(8888);

var chars = [];
var socket = io.listen(server).sockets.on('connection',function(client) {
	client.broadcast.emit('playerData',{data:chars});
	client.emit('welcome',{status:'welcome',data:chars});
	client.on('playerData',function(data) {
		chars.push(data);
	});
	client.on('disconnect',function() {
		
	});
});

