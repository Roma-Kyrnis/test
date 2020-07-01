const http = require('http');

const log = require('./logger')(__filename);

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end();
});

server.on('clientError', (err, socket) => {
  log.error('HTTP error');
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

function launch() {
  log.info('App start to working now!');

  server.listen(PORT);

  log.info(`PORT: ${PORT}`);
}

module.exports = launch;
