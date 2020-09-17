const merge = require('lodash/merge');

const packageJson = require('../utils/package-json');
const { writeObjectToDestModuleJSFileSync } = require('../utils/fs');

function createFile({ prettier, eslint, stylelint, cspell, commitlint }) {
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

  const data = merge({}, preCommit, commitMsg);

  if (data) {
    writeObjectToDestModuleJSFileSync({
      fileName: '.huskyrc.js',
      data,
    });
  }
}

module.exports = async ({ configParsed }) => {
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

  const packageNames = ['husky'];

  await packageJson.mergeDevDependencies({ packageNames });

  createFile({
    prettier: usePrettier,
    eslint: useEslint,
    stylelint: useStylelint,
    cspell: useCspell,
    commitlint: useCommitlint,
  });
};
