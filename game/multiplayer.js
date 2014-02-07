var socket = io.connect('http://10.67.31.165:8888');
var charManager = {
	mainChar:{
		spawned:false
	}
};

socket.on('welcome',function(res) {
	console.log(res);
});