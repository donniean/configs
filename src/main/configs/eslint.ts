import type { Config } from '../types';

export const CONFIG = {
  name: 'ESLint',
  url: 'https://github.com/eslint/eslint',
  devDependencies: [
    '@eslint-community/eslint-plugin-eslint-comments',
    '@eslint/js',
    '@tanstack/eslint-plugin-query',
    '@vitest/eslint-plugin',
    'eslint',
    'eslint-config-prettier',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import-x',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-n',
    'eslint-plugin-promise',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-refresh',
    'eslint-plugin-simple-import-sort',
    'eslint-plugin-sonarjs',
    'eslint-plugin-unicorn',
    'eslint-plugin-unused-imports',
    'globals',
    'typescript-eslint',
  ],
  filePaths: ['eslint.config.mjs'],
  install: [
    { type: 'devDependencies.install' },
    {
      type: 'packageJson.set',
      values: [
        'scripts.lint:js="eslint **/*.{js,mjs,cjs,ts,tsx}"',
        'scripts.lint:js:fix="npm run lint:js -- --fix',
      ],
    },
    {
      type: 'files.download',
    },
  ],
  uninstall: [
    { type: 'devDependencies.uninstall' },
    {
      type: 'packageJson.delete',
      values: ['scripts.lint:js', 'scripts.lint:js:fix'],
    },
    {
      type: 'files.delete',
    },
  ],
} as const satisfies Config;
