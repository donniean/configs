import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    'eslint-plugin-vitest': '^0.4.1',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: ['plugin:vitest/recommended'],
  };
}

export { getConfig, getDevDependencies };
