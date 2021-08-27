const { resolve } = require('path');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: resolve(process.cwd(), 'webpack', 'webpack.config.dev.js'),
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
  },
};
