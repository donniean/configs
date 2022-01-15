// cjs, mjs
const CONFIG = {
  modules: {
    editorconfig: true,
    prettier: {
      extensions: [],
      ignore: [],
    },
    eslint: {
      extensions: [],
      presets: [],
      addons: {},
      ignore: [],
    },
    stylelint: {
      extensions: [],
      ignore: [],
    },
    htmlhint: true,
    cspell: {
      extensions: ['*'],
      ignore: [],
    },
    commitlint: true,
    'lint-staged': {
      prettier: true,
      eslint: true,
      stylelint: true,
      cspell: true,
    },
    husky: true,
    gitignore: true,
    gitattributes: true,
  },
  ignore: [],
};

export default CONFIG;
