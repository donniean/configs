import type { ESLintConfig } from '../types';

function getDevDependencies() {
  return {
    '@typescript-eslint/eslint-plugin': '',
    '@typescript-eslint/parser': '',
    'eslint-config-airbnb-typescript': '',
    'eslint-import-resolver-typescript': '',
  };
}

interface Options {
  hasReact: boolean;
}

function getConfig({ hasReact }: Options): ESLintConfig {
  return {
    parserOptions: {
      project: true,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    extends: [
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
      hasReact ? 'airbnb-typescript' : 'airbnb-typescript/base',
    ],
    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
    },
  };
}

export { getConfig, getDevDependencies };
