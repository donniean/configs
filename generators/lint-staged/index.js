const Generator = require('yeoman-generator');
const merge = require('lodash/merge');

const { extendDevDependencies } = require('../../utils/package-json');
const { writeObjectModuleJS } = require('../../utils/fs');

function createHuskyFile({
  context,
  prettier,
  eslint,
  stylelint,
  cspell,
  commitlint,
}) {
  const preCommit = (() => {
    if (prettier || eslint || stylelint || cspell) {
      return {
        hooks: {
          'pre-commit': 'lint-staged',
        },
      };
    }
    return null;
  })();

  const commitMsg = (() => {
    if (commitlint) {
      return {
        hooks: {
          'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        },
      };
    }
    return null;
  })();

  const config = merge(null, preCommit, commitMsg);

  if (config) {
    writeObjectModuleJS({
      context,
      fileName: '.huskyrc.js',
      object: config,
    });
  }
}

function createLintStagedFile({
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
    const hasCommitlint = baseAnswers.includes('cspell');
    const hasCspell = baseAnswers.includes('commitlint');
    const hasStyledComponents = stylelintAnswers.includes('styled-components');
    const packageNames = ['husky', 'lint-staged'];

    await extendDevDependencies({ context: this, packageNames });

    createHuskyFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      cspell: hasCspell,
      commitlint: hasCommitlint,
    });

    createLintStagedFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      styledComponents: hasStyledComponents,
      cspell: hasCspell,
    });
  }
};
