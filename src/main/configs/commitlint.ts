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
    {
      type: 'custom',
      command: 'echo "npx --no -- commitlint --edit $1" > .husky/commit-msg',
    },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'files.delete' },
    {
      type: 'custom',
      command: 'rm .husky/commit-msg',
    },
  ],
} as const satisfies Config;
