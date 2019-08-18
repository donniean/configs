'use strict';

const Generator = require('yeoman-generator');

const {
  extendPackageJSON,
  extendDevDependencies
} = require('../../utils/package-json');
const { writeObjectModuleJS } = require('../../utils/fs');

function addHuskyToPackageJSON({ context, prettier, eslint, stylelint }) {
  if (prettier || eslint || stylelint) {
    extendPackageJSON({
      context,
      json: {
        husky: {
          hooks: {
            'pre-commit': 'lint-staged'
          }
        }
      }
    });
  }
}

function createFile({ context, prettier, eslint, stylelint }) {
  let config = {};

  if (prettier) {
    config['*.{js,jsx,html,vue,css,scss,json,md}'] = [
      'prettier --write',
      'git add'
    ];
  }

  if (eslint) {
    config['*.{js,jsx,html,vue}'] = ['eslint --fix', 'git add'];
  }

  if (stylelint) {
    config['*.{css,scss,html,js,jsx,vue}'] = ['stylelint --fix', 'git add'];
  }

  writeObjectModuleJS({
    context,
    fileName: 'lint-staged.config.js',
    object: config
  });
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async writing() {
    const { promptValues } = this.config.getAll();
    const { configs: baseAnswers } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');

    addHuskyToPackageJSON({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint
    });

    await extendDevDependencies({
      context: this,
      packageNames: ['husky', 'lint-staged']
    });

    createFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint
    });
  }
};
