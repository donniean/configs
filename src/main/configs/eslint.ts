import type { Config } from '../types';

export const CONFIG = {
  name: 'ESLint2',
  url: 'https://github.com/eslint/eslint',
  pkg: {
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
    scripts: [
      { key: 'lint:js', value: 'eslint' },
      { key: 'lint:js:fix', value: 'npm run lint:js -- --fix' },
    ],
  },
  filePaths: ['eslint.config.mjs'],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
