const { cosmiconfigSync } = require('cosmiconfig');
const { get, mapValues } = require('lodash');

const { writeObjectToDestModuleJSFileSync } = require('./fs');

const explorerSync = cosmiconfigSync('configs');

const readSync = () => {
  const res = explorerSync.search();
  return get(res, 'config', null);
};

const writeSync = ({ config }) => {
  writeObjectToDestModuleJSFileSync({
    fileName: '.configsrc.js',
    data: config,
  });
};

const parse = ({ config }) => {
  const { languages = {}, options = {}, ...rest } = config;
  const l = mapValues(languages, (value) => {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  });
  const o = mapValues(options, (value) => {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  });
  return { languages: l, options: o, ...rest };
};

const arrayToObject = (array = []) => {
  const object = {};
  array.forEach((key) => {
    object[key] = true;
  });
  return object;
};

const objectToArray = (object = {}) => {
  return Object.keys(object).filter((key) => object[key]);
};

module.exports = {
  readSync,
  writeSync,
  parse,
  arrayToObject,
  objectToArray,
};
