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
    config[
      `*.${fileExtensions.getPrettier({ parsedConfig, withGlobBraces: true })}`
    ] = 'prettier --write';
  }

  if (useEslint) {
    config[
      `*.${fileExtensions.getESLint({ parsedConfig, withGlobBraces: true })}`
    ] = 'eslint --fix';
  }

  if (useStylelint) {
    config[
      `*.${fileExtensions.getStylelint({ parsedConfig, withGlobBraces: true })}`
    ] = 'stylelint --fix';
  }

  if (useCspell) {
    config['*'] = 'cspell';
  }

  writeObjectToDestModuleJSFileSync({
    fileName: '.lintstagedrc.js',
    data: config,
  });
}

module.exports = async ({ parsedConfig }) => {
  const packageNames = ['lint-staged'];
  await packageJson.mergeDevDependencies({ packageNames });
  await packageJson.merge({
    data: {
      scripts: {
        'pre-commit': 'lint-staged',
      },
    },
  });
  createFile({ parsedConfig });
};
