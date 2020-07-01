const log = require('./logger')(__filename);

function launch() {
  log.info('App start to working now!');
}

module.exports = launch;
