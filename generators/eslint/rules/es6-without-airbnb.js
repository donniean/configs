module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    es6: true,
    es2017: true,
    es2020: true,
  },
  extends: ['plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/es-builtins': [
      'error',
      {
        version: '>=12.0.0',
        ignores: [],
      },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=12.0.0',
        ignores: ['modules'],
      },
    ],
    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=12.0.0',
        ignores: [],
      },
    ],
  },
  overrides: [
    {
      files: [
        'webpack.js',
        'webpack.*.js',
        'rollup.js',
        'rollup.*.js',
        'gulpfile.js',
        'gulpfile.*.js',
        'postcss.config.js',
        'postcss.*.js',
        'config-overrides.js',
        'config-overrides.*.js',
        '**/config-overrides/**/*.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
