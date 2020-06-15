const { separator, end } = require('../../../utils/separator');

module.exports = [
  {
    type: 'checkbox',
    name: 'configs',
    message: 'Choose Configs',
    store: true,
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
        name: 'commitlint & Commitizen',
        value: 'commitlint',
        checked: true,
      },
      separator,
      {
        name: 'lint-staged',
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
      end,
    ],
  },
];
