# @donniean/configs

a configs generator

[![Version](https://img.shields.io/npm/v/@donniean/configs.svg)](https://www.npmjs.com/package/@donniean/configs) [![License: MIT](https://img.shields.io/github/license/donniean/configs)](https://github.com/donniean/configs/blob/master/LICENSE) [![CI](https://github.com/donniean/configs/actions/workflows/ci.yml/badge.svg)](https://github.com/donniean/configs/actions/workflows/ci.yml) [![Release](https://github.com/donniean/configs/actions/workflows/release.yml/badge.svg)](https://github.com/donniean/configs/actions/workflows/release.yml)

## Prerequisites

- node >=20.0.0

## Install

```shell
npm install -g @donniean/configs
```

## Usage

```shell
cd PROJECT_DIRECTORY
```

create `configs.config.cjs`

```shell
configs init
```

create configs

```shell
configs create
```

[config types](src/types/configs-config.ts)

[default config](src/constants/configs-config.ts)

## Uninstall

Uninstall package

```shell
npm uninstall -g @donniean/configs
```

Delete files

```shell
rm configs.config.cjs

# Commitizen
npm pkg delete \
  scripts.commit \
  devDependencies.commitizen \
  devDependencies.cz-conventional-changelog
rm .cz.json

# commitlint
npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional
rm commitlint.config.mjs

# CSpell
npm pkg delete \
  scripts.lint:cspell \
  devDependencies.cspell
rm cspell.config.cjs
rm -rf dictionaries/

# EditorConfig
rm .editorconfig

# ESLint
npm pkg delete \
  scripts.lint:eslint \
  scripts.lint:eslint:fix \
  devDependencies.@types/eslint \
  devDependencies.eslint \
  devDependencies.eslint-config-airbnb \
  devDependencies.eslint-config-airbnb-base \
  devDependencies.eslint-plugin-eslint-comments \
  devDependencies.eslint-plugin-import \
  devDependencies.eslint-plugin-promise \
  devDependencies.eslint-plugin-simple-import-sort \
  devDependencies.eslint-plugin-sonarjs \
  devDependencies.eslint-plugin-unicorn \
  devDependencies.@next/eslint-plugin-next \
  devDependencies.eslint-plugin-n \
  devDependencies.eslint-config-prettier \
  devDependencies.eslint-plugin-jsx-a11y \
  devDependencies.eslint-plugin-react \
  devDependencies.eslint-plugin-react-hooks \
  devDependencies.@typescript-eslint/eslint-plugin \
  devDependencies.@typescript-eslint/parser \
  devDependencies.eslint-config-airbnb-typescript \
  devDependencies.eslint-import-resolver-typescript \
  devDependencies.eslint-plugin-vitest
rm \
  .eslintrc.cjs \
  .eslintignore

# gitattributes
rm .gitattributes

# gitignore
rm .gitignore

# HTMLHint
npm pkg delete \
  scripts.lint:htmlhint \
  devDependencies.htmlhint
rm .htmlhintrc

# husky
npm pkg delete \
  scripts.prepare \
  devDependencies.husky
rm -rf .husky/

# lint-staged
npm pkg delete \
  scripts.pre-commit \
  devDependencies.lint-staged
rm lint-staged.config.mjs

# markdownlint
npm pkg delete \
  scripts.lint:markdownlint \
  scripts.lint:markdownlint:fix \
  devDependencies.markdownlint-cli
rm \
  .markdownlint.json \
  .markdownlintignore

# Prettier
npm pkg delete \
  scripts.lint:prettier \
  scripts.lint:prettier:fix \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss
rm \
  prettier.config.mjs \
  .prettierignore

# Sort Package.json
npm pkg delete \
  scripts.lint:sort-package-json \
  scripts.lint:sort-package-json:fix \
  devDependencies.sort-package-json

# Stylelint
npm pkg delete \
  scripts.lint:stylelint \
  scripts.lint:stylelint:fix \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules \
  devDependencies.stylelint-config-standard-scss \
  devDependencies.postcss-styled-syntax
rm \
  stylelint.config.mjs \
  .stylelintignore

# tsc
npm pkg delete \
  scripts.lint:tsc \
  devDependencies.typescript

# Vitest
npm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.vitest

rm package-lock.json
rm -rf **/node_modules/
```

Delete legacy files

```shell
# legacy
rm \
  commitlint.config.cjs \
  prettier.config.cjs \
  stylelint.config.cjs

# previous versions
rm \
  .configsrc.js \
  configs.config.js

rm \
  cspell.config.js \
  dictionaries/ \
  .commitlintrc.js \
  commitlint.config.js \
  .czrc \
  .eslintrc.js \
  .lintstagedrc.js \
  lint-staged.config.js \
  lint-staged.config.cjs \
  .prettierrc.js \
  prettier.config.js \
  .stylelintrc.js \
  stylelint.config.js

npm pkg delete \
  scripts.prettier \
  scripts.eslint \
  scripts.stylelint \
  scripts.cspell \
  scripts.sort-package-json \
  config \
  devDependencies.@babel/core \
  devDependencies.@babel/eslint-parser \
  devDependencies.@stylelint/postcss-css-in-js \
  devDependencies.eslint-import-resolver-webpack \
  devDependencies.eslint-plugin-html \
  devDependencies.eslint-plugin-node \
  devDependencies.eslint-plugin-prettier \
  devDependencies.postcss-syntax \
  devDependencies.stylelint-config-prettier \
  devDependencies.stylelint-config-rational-order \
  devDependencies.stylelint-config-styled-components \
  devDependencies.stylelint-order \
  devDependencies.stylelint-prettier
```
