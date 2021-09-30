module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
          'draft',
        ],
      },
    ],
  },
};
