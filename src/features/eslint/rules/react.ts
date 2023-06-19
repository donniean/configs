import { makeJavaScriptOnlyValue } from '@/utils/misc';

import type { ESLintConfig } from '../types';
import { airbnbBase } from '../utils';

// @ts-ignore
const noParamReassignOptions = airbnbBase.bestPractices.rules?.[
  'no-param-reassign'
]?.[1] as { ignorePropertyModificationsFor: string[] };

function getDevDependencies() {
  return {
    // '@next/eslint-plugin-next': '',
    'eslint-plugin-jsx-a11y': '',
    'eslint-plugin-react': '',
    'eslint-plugin-react-hooks': '',
  };
}

function getConfig(): ESLintConfig {
  return {
    extends: [
      'airbnb/hooks',
      'plugin:react/jsx-runtime',
      /* https://nextjs.org/docs/app/building-your-application/configuring/eslint#migrating-existing-config */
      /* https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js */
      // 'plugin:@next/next/recommended',
      // 'plugin:@next/next/core-web-vitals',
      // 'next',
      // 'next/core-web-vitals',
    ],
    rules: {
      // @ts-ignore
      'no-console': makeJavaScriptOnlyValue(
        `process.env.NODE_ENV === 'development' ? 'warn' : ['error', { allow: ['warn', 'error'] }]`
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
      // 'react/jsx-uses-react': 'off',
      // 'react/react-in-jsx-scope': 'off',
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
