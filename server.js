'use strict';
const http = require('http')
var port = process.env.PORT || 3008;
let requestsCount = 0
http.createServer(function ReqRes (request, respond) {
    respond.writeHead(200, { 'Content-Type': 'text/plain' });
    requestsCount++
    switch (request.url) {
        case '/students':
            respond.write('STUDENTS\n')
            break;
        case '/courses':
            respond.write('FRONT + BACK\n')
            break;
        default:
            respond.write('NOT FOUND\n')
    }
    respond.write(' IT KAMASUTRA: ' + requestsCount )
    respond.end('\nEnd of page\n')
}).listen(port);



/*
let requestsCount = 0
const server = http.createServer((request, response) => {
    requestsCount++
    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('NOT FOUND')
    }
    response.write(' IT KAMASUTRA: ' + requestsCount)

    response.end()
})

server.listen(3003)*/