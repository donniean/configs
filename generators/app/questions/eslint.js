module.exports = [
  {
    type: 'list',
    name: 'eslint',
    message: 'Select an ESLint preset',
    store: true,
    choices: [
      { name: 'ECMAScript 6', value: 'es6' },
      { name: 'ECMAScript 5', value: 'es5' },
      { name: 'React', value: 'react' },
      { name: 'Vue', value: 'vue' },
      { name: 'WeChat Mini Program', value: 'wechat-miniprogram' },
      { name: 'AppCan', value: 'appcan' },
    ],
  },
];
