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

.configsrc.js

```js
module.exports = {
  editorconfig: true,
  prettier: true,
  eslint: [
    true,
    {
      preset: 'es6', // es6, es5, react, vue, wechat-miniprogram, appcan
    },
  ],
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
};
```
