import type { Linter } from 'eslint';

const devDependencies = {
  'eslint-config-airbnb-base': '',
  'eslint-plugin-import': '',
};

const config: Linter.Config = {
  extends: ['airbnb-base'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.{mjs,cjs}'] },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
        },
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 'off',
  },
};

export { config, devDependencies };
