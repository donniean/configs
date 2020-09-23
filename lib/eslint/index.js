const packageJson = require('../utils/package-json');
const {
  copyFilesToDestByTemplatesSync,
  writeObjectToDestModuleJSFileSync,
} = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');
const configs = require('./rules');

const getPackages = ({ preset, usePrettier }) => {
  const base = ['eslint', 'eslint-plugin-html', 'eslint-plugin-import'];
  const es6 = [
    'babel-eslint',
    'eslint-config-airbnb-base',
    'eslint-plugin-node',
  ];
  const es5 = [
    // 'eslint-plugin-es5',
    'eslint-config-airbnb-base',
  ];
  const react = [
    'babel-eslint',
    'eslint-config-airbnb',
    'eslint-plugin-node',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-import-resolver-webpack',
  ];
  const vue = ['eslint-plugin-vue'];
  const wechatMiniprogram = [];
  const prettier = ['eslint-config-prettier', 'eslint-plugin-prettier'];
  const map = {
    es6: [...base, ...es6],
    es5: [...base, ...es5],
    react: [...base, ...react],
    vue: [...base, ...es6, ...vue],
    'wechat-miniprogram': [...base, ...es6, ...wechatMiniprogram],
  };
  let packages = map[preset];
  if (usePrettier) {
    packages = [...packages, ...prettier];
  }
  return packages;
};

const integratePrettier = ({ preset, config }) => {
  const { extends: extendsAlias = [] } = config;
  extendsAlias.push('plugin:prettier/recommended');
  if (['react'].includes(preset)) {
    extendsAlias.push('prettier/react');
  }
  if (['vue'].includes(preset)) {
    extendsAlias.push('prettier/vue');
  }
  return config;
};

module.exports = async ({ configParsed }) => {
  const { prettier = [], eslint = [] } = configParsed;
  const [usePrettier] = prettier;
  const [, options = {}] = eslint;
  const { preset } = options;

  const packageNames = getPackages({ preset, usePrettier });
  const fileName = '.eslintrc.js';
  const fileNames = ['.eslintignore'];
  const extensions = fileExtensions.getESLint({ configParsed });
  let config = configs[preset];

  await packageJson.mergeDevDependencies({ packageNames });
  config = integratePrettier({ preset, config });
  writeObjectToDestModuleJSFileSync({ fileName, data: config });
  copyFilesToDestByTemplatesSync({ modulePath: __dirname, fileNames });
  await packageJson.merge({
    data: {
      scripts: {
        eslint: `npx eslint --fix "**/*.{${extensions}"`,
      },
    },
  });
};
