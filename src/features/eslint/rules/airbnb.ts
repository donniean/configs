import type { ESLintConfig } from '../types';
import { airbnbBase } from '../utils';
import { config as airbnbBaseConfig } from './airbnb-base';

const devDependencies = {};

// @ts-ignore
const noParamReassignOptions = airbnbBase.bestPractices.rules?.[
  'no-param-reassign'
]?.[1] as { ignorePropertyModificationsFor: string[] };

const config: ESLintConfig = {
  extends: ['airbnb'],
  rules: {
    ...airbnbBaseConfig.rules,
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
  },
};

export { config, devDependencies };
