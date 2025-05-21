import type { Config } from '../types';

export const CONFIG = {
  value: 'eslint',
  name: 'ESLint',
  url: 'https://github.com/eslint/eslint',
  pkg: {
    devDependencies: [
      '@eslint-community/eslint-plugin-eslint-comments',
      '@eslint/compat',
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
    scripts: [
      { key: 'lint:js', value: 'eslint' },
      { key: 'lint:js:fix', value: 'npm run lint:js -- --fix' },
    ],
  },
  filePaths: ['eslint.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
