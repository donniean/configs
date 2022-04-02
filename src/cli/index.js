'use strict';
exports.__esModule = true;
var logger_1 = require('@/utils/logger');
var commands_1 = require('./commands');
function cli() {
  var argv = (0, commands_1['default'])();
  console.log(argv);
  logger_1['default'].log('log');
  logger_1['default'].info('info');
  logger_1['default'].success('success');
  logger_1['default'].warn('warn');
  logger_1['default'].error('error');
  logger_1['default'].debug('debug');
}
exports['default'] = cli;
