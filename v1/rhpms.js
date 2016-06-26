var accepts = require('accepts');

exports.getHead = function(request) {
	var ip = request.connection.remoteAddress; //or express req.ip
	var language = accepts(request).languages()[0];
	var os = request.headers["user-agent"];

	var headers = {
		ip: ip,
		language: language,
		os: os
	};
	
	return headers;
};