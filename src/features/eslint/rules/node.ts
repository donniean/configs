import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    'eslint-plugin-n': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    env: {
      browser: false,
      worker: false,
    },
    extends: ['plugin:n/recommended'],
    rules: {
      'n/no-missing-import': 'off',
    },
  };
}

export { getConfig, getDevDependencies };
