import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    'eslint-config-prettier': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: ['prettier'],
  };
}

export { getConfig, getDevDependencies };
