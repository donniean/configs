import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'sort-package-json',
  name: 'Sort Package.json',
  url: 'https://github.com/keithamus/sort-package-json',
  pkg: {
    devDependencies: [{ packageName: 'sort-package-json' }],
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
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
