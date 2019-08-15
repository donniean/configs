const { red, green } = require('chalk');

function log(fn, ...args) {
  console.log(fn(...args));
}

function success(...args) {
  log(green, ...args);
}

function error(...args) {
  log(red, ...args);
}

module.exports = { success, error };
