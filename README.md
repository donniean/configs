# @donniean/configs

a configs generator

[![Version](https://img.shields.io/npm/v/@donniean/configs.svg)](https://www.npmjs.com/package/@donniean/configs) [![License: MIT](https://img.shields.io/github/license/donniean/configs)](https://github.com/donniean/configs/blob/master/LICENSE) [![CI](https://github.com/donniean/configs/actions/workflows/ci.yml/badge.svg)](https://github.com/donniean/configs/actions/workflows/ci.yml) [![Release](https://github.com/donniean/configs/actions/workflows/release.yml/badge.svg)](https://github.com/donniean/configs/actions/workflows/release.yml)

## Prerequisites

- node >=22.0.0

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
rm configs.config.mjs
npm pkg delete devDependencies.@donniean/configs

# AutoCorrect
npm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix \
  devDependencies.autocorrect-node
rm \
  .autocorrectrc \
  .autocorrectignore

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
  scripts.lint:spell \
  devDependencies.cspell
rm cspell.config.cjs

# EditorConfig
rm .editorconfig

# ESLint
# TODO: ESLint uninstallation
npm pkg delete \
  scripts.lint:js \
  scripts.lint:js:fix \
  devDependencies.@types/eslint \
  devDependencies.eslint \
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
  devDependencies.eslint-import-resolver-typescript \
  devDependencies.eslint-plugin-vitest \
  devDependencies.eslint-config-airbnb \
  devDependencies.eslint-config-airbnb-base \
  devDependencies.eslint-config-airbnb-typescript
rm \
  .eslintrc.cjs \
  .eslintignore

# gitattributes
rm .gitattributes

# gitignore
rm .gitignore

# HTMLHint
npm pkg delete \
  scripts.lint:html \
  devDependencies.htmlhint
rm .htmlhintrc

# husky
npm pkg delete \
  scripts.prepare \
  devDependencies.husky
rm -rf .husky/

# Knip
npm pkg delete \
  scripts.knip \
  scripts.knip:fix \
  devDependencies.knip

# lint-staged
npm pkg delete \
  scripts.pre-commit \
  devDependencies.lint-staged
rm lint-staged.config.mjs

# markdownlint
npm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix \
  devDependencies.markdownlint-cli
rm \
  .markdownlint.json \
  .markdownlintignore

# npm-check-updates

npm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade \
  devDependencies.npm-check-updates

# Prettier
npm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss
rm \
  prettier.config.mjs \
  .prettierignore

# Sort Package.json
npm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix \
  devDependencies.sort-package-json

# Stylelint
npm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix \
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
  scripts.lint:types \
  devDependencies.typescript

# Vitest
npm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.vitest

# all
npm pkg delete \
  scripts.lint \
  scripts.lint:fix

rm -rf **/node_modules/
rm **/package-lock.json
```

### Legacy

```shell
# AutoCorrect
npm pkg delete \
  scripts.lint:autocorrect \
  scripts.lint:autocorrect:fix

# CSpell
npm pkg delete \
  scripts.lint:cspell

# ESLint
# TODO: ESLint uninstallation
npm pkg delete \
  scripts.lint:eslint \
  scripts.lint:eslint:fix \
  devDependencies.@types/eslint \
  devDependencies.eslint \
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
  devDependencies.eslint-import-resolver-typescript \
  devDependencies.eslint-plugin-vitest \
  devDependencies.eslint-config-airbnb \
  devDependencies.eslint-config-airbnb-base \
  devDependencies.eslint-config-airbnb-typescript
rm \
  .eslintrc.cjs \
  eslint.legacy.mjs \
  .eslintignore

# HTMLHint
npm pkg delete \
  scripts.lint:htmlhint

# Knip
npm pkg delete \
  scripts.knip

# markdownlint
npm pkg delete \
  scripts.lint:markdownlint \
  scripts.lint:markdownlint:fix

# npm-check-updates

npm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade

# Prettier
npm pkg delete \
  scripts.lint:prettier \
  scripts.lint:prettier:fix

# Sort Package.json
npm pkg delete \
  scripts.lint:sort-package-json \
  scripts.lint:sort-package-json:fix

# Stylelint
npm pkg delete \
  scripts.lint:stylelint \
  scripts.lint:stylelint:fix

# tsc
npm pkg delete \
  scripts.lint:tsc

# all
npm pkg delete \
  scripts.lint-all \
  scripts.lint-all:fix

rm -rf **/node_modules/
rm **/package-lock.json
```

## License

[MIT](./LICENSE)
