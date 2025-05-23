import type { Config } from '../types';

export const CONFIG = {
  value: 'knip',
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
  setup: [{ type: 'pkg.devDependencies.install' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
