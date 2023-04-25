import type { Linter } from 'eslint';

const devDependencies = {
  '@types/eslint': '',
  eslint: '',
};

const config: Linter.Config = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    es6: true,
    es2016: true,
    es2017: true,
    es2018: true,
    es2019: true,
    es2020: true,
    es2021: true,
    es2022: true,
    worker: true,
  },
  rules: {
    'no-useless-call': 'error',
  },
};

export { config, devDependencies };
