'use strict';
var http = require('http');
var port = process.env.PORT || 3008;

http.createServer(function ReqRes (request, respond) {
    respond.writeHead(200, { 'Content-Type': 'text/plain' });
    respond.end('Hello World\n');
}).listen(port);
