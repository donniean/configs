'use strict';
exports.__esModule = true;
var DEFAULT_CONFIG = {
  modules: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      extensions: [],
    },
    tsc: {
      extensions: [],
    },
    eslint: {
      extensions: [],
      addons: {},
    },
    stylelint: {
      extensions: [],
      addons: {},
    },
    htmlhint: false,
    markdownlint: true,
    cspell: {
      extensions: ['*'],
    },
    commitlint: true,
    commitizen: true,
    husky: true,
    'lint-staged': {
      prettier: true,
      eslint: true,
      tsc: true,
      stylelint: true,
      markdownlint: true,
      cspell: true,
    },
  },
};
exports['default'] = DEFAULT_CONFIG;
