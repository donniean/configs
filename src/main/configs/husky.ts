import type { Config } from '../types';

export const CONFIG = {
  name: 'Husky',
  url: 'https://github.com/typicode/husky',
  pkg: {
    devDependencies: ['husky'],
    scripts: [{ key: 'prepare', value: 'husky' }],
  },
  filePaths: [],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
    { type: 'custom', command: 'rm -rf .husky/' },
  ],
} as const satisfies Config;
