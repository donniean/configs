const packageJson = require('../utils/package-json');
const { writeObjectToDestModuleJSFileSync } = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');

function createFile({ configParsed }) {
  const {
    prettier = [],
    eslint = [],
    stylelint = [],
    cspell = [],
  } = configParsed;
  const [usePrettier] = prettier;
  const [useEslint] = eslint;
  const [useStylelint] = stylelint;
  const [useCspell] = cspell;
  const config = {};

  if (usePrettier) {
    config[`*.{${fileExtensions.getPrettier({ configParsed })}}`] =
      'prettier --write';
  }

  if (useEslint) {
    config[`*.{${fileExtensions.getESLint({ configParsed })}}`] =
      'eslint --fix';
  }

  if (useStylelint) {
    config[`*.{${fileExtensions.getStylelint({ configParsed })}}`] =
      'stylelint --fix';
  }

  if (useCspell) {
    config['*.*'] = 'cspell';
  }

  writeObjectToDestModuleJSFileSync({
    fileName: '.lintstagedrc.js',
    data: config,
  });
}

module.exports = async ({ configParsed }) => {
  const packageNames = ['lint-staged'];
  await packageJson.mergeDevDependencies({ packageNames });
  createFile({ configParsed });
};
