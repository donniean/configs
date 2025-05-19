import type { Config } from '../types';

export const CONFIG = {
  name: 'Sort Package.json',
  url: 'https://github.com/keithamus/sort-package-json',
  pkg: {
    devDependencies: ['sort-package-json'],
    scripts: [
      {
        key: 'lint:package-json',
        value: 'npm run lint:package-json:fix -- --check',
      },
      {
        key: 'lint:package-json:fix',
        value: String.raw`npx sort-package-json \"**/package.json\" --ignore \"**/node_modules/**/package.json\" --ignore \"**/dist/**/package.json\"`,
      },
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
