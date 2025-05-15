# Configs

## [AutoCorrect](https://github.com/huacnlee/autocorrect)

Install

```shell
npm install --save-dev autocorrect-node

npm pkg set \
  scripts.lint:text="autocorrect --lint" \
  scripts.lint:text:fix="autocorrect --fix"

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```

Uninstall

```shell
npm pkg delete devDependencies.autocorrect-node

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

npm pkg set scripts.commit="cz"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.cz.json
```

Uninstall

```shell
npm pkg delete \
  devDependencies.commitizen \
  devDependencies.cz-conventional-changelog

npm pkg delete scripts.commit

rm .cz.json
```

## [commitlint](https://github.com/conventional-changelog/commitlint)

Install

```shell
npm install --save-dev \
  @commitlint/cli \
  @commitlint/config-conventional

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs
```

## [CSpell](https://github.com/streetsidesoftware/cspell)

Install

```shell
npm install --save-dev cspell

npm pkg set scripts.lint:spell="cspell lint --no-progress --no-must-find-files --gitignore ."

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Uninstall

```shell
npm pkg delete devDependencies.cspell

npm pkg delete scripts.lint:spell

rm cspell.config.mjs
```

## [EditorConfig](https://editorconfig.org/)

Install

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig
```

Uninstall

```shell
rm .editorconfig
```

## [ESLint2](https://github.com/eslint/eslint)

Install

```shell
npm install --save-dev \
  @eslint-community/eslint-plugin-eslint-comments \
  @eslint/js \
  @tanstack/eslint-plugin-query \
  @vitest/eslint-plugin \
  eslint \
  eslint-config-prettier \
  eslint-import-resolver-typescript \
  eslint-plugin-import-x \
  eslint-plugin-jsx-a11y \
  eslint-plugin-n \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-simple-import-sort \
  eslint-plugin-sonarjs \
  eslint-plugin-unicorn \
  eslint-plugin-unused-imports \
  globals \
  typescript-eslint

npm pkg set \
  scripts.lint:js="eslint" \
  scripts.lint:js:fix="npm run lint:js -- --fix"

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/eslint.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.@eslint-community/eslint-plugin-eslint-comments \
  devDependencies.@eslint/js \
  devDependencies.@tanstack/eslint-plugin-query \
  devDependencies.@vitest/eslint-plugin \
  devDependencies.eslint \
  devDependencies.eslint-config-prettier \
  devDependencies.eslint-import-resolver-typescript \
  devDependencies.eslint-plugin-import-x \
  devDependencies.eslint-plugin-jsx-a11y \
  devDependencies.eslint-plugin-n \
  devDependencies.eslint-plugin-promise \
  devDependencies.eslint-plugin-react \
  devDependencies.eslint-plugin-react-hooks \
  devDependencies.eslint-plugin-react-refresh \
  devDependencies.eslint-plugin-simple-import-sort \
  devDependencies.eslint-plugin-sonarjs \
  devDependencies.eslint-plugin-unicorn \
  devDependencies.eslint-plugin-unused-imports \
  devDependencies.globals \
  devDependencies.typescript-eslint

npm pkg delete \
  scripts.lint:js \
  scripts.lint:js:fix

rm eslint.config.mjs
```

## [gitattributes](https://git-scm.com/docs/gitattributes)

Install

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes
```

Uninstall

```shell
rm .gitattributes
```

## [gitignore](https://git-scm.com/docs/gitignore)

Install

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitignore
```

Uninstall

```shell
rm .gitignore
```
