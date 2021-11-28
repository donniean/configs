import chalk from 'chalk';
import got from 'got';
import ora from 'ora';

export default (url: string): Promise<string | void> => {
  const spinner = ora();
  spinner.start(`Request - ${url}`);
  return got(url, { timeout: 60 * 1000 })
    .then((resp) => {
      spinner.succeed(chalk.green(`Request Success - ${url}`));
      return resp.body;
    })
    .catch((error: Error) => {
      const { name, message } = error;
      spinner.fail(chalk.red(`Request Error - ${url}. ${name}: ${message}`));
    });
};
