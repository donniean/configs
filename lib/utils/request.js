const got = require('got');
const { v4: uuidV4 } = require('uuid');

const spinnies = require('./spinnies');

module.exports = (url) => {
  const uuid = uuidV4();
  spinnies.add(uuid, {
    text: `Request - ${url}`,
  });
  return got(url, { timeout: 60 * 1000 })
    .then((resp) => {
      spinnies.succeed(uuid, { text: `Request Success - ${url}` });
      return resp.body;
    })
    .catch((err) => {
      const { name, message } = err;
      spinnies.fail(uuid, {
        text: `Request Error - ${url}. ${name}: ${message}`,
      });
    });
};
