# @donniean/configs

## Install

```shell
npm install -g @donniean/configs
```

## Usage

```shell
cd project-folder
```

```shell
configs
```

## Config File

`.configsrc.js` full config

```js
module.exports = {
  languages: [
    'js',
    'jsx',
    'vue',
    'css',
    'scss',
    'less',
    'html',
    'json',
    'yaml',
    'md',
  ],
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
```
