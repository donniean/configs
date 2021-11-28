import {get, intersection, pull, uniq} from 'lodash';

import * as configFile from '@/utils/config-file';

const sort = ({data, sorter}) =>
  data.sort((a, b) => sorter.indexOf(a) - sorter.indexOf(b));

const addGlobBraces = (data) => {
  const {length} = data;
  const extensions = data.join(',');
  if (length <= 1) {
    return extensions;
  }
  return `{${extensions}}`;
};

const getPrettier = ({parsedConfig, withGlobBraces} = {}) => {
  const sorter = [
    'js',
    'jsx',
    'ts',
    'tsx',
    'vue',
    'css',
    'scss',
    'less',
    'html',
    'json',
    'yaml',
    'md',
  ];
  const {languages} = parsedConfig;
  let data = configFile.arrayValuesToBoolean(languages);
  data = configFile.objectToArray(data);
  data = uniq(intersection(data, sorter));
  data = sort({data, sorter});
  if (withGlobBraces) {
    return addGlobBraces(data);
  }
  return data.join(',');
};

const getESLint = ({parsedConfig, withGlobBraces} = {}) => {
  const sorter = ['js', 'jsx', 'ts', 'tsx', 'html'];
  const {languages} = parsedConfig;
  let data = configFile.arrayValuesToBoolean(languages);
  data = configFile.objectToArray(data);
  data = uniq(intersection(data, sorter));
  data = sort({data, sorter});
  if (withGlobBraces) {
    return addGlobBraces(data);
  }
  return data.join(',');
};

const getStylelint = ({parsedConfig, withGlobBraces} = {}) => {
  const sorter = ['css', 'scss', 'less', 'js', 'jsx', 'ts', 'tsx'];
  const {languages, modules} = parsedConfig;
  const styledComponents = get(modules, ['stylelint', 1, 'styled-components']);
  let data = configFile.arrayValuesToBoolean(languages);
  data = configFile.objectToArray(data);
  if (!styledComponents) {
    pull(data, 'js', 'jsx', 'ts', 'tsx');
  }
  data = uniq(intersection(data, sorter));
  data = sort({data, sorter});
  if (withGlobBraces) {
    return addGlobBraces(data);
  }
  return data.join(',');
};

export {getPrettier, getESLint, getStylelint};
