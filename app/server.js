/* ** request header microservice ** - devsur */
var express = require('express');
var app = express();
var rhpms = require('./rhpms');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
	res.json(rhpms.getHead(req));
});

app.listen(app.get('port'), function(){
	console.log("listening on ", app.get('port'));
});