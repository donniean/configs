module.exports = {
  env: {
    browser: true,
    'shared-node-browser': true,
    amd: true
  },
  plugins: ['html'],
  extends: ['eslint:recommended'],
  rules: {
    curly: 'warn',
    'default-case': 'warn',
    'no-empty-function': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-useless-call': 'warn',
    'init-declarations': 'error',
    'no-label-var': 'error',
    'no-use-before-define': ['error', { functions: false }],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    semi: 'error'
  }
};
