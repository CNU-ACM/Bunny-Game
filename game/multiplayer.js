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

		if(this.pids.indexOf(pid) != -1) {
			response = true;
		}

		return response;
	},
	render:function(data) {
		if(charManager.hasChar(data.pid)) {
			console.log("rendering existing player");
		} else {
			console.log("---new---");
			console.log(data);
			Lib(data.pid).sprite({
				src:"game/Graphics/Characters/bun.png",
        		size:data.size,
        		position:[0, 0],
        		speed:100,
        		scale:0.125,
        		frequency:13,
        		x:data.x,
        		y:data.y
			});

			Lib(data.pid).load(function() {
				console.log("foreign player has loaded");
			});
		}
	}
};

socket.on('welcome',function(res) {
	console.log(res);
});

socket.on('playerData',function(data) {
	console.log("data-----");
	console.log(data);
	charManager.render(data);
});

socket.on('playerDisconnect',function(data) {
	console.log("player disconnected.");
	console.log(data);
	// console.log(data);
});