var server = 'http://10.67.31.165:8888';/*'http://192.168.1.125:8888';*/
var iojs = 'https://mmo-greenteam.rhcloud.com:8443/socket.io/socket.io.js';
if(window.location.hostname == 'rhcloud.com') server = 'https://mmo-greenteam.rhcloud.com:8443/';
else if(window.location.hostname == 'localhost') server = 'http://localhost:8888';

var socket = io.connect(server);
var charManager = {
	mainChar:{
		spawned:false
	}
};

socket.on('welcome',function(res) {
	console.log(res);
});

socket.on('playerData',function(data) {
	console.log("A PLAYER HAS FUCKING CONNECTED!");
});