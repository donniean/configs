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
# cspell: disable-next-line
rm .czrc;
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
rm commitlint.config.js;
rm configs.config.js;
rm lint-staged.config.js;
rm prettier.config.js
rm stylelint.config.js

npm pkg delete scripts.prettier;
npm pkg delete scripts.eslint;
npm pkg delete scripts.stylelint;
npm pkg delete scripts.cspell;
npm pkg delete scripts.pre-commit;
npm pkg delete scripts.commit;
npm pkg delete scripts.prepare;
npm pkg delete config;

# npm uninstall @babel/core;
# npm uninstall @babel/eslint-parser;
npm uninstall @commitlint/cli;
npm uninstall @commitlint/config-conventional;
npm uninstall @stylelint/postcss-css-in-js;
# npm uninstall @typescript-eslint/eslint-plugin;
# npm uninstall @typescript-eslint/parser;
npm uninstall commitizen;
npm uninstall cspell;
npm uninstall cz-conventional-changelog;
# npm uninstall eslint;
# npm uninstall eslint-config-airbnb;
# npm uninstall eslint-config-airbnb-typescript;
# npm uninstall eslint-config-prettier;
# npm uninstall eslint-import-resolver-typescript;
# npm uninstall eslint-import-resolver-webpack;
# npm uninstall eslint-plugin-html;
# npm uninstall eslint-plugin-import;
# npm uninstall eslint-plugin-jsx-a11y;
# npm uninstall eslint-plugin-node;
# npm uninstall eslint-plugin-prettier;
# npm uninstall eslint-plugin-react;
# npm uninstall eslint-plugin-react-hooks;
# npm uninstall eslint-plugin-simple-import-sort;
npm uninstall htmlhint;
npm uninstall husky;
npm uninstall lint-staged;
npm uninstall postcss-syntax;
npm uninstall prettier;
npm uninstall stylelint;
npm uninstall stylelint-config-prettier;
npm uninstall stylelint-config-rational-order;
npm uninstall stylelint-config-standard;
npm uninstall stylelint-config-styled-components;
npm uninstall stylelint-order;
npm uninstall stylelint-prettier;

rm package-lock.json;
```

## TODOs

- [ ] pure ESM
- [ ] `zod`
- ignore
  - [ ] git ignore
  - [ ] lint ignore
- [ ] GitHub Actions
  - [ ] GITHUB_TOKEN
- disable
  - [ ] `ts-ignore`
  - [ ] `eslint-disable`
  - [ ] `cspell: disable`
- Prettier
  - [x] `prettier --check`
  - [ ] `"**/*"`
    - [ ] `prettier --check --ignore-unknown "**/*"`
    - [ ] `prettier --write --ignore-unknown "**/*"`
- cSpell
  - [ ] `cspell` custom `ignorePaths`
  - [x] `cspell lint --no-progress --relative --no-must-find-files --dot --gitignore "**"`
- [ ] `lint-staged --concurrent`

## License

Copyright © 2019 [Donnie An](https://github.com/donniean).

This project is [MIT](https://github.com/donniean/configs/blob/master/LICENSE)
licensed.

---

_This README was generated with ❤️
by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
