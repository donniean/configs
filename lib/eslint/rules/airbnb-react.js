module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
  },
};
