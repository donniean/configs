const SORT_ESLINT_CONFIG_KEYS = [
  'root',
  'parser',
  'parserOptions',
  'env',
  'extends',
  'plugins',
  'processor',
  'settings',
  'globals',
  'noInlineConfig',
  'reportUnusedDisableDirectives',
  'ignorePatterns',
  'rules',
  'overrides',
] as const;

const SORT_ESLINT_EXTENDS = [
  // javascript
  'plugin:eslint-comments/recommended',
  'plugin:promise/recommended',
  'plugin:unicorn/recommended',
  'plugin:sonarjs/recommended',
  'airbnb-base',
  'plugin:n/recommended',
  // typescript
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'airbnb-typescript/base',
  // react
  'airbnb',
  'airbnb/hooks',
  'airbnb-typescript',
  'plugin:react/jsx-runtime',
  'plugin:@next/next/recommended',
  'plugin:@next/next/core-web-vitals',
  // prettier
  'prettier',
];

const SORT_ESLINT_PLUGINS = ['simple-import-sort'];

export { SORT_ESLINT_CONFIG_KEYS, SORT_ESLINT_EXTENDS, SORT_ESLINT_PLUGINS };
