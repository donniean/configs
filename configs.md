# Configs

## [AutoCorrect](https://github.com/huacnlee/autocorrect)

Install

```shell
npm install --save-dev \
  autocorrect-node

npm pkg set \
  scripts.lint:text='autocorrect --lint' \
  scripts.lint:text:fix='autocorrect --fix'

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```
