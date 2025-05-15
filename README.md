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
npm pkg delete \
  scripts.lint:js \
  scripts.lint:js:fix
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

## ESLint

References

- <https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/.eslintrc.cjs>
- <https://biomejs.dev/linter/rules-sources/>
- <https://github.com/antfu/eslint-config>
- <https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js>
- <https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js>

## License

[MIT](./LICENSE)
