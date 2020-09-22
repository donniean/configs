const { uniq } = require('lodash');

const sort = ({ data, sorter }) =>
  data.sort((a, b) => sorter.indexOf(a) - sorter.indexOf(b));

const getPrettier = ({ configParsed } = {}) => {
  const { eslint = [], stylelint = [] } = configParsed;
  const [useESLint, eslintOptions = {}] = eslint;
  const { preset } = eslintOptions;
  const [useStylelint, stylelintOptions = {}] = stylelint;
  const { 'styled-components': styledComponents } = stylelintOptions;
  const sorter = [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'html',
    'vue',
    'css',
    'less',
    'scss',
    'md',
    'yaml',
  ];
  const base = ['js', 'json', 'html', 'md', 'yaml'];
  let data = [...base];
  if (useESLint) {
    switch (preset) {
      case 'react':
        data = [...data, 'jsx'];
        break;
      case 'vue':
        data = [...data, 'vue'];
        break;
      default:
        break;
    }
  }
  if (useStylelint) {
    data = [...data, 'css', 'less', 'scss'];
    if (styledComponents) {
      data = [...data, 'jsx'];
    }
  }
  data = uniq(data);
  return sort({ data, sorter }).join(',');
};

const getESLint = ({ configParsed } = {}) => {
  const { eslint = [] } = configParsed;
  const [, eslintOptions = {}] = eslint;
  const { preset } = eslintOptions;
  const sorter = ['js', 'jsx', 'ts', 'tsx', 'html', 'vue'];
  const base = ['js', 'html'];
  let data = [...base];
  switch (preset) {
    case 'react':
      data = [...data, 'jsx'];
      break;
    case 'vue':
      data = [...data, 'vue'];
      break;
    default:
      break;
  }
  data = uniq(data);
  return sort({ data, sorter }).join(',');
};

const getStylelint = ({ configParsed } = {}) => {
  const { eslint = [], stylelint = [] } = configParsed;
  const [, eslintOptions = {}] = eslint;
  const { preset } = eslintOptions;
  const [, stylelintOptions = {}] = stylelint;
  const { 'styled-components': styledComponents } = stylelintOptions;
  const sorter = ['css', 'less', 'scss', 'js', 'jsx', 'ts', 'tsx', 'vue'];
  const base = ['css', 'less', 'scss'];
  let data = [...base];
  if (styledComponents) {
    data = [...data, 'js', 'jsx'];
  }
  if (preset === 'vue') {
    data = [...data, 'vue'];
  }
  data = uniq(data);
  return sort({ data, sorter }).join(',');
};

module.exports = { getPrettier, getESLint, getStylelint };
