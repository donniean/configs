# @donniean/configs

- [@donniean/configs](#donnieanconfigs)
  - [Install](#install)
  - [Usage](#usage)
  - [Delete legacy files](#delete-legacy-files)
  - [TODOs](#todos)
  - [License](#license)

[![Version](https://img.shields.io/npm/v/@donniean/configs.svg)](https://www.npmjs.com/package/@donniean/configs) [![License: MIT](https://img.shields.io/github/license/donniean/configs)](https://github.com/donniean/configs/blob/master/LICENSE)

> configs generator

## Install

```sh
npm install -g @donniean/configs
```

## Usage

```sh
cd project-directory
```

```sh
configs create
```

## Delete legacy files

```sh
rm -rf .husky/;
rm -rf dictionaries/;
rm .commitlintrc.js;
rm .configsrc.js;
rm .editorconfig;
# rm .eslintignore;
# rm .eslintrc.js;
rm .gitattributes;
rm .gitignore;
rm .htmlhintrc;
rm .lintstagedrc.js;
rm .prettierignore
rm .prettierrc.js;
rm .stylelintignore;
rm .stylelintrc.js;
rm cspell.config.js;

npm pkg delete scripts.prettier;
npm pkg delete scripts.eslint;
npm pkg delete scripts.stylelint;
npm pkg delete scripts.cspell;
npm pkg delete scripts.pre-commit;
npm pkg delete scripts.commit;
npm pkg delete scripts.prepare;
npm pkg delete config;

npm uninstall @babel/core \
@babel/eslint-parser \
@commitlint/cli \
@commitlint/config-conventional \
@stylelint/postcss-css-in-js \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
commitizen \
cspell \
cz-conventional-changelog \
eslint \
eslint-config-airbnb \
eslint-config-airbnb-typescript \
eslint-config-prettier \
eslint-import-resolver-typescript \
eslint-import-resolver-webpack \
eslint-plugin-html \
eslint-plugin-import \
eslint-plugin-jsx-a11y \
eslint-plugin-node \
eslint-plugin-prettier \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-simple-import-sort \
htmlhint \
husky \
lint-staged \
postcss-syntax \
prettier \
stylelint \
stylelint-config-prettier \
stylelint-config-rational-order \
stylelint-config-standard \
stylelint-config-styled-components \
stylelint-order \
stylelint-prettier;

rm package-lock.json;
```

## TODOs

- [ ] `cSpell` custom `ignorePaths`
- [ ] semantic-release
- [ ] pure ESM
- [ ] `zod`
- [ ] ignore
- [ ] `ts-ignore`
- [ ] `eslint-disable`
- [ ] `cspell: disable`
- [ ] `prettier` options
- [ ] `lint-staged --concurrent`
- [ ] `prettier` all

## License

Copyright © 2019 [Donnie An](https://github.com/donniean).

This project is [MIT](https://github.com/donniean/configs/blob/master/LICENSE)
licensed.

---

_This README was generated with ❤️
by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
