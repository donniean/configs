module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    amd: true,
  },
  rules: {
    'no-useless-call': 'error',
    'init-declarations': ['error', 'always'],
  },
};
