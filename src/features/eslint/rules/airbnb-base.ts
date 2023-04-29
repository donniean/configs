import type { ESLintConfig } from '../types';
import { airbnbBase } from '../utils';

const devDependencies = {
  'eslint-config-airbnb-base': '',
  'eslint-plugin-import': '',
};

// @ts-ignore
const noExtraneousDependenciesOptions = airbnbBase.imports.rules?.[
  'import/no-extraneous-dependencies'
]?.[1] as { devDependencies: string[] };

const config: ESLintConfig = {
  extends: ['airbnb-base'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        ...noExtraneousDependenciesOptions,
        devDependencies: [
          ...noExtraneousDependenciesOptions.devDependencies,
          '**/*.{mjs,cjs}',
        ],
      },
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
