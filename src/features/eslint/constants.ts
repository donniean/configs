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
  'airbnb-base',
  'airbnb',
  'plugin:eslint-comments/recommended',
  'plugin:promise/recommended',
  'plugin:unicorn/recommended',
  'plugin:sonarjs/recommended',
  'plugin:n/recommended',

  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'airbnb-typescript/base',
  'airbnb-typescript',

  'airbnb/hooks',
  'plugin:react/jsx-runtime',
  'plugin:@next/next/recommended',
  'plugin:@next/next/core-web-vitals',

  'prettier',
];

const SORT_ESLINT_PLUGINS = ['simple-import-sort'];

export { SORT_ESLINT_CONFIG_KEYS, SORT_ESLINT_EXTENDS, SORT_ESLINT_PLUGINS };
