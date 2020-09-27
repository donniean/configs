const { get, findIndex } = require('lodash');

const { DEFAULT_ENV } = require('../../constants/defaults');

const choices = [
  { name: 'ECMAScript 6 +', value: 'es6' },
  { name: 'ECMAScript 5', value: 'es5' },
  { name: 'WeChat Mini Program', value: 'wechat-miniprogram' },
];

module.exports = ({ lastParsedConfig, parsedLanguages }) => {
  const { env: lastEnv } = lastParsedConfig;
  const defaultIndex = findIndex(choices, { value: DEFAULT_ENV });
  const jsx = get(parsedLanguages, ['jsx', 0]);
  const vue = get(parsedLanguages, ['vue', 0]);
  const disableES5 = jsx || vue;
  const index =
    disableES5 && lastEnv === 'es5'
      ? defaultIndex
      : findIndex(choices, { value: lastEnv });

  return [
    {
      type: 'list',
      name: 'env',
      message: 'Select an Environment',
      default: index,
      choices() {
        return choices.map((item) => {
          const { value } = item;
          const disabled = disableES5 && value === 'es5';
          return { ...item, disabled };
        });
      },
      pageSize: 100,
    },
  ];
};
