export default {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
  },
  extends: ['plugin:node/recommended'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
      },
    ],
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      { version: '>=14.0.0', ignores: ['modules'] },
    ],
  },
  overrides: [
    {
      files: [
        '**/webpack.js',
        '**/webpack.*.js',
        '**/webpack.ts',
        '**/webpack.*.ts',
        '**/postcss.*.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
