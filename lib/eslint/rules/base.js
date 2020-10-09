module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    amd: true,
  },
  plugins: ['html'],
  root: true,
  rules: {
    'no-useless-call': 'error',
    'init-declarations': ['error', 'always'],
  },
};
