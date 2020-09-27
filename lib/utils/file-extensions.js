const { intersection, uniq, get, pull } = require('lodash');

const configFile = require('./config-file');

const sort = ({ data, sorter }) =>
  data.sort((a, b) => sorter.indexOf(a) - sorter.indexOf(b));

const getPrettier = ({ parsedConfig } = {}) => {
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
  const { languages } = parsedConfig;
  let data = configFile.arrayValuesToBoolean(languages);
  data = configFile.objectToArray(data);
  data = uniq(intersection(data, sorter));
  return sort({ data, sorter }).join(',');
};

const getESLint = ({ parsedConfig } = {}) => {
  const sorter = ['js', 'jsx', 'ts', 'tsx', 'vue', 'html'];
  const { languages } = parsedConfig;
  let data = configFile.arrayValuesToBoolean(languages);
  data = configFile.objectToArray(data);
  data = uniq(intersection(data, sorter));
  return sort({ data, sorter }).join(',');
};

const getStylelint = ({ parsedConfig } = {}) => {
  const sorter = ['css', 'scss', 'less', 'js', 'jsx', 'ts', 'tsx', 'vue'];
  const { languages, modules } = parsedConfig;
  const styledComponents = get(modules, ['stylelint', 1, 'styled-components']);
  let data = configFile.arrayValuesToBoolean(languages);
  data = configFile.objectToArray(data);
  if (!styledComponents) {
    pull(data, 'js', 'jsx', 'ts', 'tsx');
  }
  data = uniq(intersection(data, sorter));
  return sort({ data, sorter }).join(',');
};

module.exports = { getPrettier, getESLint, getStylelint };
