var express = require('express');
var app = express();
var rhpms = require('./rhpms');

app.get('/', function(req, res) {
	res.json(rhpms.getHead(req));
});

app.listen(3000, function(){
	console.log("listening on *3000");
});