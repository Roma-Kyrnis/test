const http = require('http');

const log = require('./logger')(__filename);

const server = http.createServer((req, res) => {
  res.end();
});

server.on('clientError', (err, socket) => {
  log.error('HTTP error');
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

function launch() {
  log.info('App start to working now!');

  server.listen(3000);

  log.info('PORT: 3000');
}

module.exports = launch;
