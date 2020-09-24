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
  languages: {
    js: true,
    jsx: false,
    vue: false,
    css: true,
    scss: false,
    less: false,
    html: true,
    json: true,
    yaml: false,
    md: true,
  },
  env: 'es6', // es6, es5, wechat-miniprogram
  options: {
    'styled-components': false,
    git: true,
    'private-package': false,
    license: true,
  },
  disabled: {
    editorconfig: false,
    prettier: false,
    eslint: false,
    stylelint: false,
    htmlhint: false,
    cspell: false,
    commitlint: false,
    'lint-staged': false,
    gitignore: false,
    gitattributes: false,
  },
};
```
