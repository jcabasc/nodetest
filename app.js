// create web server

var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write("Before end\n");
    response.end('Hello world\n');
    response.write("After end\n");
}).listen(3000);
console.log('Server is running at local');


function homeRoute(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.write("footer\n");
}
