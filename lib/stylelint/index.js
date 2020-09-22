const { merge } = require('webpack-merge');

const packageJson = require('../utils/package-json');
const {
  copyFilesToDestByTemplatesSync,
  writeObjectToDestModuleJSFileSync,
} = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');
const styledComponentsConfig = require('./rules/styled-components');
let config = require('./rules');

const getPackages = ({ usePrettier, styledComponents }) => {
  let packages = [
    'stylelint',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-order',
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

module.exports = async ({ configParsed }) => {
  const { prettier = [], stylelint = [] } = configParsed;
  const [usePrettier] = prettier;
  const [, options = {}] = stylelint;
  const { 'styled-components': styledComponents } = options;

  const packageNames = getPackages({
    usePrettier,
    styledComponents,
  });
  const fileName = '.stylelintrc.js';
  const fileNames = ['.stylelintignore'];
  const extensions = fileExtensions.getESLint({ configParsed });

  await packageJson.mergeDevDependencies({ packageNames });
  if (styledComponents) {
    config = merge({}, config, styledComponentsConfig);
  }
  config = integratePrettier({ config });
  const data = JSON.stringify(config).replace(
    '"ignoreKeywords":[{}]',
    'ignoreKeywords: [/^[a-z]+[A-Z][a-z]*/]'
  );
  writeObjectToDestModuleJSFileSync({ fileName, data });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        stylelint: `npx stylelint --fix "**/*.{${extensions}}"`,
      },
    },
  });
};
