# Configs

## [AutoCorrect](https://github.com/huacnlee/autocorrect)

Install

```shell
npm install --save-dev \
  autocorrect-node

npm pkg set \
  scripts.lint:text="autocorrect --lint" \
  scripts.lint:text:fix="autocorrect --fix"

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```

Uninstall

```shell
npm pkg delete \
  devDependencies.autocorrect-node

npm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix

rm \
  .autocorrectrc \
  .autocorrectignore
```

## [Commitizen](https://github.com/commitizen-tools/commitizen)

Install

```shell
npm install --save-dev \
  commitizen \
  cz-conventional-changelog

npm pkg set \
  scripts.commit="cz"

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.cz.json
```

Uninstall

```shell
npm pkg delete \
  devDependencies.commitizen \
  devDependencies.cz-conventional-changelog

npm pkg delete \
  scripts.commit

rm \
  .cz.json
```

## [commitlint](https://github.com/conventional-changelog/commitlint)

Install

```shell
npm install --save-dev \
  @commitlint/cli \
  @commitlint/config-conventional

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm \
  commitlint.config.mjs
```

## [CSpell](https://github.com/streetsidesoftware/cspell)

Install

```shell
npm install --save-dev \
  cspell

npm pkg set \
  scripts.lint:spell="cspell lint --no-progress --no-must-find-files --gitignore ."

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.cspell

npm pkg delete \
  scripts.lint:spell

rm \
  cspell.config.mjs
```

## [EditorConfig](https://editorconfig.org/)

Install

```shell
curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig
```

Uninstall

```shell
rm \
  .editorconfig
```
