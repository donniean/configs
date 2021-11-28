import {green, red} from 'chalk';
import got from 'got';
import ora from 'ora';

export default (url) => {
  const spinner = ora();
  spinner.start(`Request - ${url}`);
  return got(url, {timeout: 60 * 1000})
    .then((resp) => {
      spinner.succeed(green(`Request Success - ${url}`));
      return resp.body;
    })
    .catch((error) => {
      const {name, message} = error;
      spinner.fail(red(`Request Error - ${url}. ${name}: ${message}`));
    });
};
