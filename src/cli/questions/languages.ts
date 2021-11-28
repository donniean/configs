import { get } from 'lodash';

import {
  JS_IS_REQUIRED_CAUSE_JSX,
  NO_LANGUAGES,
  SCSS_AND_LESS_ERROR,
} from '@/constants/messages';

const choices = [
  {
    name: 'js',
    value: 'js',
  },
  {
    name: 'jsx',
    value: 'jsx',
  },
  {
    name: 'vue',
    value: 'vue',
  },
  {
    name: 'css',
    value: 'css',
  },
  {
    name: 'scss',
    value: 'scss',
  },
  {
    name: 'less',
    value: 'less',
  },
  {
    name: 'html',
    value: 'html',
  },
  {
    name: 'json',
    value: 'json',
  },
  {
    name: 'yaml',
    value: 'yaml',
  },
  {
    name: 'md',
    value: 'md',
  },
];

export default ({ lastParsedConfig }) => [
  {
    type: 'checkbox',
    name: 'languages',
    message: 'Choose Languages',
    choices() {
      return choices.map((item) => {
        const { value } = item;
        const checked = get(lastParsedConfig, ['languages', value, 0]);
        return { ...item, checked };
      });
    },
    validate(values) {
      if (values.length === 0) {
        return NO_LANGUAGES;
      }
      if (values.includes('jsx') && !values.includes('js')) {
        return JS_IS_REQUIRED_CAUSE_JSX;
      }
      if (values.includes('less') && values.includes('scss')) {
        return SCSS_AND_LESS_ERROR;
      }
      return true;
    },
    pageSize: 100,
  },
];
