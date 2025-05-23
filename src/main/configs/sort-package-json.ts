import type { Config } from '../types';

export const CONFIG = {
  value: 'sort-package-json',
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
        value:
          'npx sort-package-json "**/package.json" --ignore "**/node_modules/**/package.json" --ignore "**/dist/**/package.json"',
      },
    ],
  },
  setup: [{ type: 'pkg.devDependencies.install' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
