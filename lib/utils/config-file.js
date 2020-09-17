const { cosmiconfigSync } = require('cosmiconfig');
const { get, mapValues } = require('lodash');

const { writeObjectToDestModuleJSFileSync } = require('./fs');

const explorerSync = cosmiconfigSync('configs');

function readSync() {
  const res = explorerSync.search();
  return get(res, 'config', null);
}

function writeSync({ config }) {
  writeObjectToDestModuleJSFileSync({
    fileName: '.configsrc.js',
    data: config,
  });
}

function parse({ config }) {
  return mapValues(config, (value) => {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  });
}

module.exports = {
  readSync,
  writeSync,
  parse,
};
