import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'commitlint',
  name: 'commitlint',
  url: 'https://github.com/conventional-changelog/commitlint',
  pkg: {
    devDependencies: [
      { packageName: '@commitlint/cli' },
      { packageName: '@commitlint/config-conventional' },
    ],
  },
  filePaths: ['commitlint.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.set' },
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
