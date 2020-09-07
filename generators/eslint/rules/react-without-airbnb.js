module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'node/no-missing-import': [
      'error',
      {
        tryExtensions: ['.js', '.jsx', '.json'],
      },
    ],
  },
};
