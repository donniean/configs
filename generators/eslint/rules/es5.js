'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script'
  },
  env: {
    node: false,
    commonjs: false,
    es6: false
  },
  plugins: ['es5'],
  extends: ['plugin:es5/no-es2015', 'plugin:es5/no-es2016']
};
