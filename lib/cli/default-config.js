module.exports = {
  languages: ['js', 'css', 'html', 'json', 'md'],
  env: 'es6', // es6, es5, wechat-miniprogram
  modules: {
    editorconfig: true,
    prettier: true,
    eslint: true,
    stylelint: [
      true,
      {
        'styled-components': false,
      },
    ],
    htmlhint: true,
    cspell: true,
    commitlint: true,
    'lint-staged': true,
    gitignore: true,
    gitattributes: true,
    license: true,
    'private-package': false,
  },
};
