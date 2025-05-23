import type { Config } from '../types';

export const CONFIG = {
  value: 'husky',
  name: 'Husky',
  url: 'https://github.com/typicode/husky',
  pkg: {
    devDependencies: ['husky'],
    scripts: [{ key: 'prepare', value: 'husky' }],
  },
  setup: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'custom', command: 'npm run prepare' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'custom', command: 'rm -rf .husky/' },
  ],
} as const satisfies Config;
