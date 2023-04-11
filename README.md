# @donniean/configs

- [@donniean/configs](#donnieanconfigs)
  - [Install](#install)
  - [Usage](#usage)
  - [TODOs](#todos)

## Install

```sh
npm install -g @donniean/configs
```

## Usage

```shell
cd project-folder
```

```shell
configs create
```

## delete legacy files

```shell
rm -rf .husky;
rm .commitlintrc.js;
rm .configsrc.js;
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

npm pkg delete scripts.prettier;
npm pkg delete scripts.eslint;
npm pkg delete scripts.stylelint;
npm pkg delete scripts.cspell;
npm pkg delete scripts.pre-commit;
npm pkg delete scripts.commit;
npm pkg delete scripts.prepare;
npm pkg delete config;

npm uninstall @babel/core @babel/eslint-parser @commitlint/cli @commitlint/config-conventional @stylelint/postcss-css-in-js @typescript-eslint/eslint-plugin @typescript-eslint/parser commitizen cspell cz-conventional-changelog eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-import-resolver-typescript postcss-syntax eslint-config-prettier eslint-import-resolver-webpack eslint-plugin-html eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort htmlhint husky lint-staged prettier stylelint stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard stylelint-config-styled-components stylelint-order stylelint-prettier prettier-plugin-packagejson && rm package-lock.json;
```

## TODOs

- [ ] delete `scripts.dev` in `package.json`
  - [ ] `npm uninstall ts-node tsconfig-paths`
  - [ ] delete `ts-node` in `tsconfig.json`
- [ ] ignore
- [ ] improve `README.md`
- [ ] `cspell:disable`
- [ ] `eslint-disable`
- [ ] `ts-ignore`
- [ ] `prettier` options
- [ ] `lint-staged --concurrent`
- [ ] `prettier` all
- [ ] `zod`
