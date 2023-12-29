# @donniean/configs

a configs generator

[![Version](https://img.shields.io/npm/v/@donniean/configs.svg)](https://www.npmjs.com/package/@donniean/configs) [![License: MIT](https://img.shields.io/github/license/donniean/configs)](https://github.com/donniean/configs/blob/master/LICENSE) [![CI](https://github.com/donniean/configs/actions/workflows/ci.yml/badge.svg)](https://github.com/donniean/configs/actions/workflows/ci.yml) [![Release](https://github.com/donniean/configs/actions/workflows/release.yml/badge.svg)](https://github.com/donniean/configs/actions/workflows/release.yml)

## Prerequisites

- node >=18.0.0

## Install

```sh
npm install -g @donniean/configs
```

## Usage

```sh
cd project-directory
```

create `configs.config.cjs`

```sh
configs init
```

create configs

```sh
configs create
```

[config types](src/types/configs-config.ts)

[default config](src/constants/configs-config.ts)

## Uninstall

```sh
npm uninstall -g @donniean/configs
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
rm .eslintignore;
rm .eslintrc.js;
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
rm lint-staged.config.cjs;
rm prettier.config.js;
rm stylelint.config.js;

npm pkg delete scripts.prettier;
npm pkg delete scripts.eslint;
npm pkg delete scripts.stylelint;
npm pkg delete scripts.cspell;
npm pkg delete scripts.sort-package-json;
npm pkg delete scripts.pre-commit;
npm pkg delete scripts.commit;
npm pkg delete scripts.prepare;
npm pkg delete config;

npm pkg delete devDependencies.@babel/core;
npm pkg delete devDependencies.@babel/eslint-parser;
npm pkg delete devDependencies.@commitlint/cli;
npm pkg delete devDependencies.@commitlint/config-conventional;
npm pkg delete devDependencies.@stylelint/postcss-css-in-js;
npm pkg delete devDependencies.@typescript-eslint/eslint-plugin;
npm pkg delete devDependencies.@typescript-eslint/parser;
npm pkg delete devDependencies.commitizen;
npm pkg delete devDependencies.cspell;
npm pkg delete devDependencies.cz-conventional-changelog;
npm pkg delete devDependencies.eslint;
npm pkg delete devDependencies.eslint-config-airbnb;
npm pkg delete devDependencies.eslint-config-airbnb-base
npm pkg delete devDependencies.eslint-config-airbnb-typescript;
npm pkg delete devDependencies.eslint-config-prettier;
npm pkg delete devDependencies.eslint-import-resolver-typescript;
npm pkg delete devDependencies.eslint-import-resolver-webpack;
npm pkg delete devDependencies.eslint-plugin-eslint-comments
npm pkg delete devDependencies.eslint-plugin-html;
npm pkg delete devDependencies.eslint-plugin-import;
npm pkg delete devDependencies.eslint-plugin-jsx-a11y;
npm pkg delete devDependencies.eslint-plugin-node;
npm pkg delete devDependencies.eslint-plugin-prettier;
npm pkg delete devDependencies.eslint-plugin-promise
npm pkg delete devDependencies.eslint-plugin-react;
npm pkg delete devDependencies.eslint-plugin-react-hooks;
npm pkg delete devDependencies.eslint-plugin-simple-import-sort;
npm pkg delete devDependencies.eslint-plugin-sonarjs
npm pkg delete devDependencies.eslint-plugin-unicorn
npm pkg delete devDependencies.htmlhint;
npm pkg delete devDependencies.husky;
npm pkg delete devDependencies.lint-staged;
npm pkg delete devDependencies.postcss-syntax;
npm pkg delete devDependencies.prettier;
npm pkg delete devDependencies.stylelint;
npm pkg delete devDependencies.stylelint-config-prettier;
npm pkg delete devDependencies.stylelint-config-rational-order;
npm pkg delete devDependencies.stylelint-config-standard;
npm pkg delete devDependencies.stylelint-config-styled-components;
npm pkg delete devDependencies.stylelint-order;
npm pkg delete devDependencies.stylelint-prettier;

rm package-lock.json;
rm -rf node_modules/;
rm -rf **/node_modules/;
```

test signing 5
