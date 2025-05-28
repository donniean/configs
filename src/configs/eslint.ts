import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'eslint',
  name: 'ESLint',
  url: 'https://github.com/eslint/eslint',
  pkg: {
    devDependencies: [
      { packageName: '@eslint-community/eslint-plugin-eslint-comments' },
      { packageName: '@eslint/compat' },
      { packageName: '@eslint/js' },
      { packageName: '@tanstack/eslint-plugin-query' },
      { packageName: '@vitest/eslint-plugin' },
      { packageName: 'eslint' },
      { packageName: 'eslint-config-prettier' },
      { packageName: 'eslint-import-resolver-typescript' },
      { packageName: 'eslint-plugin-import-x' },
      { packageName: 'eslint-plugin-jsx-a11y' },
      { packageName: 'eslint-plugin-n' },
      { packageName: 'eslint-plugin-promise' },
      { packageName: 'eslint-plugin-react' },
      { packageName: 'eslint-plugin-react-hooks@rc' },
      { packageName: 'eslint-plugin-react-refresh' },
      { packageName: 'eslint-plugin-simple-import-sort' },
      { packageName: 'eslint-plugin-sonarjs' },
      { packageName: 'eslint-plugin-unicorn' },
      { packageName: 'eslint-plugin-unused-imports' },
      { packageName: 'globals' },
      { packageName: 'typescript-eslint' },
    ],
    scripts: [
      { key: 'lint:js', value: 'eslint' },
      { key: 'lint:js:fix', value: 'npm run lint:js -- --fix' },
    ],
  },
  filePaths: ['eslint.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
