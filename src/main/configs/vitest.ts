import type { Config } from '../types';

export const CONFIG = {
  name: 'Vitest',
  url: 'https://github.com/vitest-dev/vitest',
  pkg: {
    devDependencies: [],
    scripts: [
      { key: '', value: '' },
      { key: '', value: '' },
    ],
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
  ],
} as const satisfies Config;
