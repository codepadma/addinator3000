const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

const server = http.createServer(function(request, response) {
  const path = url.parse(request.url).pathname;
  let filePath = `./client/${path}`;
  fs.stat(filePath, (err, stats) => {
  	if (!err && stats.isDirectory()) {
  	  filePath += '/index.html';
  	}
  	fs.exists(filePath, (doesExist) => {
  	  if (!doesExist) {
        response.statusCode = 404;
        response.end(`Resource does not exist: "${path}"`);
  	  }
  	  fs.readFile(filePath, (err, data) => {
   	    if (err) {
  	      response.statusCode = 500;
          response.end(`Server error: "${err}"`);
  	    } else {
          response.end(data.toString('UTF-8'));
  	    }
      });
    });
});
  });
  

server.listen(port, function() {
	console.log('Server listening...');
});