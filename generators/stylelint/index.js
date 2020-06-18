const Generator = require('yeoman-generator');
const merge = require('webpack-merge');

const {
  extendPackageJSON,
  extendDevDependencies,
} = require('../../utils/package-json');
const {
  copyFilesFromTemplate,
  writeObjectModuleJS,
} = require('../../utils/fs');
const styledComponentsConfig = require('./rules/styled-components');
let config = require('./rules');

function getPackages({ prettier, 'styled-components': styledComponents }) {
  let packages = ['stylelint', 'stylelint-config-standard'];
  if (prettier) {
    packages = [...packages, 'stylelint-config-prettier', 'stylelint-prettier'];
  }
  if (styledComponents) {
    packages = [
      ...packages,
      'stylelint-processor-styled-components',
      'stylelint-config-styled-components',
    ];
  }
  return packages;
}

function integratePrettier({ config: c }) {
  const { extends: extendsAlias = [] } = c;
  extendsAlias.push('stylelint-prettier/recommended');
  return c;
}

module.exports = class extends Generator {
  /* constructor(args, opts) {
    super(args, opts);
  } */

  async writing() {
    const { promptValues } = this.config.getAll();
    const {
      configs: baseAnswers,
      stylelint: stylelintAnswers = [],
    } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');
    const hasStyledComponents = stylelintAnswers.includes('styled-components');

    const packageNames = getPackages({
      prettier: hasPrettier,
      'styled-components': hasStyledComponents,
    });
    const fileName = 'stylelint.config.js';
    const fileNames = ['.stylelintignore'];

    await extendDevDependencies({ context: this, packageNames });
    if (hasStyledComponents) {
      config = merge({}, config, styledComponentsConfig);
    }
    config = integratePrettier({ config });
    writeObjectModuleJS({ context: this, fileName, object: config });
    copyFilesFromTemplate({ context: this, fileNames });
    extendPackageJSON({
      context: this,
      json: {
        scripts: {
          stylelint: 'npx stylelint --fix "**/*.{css,scss,js,jsx,vue}"',
        },
      },
    });
  }
};
