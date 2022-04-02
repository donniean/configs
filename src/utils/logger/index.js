'use strict';
exports.__esModule = true;
var chalk_1 = require('chalk');
var log = console.log,
  info = console.info,
  warn = console.warn,
  error = console.error,
  debug = console.debug;
var logger = {
  log: function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    log.apply(void 0, args);
  },
  info: function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    info(chalk_1['default'].blue.apply(chalk_1['default'], args));
  },
  success: function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    log(chalk_1['default'].green.apply(chalk_1['default'], args));
  },
  warn: function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    warn(chalk_1['default'].yellow.apply(chalk_1['default'], args));
  },
  error: function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    error(chalk_1['default'].red.apply(chalk_1['default'], args));
  },
  debug: function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    debug(chalk_1['default'].magenta.apply(chalk_1['default'], args));
  },
};
exports['default'] = logger;
