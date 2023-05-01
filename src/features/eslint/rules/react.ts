import type { ESLintConfig } from '../types';
import { airbnbBase } from '../utils';

// @ts-ignore
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
    extends: ['airbnb/hooks'],
    rules: {
      'no-console':
        process.env.NODE_ENV === 'development'
          ? 'warn'
          : ['error', { allow: ['warn', 'error'] }],
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
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': [
        'error',
        { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
      ],
    },
  };
}

export { getConfig, getDevDependencies };
