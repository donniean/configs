const Generator = require('yeoman-generator');
const merge = require('webpack-merge');

const {
  extendPackageJSON,
  extendDevDependencies
} = require('../../utils/package-json');
const {
  copyFilesFromTemplate,
  writeObjectModuleJS
} = require('../../utils/fs');
const styledComponentsConfig = require('./rules/styled-components');
let config = require('./rules');

function getPackages({ prettier }) {
  let packages = ['stylelint', 'stylelint-config-standard'];
  if (prettier) {
    packages = [...packages, 'stylelint-config-prettier', 'stylelint-prettier'];
  }
  return packages;
}

function integratePrettier({ config }) {
  let { extends: extendsAlias = [] } = config;
  extendsAlias.push('stylelint-prettier/recommended');
  return config;
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const { promptValues } = this.config.getAll();
    const { configs: baseAnswers, stylelint: stylelintAnswers } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');
    const hasStyledComponents = stylelintAnswers.includes('styled-components');

    const packageNames = getPackages({ prettier: hasPrettier });
    const fileName = 'stylelint.config.js';
    const fileNames = ['.stylelintignore'];

    await extendDevDependencies({ context: this, packageNames });
    config = integratePrettier({ config });
    if (hasStyledComponents) {
      config = merge({}, config, styledComponentsConfig);
    }
    writeObjectModuleJS({ context: this, fileName, object: config });
    copyFilesFromTemplate({ context: this, fileNames });
    extendPackageJSON({
      context: this,
      json: {
        scripts: {
          stylelint: 'npx stylelint --fix "**/*.{css,scss,html,js,jsx,vue}"'
        }
      }
    });
  }
};
