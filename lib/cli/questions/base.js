const inquirer = require('inquirer');

const separator = new inquirer.Separator();

module.exports = [
  {
    type: 'checkbox',
    name: 'configs',
    message: 'Choose Configs',
    choices: [
      {
        name: 'EditorConfig',
        value: 'editorconfig',
        checked: true,
      },
      {
        name: 'Prettier',
        value: 'prettier',
        checked: true,
      },
      {
        name: 'ESLint',
        value: 'eslint',
        checked: true,
      },
      {
        name: 'stylelint',
        value: 'stylelint',
        checked: true,
      },
      {
        name: 'HTMLHint',
        value: 'htmlhint',
        checked: true,
      },
      {
        name: 'cspell',
        value: 'cspell',
        checked: true,
      },
      {
        name: 'commitlint & Commitizen',
        value: 'commitlint',
        checked: true,
      },
      separator,
      {
        name: 'Husky & lint-staged',
        value: 'lint-staged',
        checked: true,
      },
      {
        name: '.gitignore',
        value: 'gitignore',
        checked: true,
      },
      {
        name: '.gitattributes',
        value: 'gitattributes',
        checked: true,
      },
      separator,
      {
        name: 'LICENSE (MIT)',
        value: 'license',
        checked: true,
      },
      {
        name: 'Private (package.json)',
        value: 'private',
        checked: false,
      },
    ],
    pageSize: 100,
    loop: false,
  },
];
