const packageJson = require('../utils/package-json');
const { writeObjectToDestModuleJSFile } = require('../utils/fs');

function createFile({ prettier, eslint, stylelint, styledComponents, cspell }) {
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

  writeObjectToDestModuleJSFile({
    // TODO: .lintstagedrc.JS
    fileName: 'lint-staged.config.js',
    data: config,
  });
}

module.exports = ({ configParsed }) => {
  const {
    prettier = [],
    eslint = [],
    stylelint = [],
    cspell = [,
  } = configParsed;
  const [usePrettier] = prettier;
  const [useEslint] = eslint;
  const [useStylelint, stylelintOptions = {}] = stylelint;
  const { 'styled-components': styledComponents } = stylelintOptions;
  const [useCspell] = cspell;

  const packageNames = ['lint-staged'];

  packageJson.mergeDevDependencies({ packageNames });

  createFile({
    prettier: usePrettier,
    eslint: useEslint,
    stylelint: useStylelint,
    styledComponents,
    cspell: useCspel,
  });
};
