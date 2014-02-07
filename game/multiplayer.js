var server = 'http://10.67.29.243:8888';
var iojs = 'https://mmo-greenteam.rhcloud.com:8443/socket.io/socket.io.js';
if(window.location.hostname == 'mmo-greenteam.rhcloud.com') server = 'https://mmo-greenteam.rhcloud.com:8443/';
else if(window.location.hostname == 'localhost') server = 'http://localhost:8888';

var socket = io.connect(server);
var charManager = {
	pids:[],
	mainChar:{
		spawned:false
	},
	hasChar:function(pid) {
		var response = false;

		if(pids.indexOf(pid) != -1) {
			response = true;
		}

		return response;
	}
};

socket.on('welcome',function(res) {
	console.log(res);
});

socket.on('playerData',function(data) {
	console.log(data);
	renderPlayer(data);

	// function renderPlayer(data) {
	// 	if(charManager.hasChar(pid)) {
	// 		//if its already logged in and created
	// 		Lib("").setX();
	// 	} else {

	// 	}
	// }
});

socket.on('playerDisconnect',function(data) {
	console.log("player disconnected.");
	console.log(data);
});