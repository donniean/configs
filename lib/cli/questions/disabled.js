const { get } = require('lodash');
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
];

module.exports = ({ lastParsedConfig }) => [
  {
    type: 'checkbox',
    name: 'disabled',
    message: 'Choose Disabled',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const checked = get(lastParsedConfig, ['disabled', value]);
        return { ...item, checked };
      });
    },
    pageSize: 100,
    loop: false,
  },
];
