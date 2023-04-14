const got = require('got');
const ora = require('ora');
const { green, red } = require('chalk');

module.exports = (url) => {
  const spinner = ora();
  spinner.start(`Request - ${url}`);
  return got(url, { timeout: 60 * 1000 })
    .then((resp) => {
      spinner.succeed(green(`Request Success - ${url}`));
      return resp.body;
    })
    .catch((err) => {
      const { name, message } = err;
      spinner.fail(red(`Request Error - ${url}. ${name}: ${message}`));
    });
};
