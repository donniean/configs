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
  env: 'es6', // es6
  modules: {
    editorconfig: true,
    prettier: true,
    eslint: [
      true,
      {
        'eslint-plugin-simple-import-sort': [
          false,
          {
            files: ['./src/**'],
          },
        ],
        'eslint-plugin-import': {
          'resolver-webpack-config-file': './webpack/webpack.config.dev.js',
        },
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
  },
};
```
