import { getExtensionsPattern } from '@/utils/misc';

import type { ESLintConfig } from '../types';
import { airbnbBase } from '../utils';

// @ts-expect-error no error
const noExtraneousDependenciesOptions = airbnbBase.imports.rules?.[
  'import/no-extraneous-dependencies'
]?.[1] as { devDependencies: string[] };

interface GetDevDependenciesOptions {
  hasReact: boolean;
}

function getDevDependencies({ hasReact }: GetDevDependenciesOptions) {
  return {
    '@types/eslint': '',
    eslint: '',
    [hasReact ? 'eslint-config-airbnb' : 'eslint-config-airbnb-base']: '',
    'eslint-plugin-eslint-comments': '',
    'eslint-plugin-import': '',
    'eslint-plugin-promise': '',
    'eslint-plugin-simple-import-sort': '',
    'eslint-plugin-sonarjs': '',
    'eslint-plugin-unicorn': '',
  };
}

interface GetConfigOptions {
  hasTypeScript: boolean;
  hasReact: boolean;
}

function getSimpleImportSortFileExtensionsPattern({
  hasTypeScript,
  hasReact,
}: GetConfigOptions) {
  const extensions = ['mjs'];

  if (hasTypeScript) {
    extensions.push('ts');
    if (hasReact) {
      extensions.push('tsx');
    }
  } else if (hasReact) {
    extensions.push('js', 'jsx');
  }

  return getExtensionsPattern(extensions);
}

function getConfig({
  hasTypeScript,
  hasReact,
}: GetConfigOptions): ESLintConfig {
  const simpleImportSortFileExtensionsPattern =
    getSimpleImportSortFileExtensionsPattern({
      hasTypeScript,
      hasReact,
    });

  return {
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
    extends: [
      hasReact ? 'airbnb' : 'airbnb-base',
      'plugin:eslint-comments/recommended',
      'plugin:promise/recommended',
      'plugin:unicorn/recommended',
      'plugin:sonarjs/recommended',
    ],
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'no-restricted-imports': ['error', { patterns: ['../..'] }],
      'no-useless-call': 'error',
      // 'import/exports-last': 'error',
      // 'import/group-exports': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          ...noExtraneousDependenciesOptions,
          devDependencies: [
            ...noExtraneousDependenciesOptions.devDependencies.filter(
              pattern => !/.+\.js}?$/.test(pattern),
            ),
            '**/*.{mjs,cjs}',
            '**/.*.{mjs,cjs}',
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
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
    overrides: [
      {
        files: [`**/*.${simpleImportSortFileExtensionsPattern}`],
        plugins: ['simple-import-sort'],
        rules: {
          'sort-imports': 'off',
          'import/order': 'off',
          'simple-import-sort/imports': 'error',
          'simple-import-sort/exports': 'error',
        },
      },
    ],
  };
}

export { getConfig, getDevDependencies };
