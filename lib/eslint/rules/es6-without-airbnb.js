module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // TODO: @babel/eslint-parser
    parser: 'babel-eslint',
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
    'node/no-unsupported-features/es-builtins': [
      'error',
      { version: '>=14.0.0', ignores: [] },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { version: '>=14.0.0', ignores: ['modules'] },
    ],
    'node/no-unsupported-features/node-builtins': [
      'error',
      { version: '>=14.0.0', ignores: [] },
    ],
  },
  overrides: [
    {
      files: [
        '**/webpack.js',
        '**/webpack.*.js',
        '**/rollup.js',
        '**/rollup.*.js',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/postcss.config.js',
        '**/postcss.*.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
