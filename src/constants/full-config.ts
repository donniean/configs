import { Config } from '@/types/config';

const CONFIG: Config = {
  modules: {
    editorconfig: true,
    prettier: {
      extensions: [],
      ignore: [],
    },
    eslint: {
      extensions: [],
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
