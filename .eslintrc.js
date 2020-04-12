module.exports = {
  env: {
    browser: true,
    'shared-node-browser': true,
    amd: true,
    node: true,
    commonjs: true,
    es6: true,
    worker: true,
  },
  plugins: ['html', 'import', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    curly: 'warn',
    'default-case': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-useless-call': 'warn',
    'init-declarations': 'error',
    'no-label-var': 'error',
    'no-use-before-define': ['error', { functions: false }],
    indent: ['warn', 2, { SwitchCase: 1 }],
    semi: 'error',
    'node/no-unsupported-features/es-builtins': [
      'error',
      { version: '>=10.0.0', ignores: [] },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { version: '>=10.0.0', ignores: ['modules'] },
    ],
    'node/no-unsupported-features/node-builtins': [
      'error',
      { version: '>=10.0.0', ignores: [] },
    ],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
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
