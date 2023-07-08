import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    'eslint-plugin-vitest': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: ['plugin:vitest/recommended'],
  };
}

export { getConfig, getDevDependencies };
