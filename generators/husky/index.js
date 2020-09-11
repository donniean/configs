const Generator = require('yeoman-generator');
const merge = require('lodash/merge');

const { extendDevDependencies } = require('../../utils/package-json');
const { writeObjectModuleJS } = require('../../utils/fs');

function createFile({
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

module.exports = class extends Generator {
  async writing() {
    const { promptValues } = this.config.getAll();
    const { configs: baseAnswers } = promptValues;
    const hasPrettier = baseAnswers.includes('prettier');
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    const hasCommitlint = baseAnswers.includes('cspell');
    const hasCspell = baseAnswers.includes('commitlint');
    const packageNames = ['husky', 'lint-staged'];

    await extendDevDependencies({ context: this, packageNames });

    createFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      cspell: hasCspell,
      commitlint: hasCommitlint,
    });
  }
};
