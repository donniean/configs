import { findIndex, get } from 'lodash';

import { DEFAULT_ENV } from '@/constants/defaults';

const choices = [{ name: 'ECMAScript 6 +', value: 'es6' }];

export default ({ lastParsedConfig, parsedLanguages }) => {
  const { env: lastEnv } = lastParsedConfig;
  const defaultIndex = findIndex(choices, { value: DEFAULT_ENV });
  const jsx = get(parsedLanguages, ['jsx', 0]);
  const index = findIndex(choices, { value: lastEnv });

  return [
    {
      type: 'list',
      name: 'env',
      message: 'Select an Environment',
      default: index,
      choices() {
        return choices.map((item) => {
          return { ...item };
        });
      },
      pageSize: 100,
    },
  ];
};
