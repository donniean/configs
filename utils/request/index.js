const got = require('got');
const ora = require('ora');

module.exports = (url) => {
  const spinner = ora();
  spinner.start(`Request - ${url}\n`);
  return got(url, { timeout: 60 * 1000 })
    .then((resp) => {
      spinner.succeed(`Request Success - ${url}`);
      return resp.body;
    })
    .catch((err) => {
      const { name, message } = err;
      spinner.fail(`Request Error - ${url}. ${name}: ${message}`);
    });
};
