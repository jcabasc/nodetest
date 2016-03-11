// create web server

var http = require('http');
var router = require('./router');

http.createServer(function(request, response){
    if (request.url === '/favicon.ico'){
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end();
        return;
    }
    response.writeHead(200, {'Content-Type':'text/html'});
    router.homeRoute(request, response);
    router.userRoute(request, response);
}).listen(3000);
console.log('Server is running at local');
