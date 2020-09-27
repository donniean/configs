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
  separator,
  {
    name: 'commitlint & Commitizen',
    value: 'commitlint',
  },
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
    name: 'Private Package',
    value: 'private-package',
  },
  {
    name: 'LICENSE(MIT)',
    value: 'license',
  },
];

const getLanguage = ({ parsedLanguages, name }) =>
  get(parsedLanguages, [name, 0]);

const getDisabled = ({ value, parsedLanguages }) => {
  const js = getLanguage({ parsedLanguages, name: 'js' });
  const jsx = getLanguage({ parsedLanguages, name: 'jsx' });
  const vue = getLanguage({ parsedLanguages, name: 'vue' });
  const css = getLanguage({ parsedLanguages, name: 'css' });
  const scss = getLanguage({ parsedLanguages, name: 'scss' });
  const less = getLanguage({ parsedLanguages, name: 'less' });
  const html = getLanguage({ parsedLanguages, name: 'html' });
  const json = getLanguage({ parsedLanguages, name: 'json' });
  const yaml = getLanguage({ parsedLanguages, name: 'yaml' });
  const md = getLanguage({ parsedLanguages, name: 'md' });

  let enabled = true;

  if (value === 'prettier') {
    enabled =
      js || jsx || vue || css || scss || less || html || json || yaml || md;
  } else if (value === 'eslint') {
    enabled = js || jsx || vue;
  } else if (value === 'stylelint') {
    enabled = css || scss || less || jsx || js;
  } else if (value === 'htmlhint') {
    enabled = html;
  }

  return !enabled;
};

module.exports = ({ lastParsedConfig, parsedLanguages }) => [
  {
    type: 'checkbox',
    name: 'modules',
    message: 'Choose Modules',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const disabled = getDisabled({ value, parsedLanguages });
        const checked = !disabled && get(lastParsedConfig, ['modules', value]);
        return { ...item, checked, disabled };
      });
    },
    pageSize: 100,
  },
];
