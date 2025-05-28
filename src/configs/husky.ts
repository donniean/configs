import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'husky',
  name: 'Husky',
  url: 'https://github.com/typicode/husky',
  pkg: {
    devDependencies: [{ packageName: 'husky' }],
    scripts: [{ key: 'prepare', value: 'husky' }],
  },
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'custom', command: 'npm run prepare' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'custom', command: 'rm -rf .husky/' },
  ],
} as const satisfies Config;
