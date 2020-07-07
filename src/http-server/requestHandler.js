// const url = require('url');
// const querystring = require('querystring');

const authorization = require('./authorization');
const log = require('../logger')(__filename);

module.exports = async (request, response) => {
  try {
    // const {url: uri} = request;
    // const parsedUrl = url.parse(uri);
    // const queryParams = querystring.decode(parsedUrl.query);

    // let body = [];

    if (!authorization(request, response)) return 1;

    return 0;
  } catch (error) {
    log.error('Request Handler:', {error});
    return 1;
  }
};
