import type { Config } from '../types';

export const CONFIG = {
  name: 'commitlint',
  url: 'https://github.com/conventional-changelog/commitlint',
  devDependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
  filePaths: ['commitlint.config.mjs'],
  install: [
    {
      type: 'devDependencies.install',
    },
    {
      type: 'files.download',
    },
  ],
  uninstall: [
    {
      type: 'devDependencies.uninstall',
    },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
