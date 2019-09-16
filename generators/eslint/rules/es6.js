module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    node: true,
    commonjs: true,
    es6: true,
    worker: true
  },
  plugins: ['import', 'node'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended'
  ],
  rules: {
    'node/no-unsupported-features/es-builtins': [
      'error',
      {
        version: '>=10.0.0',
        ignores: []
      }
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=10.0.0',
        ignores: ['modules']
      }
    ],
    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=10.0.0',
        ignores: []
      }
    ]
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
        'config-overrides.js',
        'config-overrides.*.js',
        '**/config-overrides/**/*.js'
      ],
      rules: {
        'node/no-unpublished-require': 'off'
      }
    }
  ]
};
