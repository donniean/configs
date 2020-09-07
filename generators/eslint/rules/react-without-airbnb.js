module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'node/no-missing-import': [
      'error',
      {
        tryExtensions: ['.js', '.jsx', '.json'],
      },
    ],
  },
};
