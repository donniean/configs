const merge = require('lodash/merge');

const packageJson = require('../utils/package-json');
const { writeObjectToDestModuleJSFileSync } = require('../utils/fs');

function createFile({ configParsed }) {
  const {
    prettier = [],
    eslint = [],
    stylelint = [],
    cspell = [],
    commitlint = [],
  } = configParsed;
  const [usePrettier] = prettier;
  const [useEslint] = eslint;
  const [useStylelint] = stylelint;
  const [useCspell] = cspell;
  const [useCommitlint] = commitlint;

  const preCommit = (() => {
    if (usePrettier || useEslint || useStylelint || useCspell) {
      return {
        hooks: {
          'pre-commit': 'lint-staged',
        },
      };
    }
    return null;
  })();

  const commitMsg = (() => {
    if (useCommitlint) {
      return {
        hooks: {
          'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        },
      };
    }
    return null;
  })();

  const data = merge({}, preCommit, commitMsg);

  if (data) {
    writeObjectToDestModuleJSFileSync({
      fileName: '.huskyrc.js',
      data,
    });
  }
}

module.exports = async ({ configParsed }) => {
  const packageNames = ['husky'];
  await packageJson.mergeDevDependencies({ packageNames });
  createFile({ configParsed });
};
