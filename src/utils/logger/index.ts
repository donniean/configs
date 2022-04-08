import chalk from 'chalk';

interface Logger {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  log: (message?: any, ...optionalParams: any[]) => void;
  info: (message?: any, ...optionalParams: any[]) => void;
  success: (message?: any, ...optionalParams: any[]) => void;
  warn: (message?: any, ...optionalParams: any[]) => void;
  error: (message?: any, ...optionalParams: any[]) => void;
  debug: (message?: any, ...optionalParams: any[]) => void;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

const { log, info, warn, error, debug } = console;

const logger: Logger = {
  log: (...args) => {
    log(...args);
  },
  info: (...args) => {
    info(chalk.blue(...args));
  },
  success: (...args) => {
    log(chalk.green(...args));
  },
  warn: (...args) => {
    warn(chalk.yellow(...args));
  },
  error: (...args) => {
    error(chalk.red(...args));
  },
  debug: (...args) => {
    debug(chalk.magenta(...args));
  },
};

export default logger;
