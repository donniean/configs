const { findIndex } = require('lodash');

const choices = [
  { name: 'ECMAScript 6 +', value: 'es6' },
  { name: 'ECMAScript 5', value: 'es5' },
  { name: 'WeChat Mini Program', value: 'wechat-miniprogram' },
];

module.exports = ({ lastParsedConfig }) => {
  const { env } = lastParsedConfig;
  const index = findIndex(choices, { value: env });

  return [
    {
      type: 'list',
      name: 'env',
      message: 'Select an Environment',
      default: index,
      choices,
      pageSize: 100,
      loop: false,
    },
  ];
};
