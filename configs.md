# Configs

## Table of Contents

- [Sections](#sections)
  - [AggregateLint](#aggregatelint)
  - [AutoCorrect](#autocorrect)
  - [CSpell](#cspell)
  - [EditorConfig](#editorconfig)
  - [ESLint](#eslint)
  - [gitattributes](#gitattributes)
  - [gitignore](#gitignore)
  - [HTMLHint](#htmlhint)
  - [Knip](#knip)
  - [markdownlint](#markdownlint)
  - [npm-check-updates](#npm-check-updates)
  - [Prettier](#prettier)
  - [Sort Package.json](#sort-packagejson)
  - [Stylelint](#stylelint)
  - [tsc](#tsc)
  - [Vitest](#vitest)
  - [Husky](#husky)
  - [commitlint](#commitlint)
  - [lint-staged](#lint-staged)
- [All](#all)
  - [Install](#install)
  - [Uninstall](#uninstall)

## Sections

### AggregateLint

Install

```shell
npm pkg set   scripts.lint='concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"'   scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"'

```

Uninstall

```shell
npm pkg delete   scripts.lint   scripts.lint:fix
```

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

### [Knip](https://github.com/webpro-nl/knip)

Install

```shell
npm install --save-dev knip

npm pkg set \
  scripts.knip="knip" \
  scripts.knip:fix="npm run knip -- --fix"
```

Uninstall

```shell
npm pkg delete devDependencies.knip

npm pkg delete \
  scripts.knip \
  scripts.knip:fix
```

### [markdownlint](https://github.com/DavidAnson/markdownlint)

Install

```shell
npm install --save-dev markdownlint-cli

npm pkg set \
  scripts.lint:md="markdownlint --dot \"**/*.md\"" \
  scripts.lint:md:fix="npm run lint:md -- --fix"

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore
```

Uninstall

```shell
npm pkg delete devDependencies.markdownlint-cli

npm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix

rm \
  .markdownlint.json \
  .markdownlintignore
```

### [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

Install

```shell
npm install --save-dev npm-check-updates

npm pkg set \
  scripts.ncu="npx npm-check-updates --deep" \
  scripts.ncu:upgrade="npm run ncu -- --upgrade"
```

Uninstall

```shell
npm pkg delete devDependencies.npm-check-updates

npm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade
```

### [Prettier](https://github.com/prettier/prettier)

Install

```shell
npm install --save-dev \
  prettier \
  prettier-plugin-tailwindcss

npm pkg set \
  scripts.lint:format="prettier --check --ignore-unknown ." \
  scripts.lint:format:fix="prettier --write --ignore-unknown ."

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore
```

Uninstall

```shell
npm pkg delete \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss

npm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix

rm \
  prettier.config.mjs \
  .prettierignore
```

### [Sort Package.json](https://github.com/keithamus/sort-package-json)

Install

```shell
npm install --save-dev sort-package-json

npm pkg set \
  scripts.lint:package-json="npm run lint:package-json:fix -- --check" \
  scripts.lint:package-json:fix="npx sort-package-json \"**/package.json\" --ignore \"**/node_modules/**/package.json\" --ignore \"**/dist/**/package.json\""
```

Uninstall

```shell
npm pkg delete devDependencies.sort-package-json

npm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix
```

### [Stylelint](https://github.com/stylelint/stylelint)

Install

```shell
npm install --save-dev \
  stylelint \
  stylelint-config-recess-order \
  stylelint-config-standard \
  stylelint-config-css-modules

npm pkg set \
  scripts.lint:css="stylelint \"**/*.css\"" \
  scripts.lint:css:fix="npm run lint:css -- --fix"

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore
```

Uninstall

```shell
npm pkg delete \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules

npm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix

rm \
  stylelint.config.mjs \
  .stylelintignore
```

### [tsc](https://github.com/microsoft/TypeScript)

Install

```shell
npm install --save-dev typescript

npm pkg set scripts.lint:types="tsc --noEmit"
```

Uninstall

```shell
npm pkg delete devDependencies.typescript

npm pkg delete scripts.lint:types
```

### [Vitest](https://github.com/vitest-dev/vitest)

Install

```shell
npm install --save-dev \
  @vitest/coverage-v8 \
  vitest

npm pkg set \
  scripts.test="vitest run" \
  scripts.test:coverage="vitest run --coverage" \
  scripts.test:watch="vitest watch"
```

Uninstall

```shell
npm pkg delete \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.vitest

npm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch
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

### [lint-staged](https://github.com/lint-staged/lint-staged)

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
# AggregateLint

npm pkg set   scripts.lint='concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"'   scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"'


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

# Knip

npm install --save-dev knip

npm pkg set \
  scripts.knip="knip" \
  scripts.knip:fix="npm run knip -- --fix"

# markdownlint

npm install --save-dev markdownlint-cli

npm pkg set \
  scripts.lint:md="markdownlint --dot \"**/*.md\"" \
  scripts.lint:md:fix="npm run lint:md -- --fix"

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlint.json \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.markdownlintignore

# npm-check-updates

npm install --save-dev npm-check-updates

npm pkg set \
  scripts.ncu="npx npm-check-updates --deep" \
  scripts.ncu:upgrade="npm run ncu -- --upgrade"

# Prettier

npm install --save-dev \
  prettier \
  prettier-plugin-tailwindcss

npm pkg set \
  scripts.lint:format="prettier --check --ignore-unknown ." \
  scripts.lint:format:fix="prettier --write --ignore-unknown ."

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/prettier.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.prettierignore

# Sort Package.json

npm install --save-dev sort-package-json

npm pkg set \
  scripts.lint:package-json="npm run lint:package-json:fix -- --check" \
  scripts.lint:package-json:fix="npx sort-package-json \"**/package.json\" --ignore \"**/node_modules/**/package.json\" --ignore \"**/dist/**/package.json\""

# Stylelint

npm install --save-dev \
  stylelint \
  stylelint-config-recess-order \
  stylelint-config-standard \
  stylelint-config-css-modules

npm pkg set \
  scripts.lint:css="stylelint \"**/*.css\"" \
  scripts.lint:css:fix="npm run lint:css -- --fix"

curl \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/stylelint.config.mjs \
  --remote-name https://raw.githubusercontent.com/donniean/react-app/main/.stylelintignore

# tsc

npm install --save-dev typescript

npm pkg set scripts.lint:types="tsc --noEmit"

# Vitest

npm install --save-dev \
  @vitest/coverage-v8 \
  vitest

npm pkg set \
  scripts.test="vitest run" \
  scripts.test:coverage="vitest run --coverage" \
  scripts.test:watch="vitest watch"

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

# lint-staged

npm install --save-dev lint-staged

curl --remote-name https://raw.githubusercontent.com/donniean/react-app/main/lint-staged.config.mjs

echo "npx lint-staged --concurrent false" > .husky/pre-commit
```

### Uninstall

```shell
# AggregateLint

npm pkg delete   scripts.lint   scripts.lint:fix

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

# Knip

npm pkg delete devDependencies.knip

npm pkg delete \
  scripts.knip \
  scripts.knip:fix

# markdownlint

npm pkg delete devDependencies.markdownlint-cli

npm pkg delete \
  scripts.lint:md \
  scripts.lint:md:fix

rm \
  .markdownlint.json \
  .markdownlintignore

# npm-check-updates

npm pkg delete devDependencies.npm-check-updates

npm pkg delete \
  scripts.ncu \
  scripts.ncu:upgrade

# Prettier

npm pkg delete \
  devDependencies.prettier \
  devDependencies.prettier-plugin-tailwindcss

npm pkg delete \
  scripts.lint:format \
  scripts.lint:format:fix

rm \
  prettier.config.mjs \
  .prettierignore

# Sort Package.json

npm pkg delete devDependencies.sort-package-json

npm pkg delete \
  scripts.lint:package-json \
  scripts.lint:package-json:fix

# Stylelint

npm pkg delete \
  devDependencies.stylelint \
  devDependencies.stylelint-config-recess-order \
  devDependencies.stylelint-config-standard \
  devDependencies.stylelint-config-css-modules

npm pkg delete \
  scripts.lint:css \
  scripts.lint:css:fix

rm \
  stylelint.config.mjs \
  .stylelintignore

# tsc

npm pkg delete devDependencies.typescript

npm pkg delete scripts.lint:types

# Vitest

npm pkg delete \
  devDependencies.@vitest/coverage-v8 \
  devDependencies.vitest

npm pkg delete \
  scripts.test \
  scripts.test:coverage \
  scripts.test:watch

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

# lint-staged

npm pkg delete devDependencies.lint-staged

rm lint-staged.config.mjs

rm .husky/pre-commit
```
