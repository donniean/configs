'use strict';

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
        checked: true
      },
      {
        name: 'Prettier',
        value: 'prettier',
        checked: true
      },
      {
        name: 'ESLint',
        value: 'eslint',
        checked: true
      },
      {
        name: 'stylelint',
        value: 'stylelint',
        checked: true
      },
      {
        name: 'lint-staged',
        value: 'lint-staged',
        checked: true
      },
      {
        name: 'HTMLHint',
        value: 'htmlhint',
        checked: true
      },
      {
        name: '.gitignore',
        value: 'gitignore',
        checked: true
      },
      {
        name: '.gitattributes',
        value: 'gitattributes',
        checked: true
      },
      {
        name: 'LICENSE(MIT)',
        value: 'license',
        checked: true
      }
    ]
  }
];
