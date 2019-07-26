module.exports = {
  type: 'checkbox',
  name: 'config',
  message: 'Choose Config',
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
      checked: false
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
};
