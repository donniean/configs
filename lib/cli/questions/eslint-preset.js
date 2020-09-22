const { findIndex } = require('lodash');

const choices = [
  { name: 'ECMAScript 6 +', value: 'es6' },
  { name: 'ECMAScript 5', value: 'es5' },
  { name: 'React', value: 'react' },
  { name: 'Vue', value: 'vue' },
  { name: 'WeChat Mini Program', value: 'wechat-miniprogram' },
  { name: 'AppCan', value: 'appcan' },
];

module.exports = ({ configParsed }) => {
  const { eslint } = configParsed;
  const [, options = {}] = eslint;
  const { preset } = options;
  const index = findIndex(choices, { value: preset });

  return [
    {
      type: 'list',
      name: 'eslint-preset',
      message: 'Select an ESLint preset',
      default: index,
      choices,
      pageSize: 100,
      loop: false,
    },
  ];
};
