import type { Config } from '../types';

export const CONFIG = {
  name: 'commitlint',
  url: 'https://github.com/conventional-changelog/commitlint',
  devDependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
  install: [
    {
      type: 'devDependencies.install',
    },
    {
      type: 'files.download',
      values: [
        'https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs',
      ],
    },
  ],
  uninstall: [
    {
      type: 'devDependencies.uninstall',
    },
    { type: 'files.delete', values: ['commitlint.config.mjs'] },
  ],
} as const satisfies Config;
