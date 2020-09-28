const packageJson = require('../utils/package-json');
const { writeObjectToDestModuleJSFileSync } = require('../utils/fs');
const fileExtensions = require('../utils/file-extensions');

function createFile({ parsedConfig }) {
  const { modules = {} } = parsedConfig;
  const { prettier = [], eslint = [], stylelint = [], cspell = [] } = modules;
  const [usePrettier] = prettier;
  const [useEslint] = eslint;
  const [useStylelint] = stylelint;
  const [useCspell] = cspell;
  const config = {};

  if (usePrettier) {
    config[`*.{${fileExtensions.getPrettier({ parsedConfig })}}`] =
      'prettier --write';
  }

  if (useEslint) {
    config[`*.{${fileExtensions.getESLint({ parsedConfig })}}`] =
      'eslint --fix';
  }

  if (useStylelint) {
    config[`*.{${fileExtensions.getStylelint({ parsedConfig })}}`] =
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

module.exports = async ({ parsedConfig }) => {
  const packageNames = ['lint-staged'];
  await packageJson.mergeDevDependencies({ packageNames });
  createFile({ parsedConfig });
};
