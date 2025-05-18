import type { Config } from '../types';

export const CONFIG = {
  name: 'npm-check-updates',
  url: 'https://github.com/raineorshine/npm-check-updates',
  pkg: {
    devDependencies: ['npm-check-updates'],
    scripts: [
      { key: 'ncu', value: 'npx npm-check-updates --deep' },
      { key: 'ncu:upgrade', value: 'npm run ncu -- --upgrade' },
    ],
  },
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
