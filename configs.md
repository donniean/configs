# Configs

## Table of Contents

- [Sections](#sections)
  - [AutoCorrect](#autocorrect)
  - [CSpell](#cspell)
  - [EditorConfig](#editorconfig)
  - [ESLint](#eslint)
  - [gitattributes](#gitattributes)
  - [gitignore](#gitignore)
  - [HTMLHint](#htmlhint)
  - [Husky](#husky)
  - [commitlint](#commitlint)
  - [lint-staged1](#lint-staged1)
- [All](#all)
  - [Install](#install)
  - [Uninstall](#uninstall)

## Sections

### [AutoCorrect](https://github.com/huacnlee/autocorrect)

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

### [CSpell](https://github.com/streetsidesoftware/cspell)

Install

```shell
npm install --save-dev cspell

npm pkg set scripts.lint:spell="cspell lint --no-progress --no-must-find-files --dot --gitignore ."

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Uninstall

```shell
npm pkg delete devDependencies.cspell

npm pkg delete scripts.lint:spell

rm cspell.config.mjs
```

### [EditorConfig](https://editorconfig.org/)

Install

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig
```

Uninstall

```shell
rm .editorconfig
```

### [ESLint](https://github.com/eslint/eslint)

Install

```shell
npm install --save-dev \
  @eslint-community/eslint-plugin-eslint-comments \
  @eslint/compat \
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
  devDependencies.@eslint/compat \
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

### [gitattributes](https://git-scm.com/docs/gitattributes)

Install

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes
```

Uninstall

```shell
rm .gitattributes
```

### [gitignore](https://git-scm.com/docs/gitignore)

Install

```shell
curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitignore
```

Uninstall

```shell
rm .gitignore
```

### [HTMLHint](https://github.com/htmlhint/HTMLHint)

Install

```shell
npm install --save-dev htmlhint

npm pkg set scripts.lint:html="htmlhint --ignore=\"**/coverage/**\" \"**/*.html\""

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.htmlhintrc
```

Uninstall

```shell
npm pkg delete devDependencies.htmlhint

npm pkg delete scripts.lint:html

rm .htmlhintrc
```

### [Husky](https://github.com/typicode/husky)

Install

```shell
npm install --save-dev husky

npm pkg set scripts.prepare="husky"

npm run prepare
```

Uninstall

```shell
npm pkg delete devDependencies.husky

npm pkg delete scripts.prepare

rm -rf .husky/
```

### [commitlint](https://github.com/conventional-changelog/commitlint)

Install

```shell
npm install --save-dev \
  @commitlint/cli \
  @commitlint/config-conventional

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs

echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

Uninstall

```shell
npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs

rm .husky/commit-msg
```

### [lint-staged1](https://github.com/lint-staged/lint-staged)

Install

```shell
npm install --save-dev lint-staged

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "npx lint-staged --concurrent false" > .husky/pre-commit
```

Uninstall

```shell
npm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```

## All

### Install

```shell
# AutoCorrect

npm install --save-dev autocorrect-node

npm pkg set \
  scripts.lint:text="autocorrect --lint" \
  scripts.lint:text:fix="autocorrect --fix"

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore

# CSpell

npm install --save-dev cspell

npm pkg set scripts.lint:spell="cspell lint --no-progress --no-must-find-files --dot --gitignore ."

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs

# EditorConfig

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.editorconfig

# ESLint

npm install --save-dev \
  @eslint-community/eslint-plugin-eslint-comments \
  @eslint/compat \
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

# gitattributes

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitattributes

# gitignore

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.gitignore

# HTMLHint

npm install --save-dev htmlhint

npm pkg set scripts.lint:html="htmlhint --ignore=\"**/coverage/**\" \"**/*.html\""

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.htmlhintrc

# Husky

npm install --save-dev husky

npm pkg set scripts.prepare="husky"

npm run prepare

# commitlint

npm install --save-dev \
  @commitlint/cli \
  @commitlint/config-conventional

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs

echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

# lint-staged1

npm install --save-dev lint-staged

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "npx lint-staged --concurrent false" > .husky/pre-commit
```

### Uninstall

```shell
# AutoCorrect

npm pkg delete devDependencies.autocorrect-node

npm pkg delete \
  scripts.lint:text \
  scripts.lint:text:fix

rm \
  .autocorrectrc \
  .autocorrectignore

# CSpell

npm pkg delete devDependencies.cspell

npm pkg delete scripts.lint:spell

rm cspell.config.mjs

# EditorConfig

rm .editorconfig

# ESLint

npm pkg delete \
  devDependencies.@eslint-community/eslint-plugin-eslint-comments \
  devDependencies.@eslint/compat \
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

# gitattributes

rm .gitattributes

# gitignore

rm .gitignore

# HTMLHint

npm pkg delete devDependencies.htmlhint

npm pkg delete scripts.lint:html

rm .htmlhintrc

# Husky

npm pkg delete devDependencies.husky

npm pkg delete scripts.prepare

rm -rf .husky/

# commitlint

npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm commitlint.config.mjs

rm .husky/commit-msg

# lint-staged1

npm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```
