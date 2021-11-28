import {cosmiconfigSync} from 'cosmiconfig';
import {get, isEmpty, mapValues} from 'lodash';

import {writeObjectToDestModuleJSFileSync} from '@/utils/fs';

const explorerSync = cosmiconfigSync('configs');

const readSync = () => {
  const res = explorerSync.search();
  return get(res, 'config', null);
};

const writeSync = ({config}) => {
  writeObjectToDestModuleJSFileSync({
    fileName: '.configsrc.js',
    data: config,
  });
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

const booleanValueToArray = (value) => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

const booleanValuesToArray = (values) => mapValues(values, booleanValueToArray);

const arrayValueToBoolean = (value) => {
  if (Array.isArray(value)) {
    const [bool, options] = value;
    if (!bool) {
      return bool;
    }
    if (isEmpty(options)) {
      return bool;
    }
    return value;
  }
  return value;
};

const arrayValuesToBoolean = (values) => mapValues(values, arrayValueToBoolean);

const parse = ({config}) => {
  const {languages = {}, modules = {}, ...rest} = config;
  const l = booleanValuesToArray(languages);
  const m = booleanValuesToArray(modules);
  return {languages: l, modules: m, ...rest};
};

export {
  readSync,
  writeSync,
  arrayToObject,
  objectToArray,
  booleanValueToArray,
  booleanValuesToArray,
  arrayValueToBoolean,
  arrayValuesToBoolean,
  parse,
};
