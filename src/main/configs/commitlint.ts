import type { Config } from '../types';

export const CONFIG = {
  name: 'commitlint',
  url: 'https://github.com/conventional-changelog/commitlint',
  pkg: {
    devDependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
  },
  filePaths: ['commitlint.config.mjs'],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'files.download' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
