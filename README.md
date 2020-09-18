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
      es6: true,
      es5: false,
      react: false,
      vue: false,
      'wechat-miniprogram': false,
      appcan: false,
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
