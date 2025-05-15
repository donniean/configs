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

## ~~[Commitizen](https://github.com/commitizen-tools/commitizen)~~ DEPRECATED

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
