// create web server

var http = require('http');
var router = require('./router');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    router.homeRoute(request, response);
    router.userRoute(request, response);
    response.end();
}).listen(3000);
console.log('Server is running at local');
