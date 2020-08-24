const Generator = require('yeoman-generator');
const merge = require('lodash/merge');

const {
  extendPackageJSON,
  extendDevDependencies,
} = require('../../utils/package-json');
const { writeObjectModuleJS } = require('../../utils/fs');

function addHuskyToPackageJSON({
  context,
  prettier,
  eslint,
  stylelint,
  commitlint,
}) {
  const json = {
    husky: {
      hooks: {
        'pre-commit': 'lint-staged',
      },
    },
  };

  const preCommit = (() => {
    if (prettier || eslint || stylelint) {
      return {
        husky: {
          hooks: {
            'pre-commit': 'lint-staged',
          },
        },
      };
    }
    return null;
  })();

  const commitMsg = (() => {
    if (commitlint) {
      return {
        husky: {
          hooks: {
            'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
          },
        },
      };
    }
    return null;
  })();

  extendPackageJSON({
    context,
    json: merge({}, json, preCommit, commitMsg),
  });
}

function createFile({
  context,
  prettier,
  eslint,
  stylelint,
  styledComponents,
}) {
  const config = {};

  if (prettier) {
    config['*.{js,ts,jsx,tsx,json,html,vue,css,less,scss,md,yaml}'] = [
      'prettier --write',
      'git add',
    ];
  }

  if (eslint) {
    config['*.{js,jsx,html,vue}'] = ['eslint --fix', 'git add'];
  }

  if (stylelint && !styledComponents) {
    config['*.{css,scss,js,jsx,vue}'] = ['stylelint --fix', 'git add'];
  }

  writeObjectModuleJS({
    context,
    fileName: 'lint-staged.config.js',
    object: config,
  });
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
    const hasESLint = baseAnswers.includes('eslint');
    const hasStylelint = baseAnswers.includes('stylelint');
    const hasCommitlint = baseAnswers.includes('commitlint');
    const hasStyledComponents = stylelintAnswers.includes('styled-components');
    const packageNames = ['husky', 'lint-staged'];

    await extendDevDependencies({ context: this, packageNames });

    addHuskyToPackageJSON({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      commitlint: hasCommitlint,
    });

    createFile({
      context: this,
      prettier: hasPrettier,
      eslint: hasESLint,
      stylelint: hasStylelint,
      styledComponents: hasStyledComponents,
    });
  }
};
