const { merge } = require('webpack-merge');

const packageJson = require('../utils/package-json');
const {
  copyFilesToDestByTemplates,
  writeObjectToDestModuleJSFile,
} = require('../utils/fs');
const styledComponentsConfig = require('./rules/styled-components');
let config = require('./rules');

const getPackages = ({ usePrettier, styledComponents }) => {
  let packages = [
    'stylelint',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-order,
  ];
  if (styledComponents) {
    packages = [...packages, 'stylelint-config-styled-components'];
  }
  if (usePrettier) {
    packages = [...packages, 'stylelint-config-prettier', 'stylelint-prettier'];
  }
  return packages;
};

const integratePrettier = ({ config: c }) => {
  const { extends: extendsAlias = [] } = c;
  extendsAlias.push('stylelint-prettier/recommended');
  return c;
};

module.exports = ({ configParsed }) => {
  const { prettier = [], stylelint = [] } = configParsed;
  const [usePrettier] = prettier;
  const [, options = {}] = stylelint;
  const { 'styled-components': styledComponents } = options;

  const packageNames = getPackages({
    usePrettier,
    styledComponents
  });
  const fileName = '.stylelintrc.js';
  const fileNames = ['.stylelintignore'];

  packageJson.mergeDevDependencies({ packageNames });
  if (styledComponents) {
    config = merge({}, config, styledComponentsConfig);
  }
  config = integratePrettier({ config });
  writeObjectToDestModuleJSFile({ fileName, data: config });
  copyFilesToDestByTemplates({ modulePath: __dirname, fileNames });
  packageJson.merge({
    data: {
      scripts: {
        stylelint: 'npx stylelint --fix "**/*.{css,scss,js,jsx,vue}"'
      }
    }
  });
};
