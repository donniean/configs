import { Config } from '@/types/config';

const CONFIG: Config = {
  modules: {
    editorconfig: true,
    prettier: {
      extensions: [],
    },
    eslint: {
      extensions: [],
      addons: {},
    },
    stylelint: {
      extensions: [],
    },
    htmlhint: true,
    cspell: {
      extensions: ['*'],
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
};

export default CONFIG;
