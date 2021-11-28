import inquirer from 'inquirer';
import { get } from 'lodash';

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
    name: 'lint-staged',
    value: 'lint-staged',
  },
  {
    name: 'Husky',
    value: 'husky',
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

  switch (value) {
    case 'prettier': {
      enabled =
        js || jsx || vue || css || scss || less || html || json || yaml || md;

      break;
    }
    case 'eslint': {
      enabled = js || jsx;

      break;
    }
    case 'stylelint': {
      enabled = css || scss || less || jsx || js;

      break;
    }
    case 'htmlhint': {
      enabled = html;

      break;
    }
    // No default
  }

  return !enabled;
};

export default ({ lastParsedConfig, parsedLanguages }) => [
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
