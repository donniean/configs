import type { Config } from '../types';

export const CONFIG = {
  value: 'commitlint',
  name: 'commitlint',
  url: 'https://github.com/conventional-changelog/commitlint',
  pkg: {
    devDependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
  },
  filePaths: ['commitlint.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.install' },
    { type: 'files.download' },
    {
      type: 'custom',
      command: String.raw`echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg`,
    },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'files.delete' },
    {
      type: 'custom',
      command: 'rm .husky/commit-msg',
    },
  ],
} as const satisfies Config;
