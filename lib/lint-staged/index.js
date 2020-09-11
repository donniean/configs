const Generator = require('yeoman-generator');

const { extendDevDependencies } = require('../utils/package-json');
const { writeObjectModuleJS } = require('../utils/fs');

function createFile({
  context,
  prettier,
  eslint,
  stylelint,
  styledComponents,
  cspell,
}) {
  const config = {};

  if (prettier) {
    config['*.{js,ts,jsx,tsx,json,html,vue,css,less,scss,md,yaml}'] =
      'prettier --write';
  }

  if (eslint) {
    config['*.{js,jsx,html,vue}'] = 'eslint --fix';
  }

  if (stylelint && !styledComponents) {
    config['*.{css,scss,js,jsx,vue}'] = 'stylelint --fix';
  }

  if (cspell) {
    config['*.*'] = 'cspell';
  }

  writeObjectModuleJS({
    context,
    fileName: 'lint-staged.config.js',
    object: config,
  });
}

module.exports = class extends Generator {
  async writing() {
    const { promptValues } = this.config.getAll();
    const {
      configs: baseAnswers,
      stylelint: stylelintAnswers = [],
    } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    const hasCspell = baseAnswers.includes('commitlint');
    const hasStyledComponents = stylelintAnswers.includes('styled-components');
    const packageNames = ['husky', 'lint-staged'];

    await extendDevDependencies({ context: this, packageNames });

    createFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      styledComponents: hasStyledComponents,
      cspell: hasCspell,
    });
  }
};
