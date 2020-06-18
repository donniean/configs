module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:node/recommended'],
};

/* module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}; */
