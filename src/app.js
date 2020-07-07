const http = require('http');

const log = require('./logger')(__filename);
const {PORT, HOSTNAME} = require('./config');
const requestHandler = require('./http-server/requestHandler');

const server = http.createServer(requestHandler);

server.on('clientError', (err, socket) => {
  log.error('HTTP error');
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

function launch() {
  log.info('App start to working now!');

  server.listen(PORT, HOSTNAME);

  log.info(`PORT: ${PORT}`);
}

module.exports = launch;
