import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'knip',
  name: 'Knip',
  url: 'https://github.com/webpro-nl/knip',
  pkg: {
    devDependencies: [{ packageName: 'knip' }],
    scripts: [
      { key: 'knip', value: 'knip' },
      { key: 'knip:fix', value: 'npm run knip -- --fix' },
    ],
  },
  filePaths: [],
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
