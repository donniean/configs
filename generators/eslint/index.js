const Generator = require('yeoman-generator');
const merge = require('webpack-merge');

const {
  getPackageJSON,
  writePackageJSON,
  extendDevDependencies
} = require('../../utils/package-json');
const {
  copyFilesFromTemplate,
  writeObjectModuleJS
} = require('../../utils/fs');
const configs = require('./rules');

function getPackages({ preset, prettier: usePrettier }) {
  const base = ['eslint', 'eslint-plugin-html'];
  const es6 = ['babel-eslint', 'eslint-plugin-import', 'eslint-plugin-node'];
  const es5 = ['eslint-plugin-es5'];
  const react = ['eslint-plugin-react', 'eslint-plugin-react-hooks'];
  const reactNative = ['eslint-plugin-react-native'];
  const vue = ['eslint-plugin-vue'];
  const wechatMiniprogram = [];
  const appcan = ['eslint-plugin-jquery'];
  const prettier = ['eslint-config-prettier', 'eslint-plugin-prettier'];
  const map = {
    es6: [...base, ...es6],
    es5: [...base, ...es5],
    react: [...base, ...es6, ...react],
    'react-native': [...base, ...es6, ...react, ...reactNative],
    vue: [...base, ...es6, ...vue],
    'wechat-miniprogram': [...base, ...es6, ...wechatMiniprogram],
    appcan: [...base, ...es5, ...appcan]
  };
  let packages = map[preset];
  if (usePrettier) {
    packages = [...packages, ...prettier];
  }
  // TODO: create react appcan
  if (preset === 'react') {
    packages = packages.filter(packageName => packageName !== 'babel-eslint');
  }
  return packages;
}

function integratePrettier({ preset, config }) {
  let { extends: extendsAlias = [] } = config;
  extendsAlias.push('plugin:prettier/recommended');
  if (['react', 'react-native'].includes(preset)) {
    extendsAlias.push('prettier/react');
  }
  if (['vue'].includes(preset)) {
    extendsAlias.push('prettier/vue');
  }
  return config;
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const { promptValues } = this.config.getAll();
    const { configs: baseAnswers, eslint: preset } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');

    const packageNames = getPackages({ preset, prettier: hasPrettier });
    const fileName = '.eslintrc.js';
    const fileNames = ['.eslintignore'];
    let config = configs[preset];

    await extendDevDependencies({ context: this, packageNames });
    config = integratePrettier({ preset, config });
    writeObjectModuleJS({ context: this, fileName, object: config });
    copyFilesFromTemplate({ context: this, fileNames });

    let packageJSON = getPackageJSON({ context: this });
    delete packageJSON.eslintConfig;
    packageJSON = merge({}, packageJSON, {
      scripts: {
        eslint: 'npx eslint --fix "**/*.{js,jsx,html,vue}"'
      }
    });
    writePackageJSON({ context: this, json: packageJSON });
  }
};
