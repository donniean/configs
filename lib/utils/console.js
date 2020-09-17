const chalk = require('chalk');

const success = (...args) => {
  console.log(chalk.green(...args));
};

const successBold = (...args) => {
  console.log(chalk.bold.green(...args));
};

const error = (...args) => {
  console.error(chalk.bold.red(...args));
};

const warn = (...args) => {
  console.warn(chalk.yellow(...args));
};

const info = (...args) => {
  console.info(chalk.blue(...args));
};

module.exports = { success, successBold, error, warn, info };
