import type { Config } from '../types';

export const CONFIG = {
  name: 'Knip',
  url: 'https://github.com/webpro-nl/knip',
  pkg: {
    devDependencies: ['knip'],
    scripts: [
      { key: 'knip', value: 'knip' },
      { key: 'knip:fix', value: 'npm run knip -- --fix' },
    ],
  },
  filePaths: [],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
