import { makeJavaScriptOnlyValue } from '@/utils/misc';

import type { ESLintConfig } from '../types';
import { airbnbBase } from '../utils';

// @ts-expect-error
const noParamReassignOptions = airbnbBase.bestPractices.rules?.[
  'no-param-reassign'
]?.[1] as { ignorePropertyModificationsFor: string[] };

function getDevDependencies() {
  return {
    'eslint-plugin-jsx-a11y': '',
    'eslint-plugin-react': '',
    'eslint-plugin-react-hooks': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: ['airbnb/hooks', 'plugin:react/jsx-runtime'],
    rules: {
      // @ts-expect-error
      'no-console': makeJavaScriptOnlyValue(
        `process.env.NODE_ENV === 'development' ? 'warn' : ['error', { allow: ['warn', 'error'] }]`,
      ),
      'no-param-reassign': [
        'error',
        {
          ...noParamReassignOptions,
          ignorePropertyModificationsFor: [
            ...noParamReassignOptions.ignorePropertyModificationsFor,
            'draft',
          ],
        },
      ],
      'import/no-duplicates': ['error', { considerQueryString: true }],
      'react/jsx-key': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [
        'error',
        { callbacksLast: true, multiline: 'last', reservedFirst: true },
      ],
      'react/require-default-props': [
        'error',
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],
    },
  };
}

export { getConfig, getDevDependencies };
