import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    'eslint-plugin-n': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: ['plugin:n/recommended'],
  };
}

export { getConfig, getDevDependencies };
