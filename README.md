# @donniean/generator-configs

## Install

```bash
npm install -g yo @donniean/generator-configs
```

## Usage

```bash
cd project-folder

yo @donniean/generator-configs
```

## Config

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
  private: false,
};
```
