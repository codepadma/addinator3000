const http = require('http');
const port = 3000;

const server = http.createServer(function(request, response) {
  response.end('Hello World!');
});

server.listen(port, function() {
	console.log('Server listening...');
});