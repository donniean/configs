const inquirer = require('inquirer');

const separator = new inquirer.Separator();

const choices = [
  {
    name: 'EditorConfig',
    value: 'editorconfig',
  },
  {
    name: 'Prettier',
    value: 'prettier',
  },
  {
    name: 'ESLint',
    value: 'eslint',
  },
  {
    name: 'stylelint',
    value: 'stylelint',
  },
  {
    name: 'HTMLHint',
    value: 'htmlhint',
  },
  {
    name: 'cspell',
    value: 'cspell',
  },
  {
    name: 'commitlint & Commitizen',
    value: 'commitlint',
  },
  separator,
  {
    name: 'Husky & lint-staged',
    value: 'lint-staged',
  },
  {
    name: '.gitignore',
    value: 'gitignore',
  },
  {
    name: '.gitattributes',
    value: 'gitattributes',
  },
  separator,
  {
    name: 'LICENSE (MIT)',
    value: 'license',
  },
  {
    name: 'Private (package.json)',
    value: 'private-package',
  },
];

module.exports = ({ configParsed }) => [
  {
    type: 'checkbox',
    name: 'configs',
    message: 'Choose Configs',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const v = configParsed[value];
        const checked = Array.isArray(v) && v[0] === true;
        return { ...item, checked };
      });
    },
    pageSize: 100,
    loop: false,
  },
];
