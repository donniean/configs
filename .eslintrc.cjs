/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // requireConfigFile: false,
  },
  env: {
    browser: false,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    amd: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-useless-call': 'error',
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
      files: ['**/*.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
      ],
      plugins: ['simple-import-sort'],
      rules: {
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
};
