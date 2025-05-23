import type { Config } from '../types';

export const CONFIG = {
  value: 'tsc',
  name: 'tsc',
  url: 'https://github.com/microsoft/TypeScript',
  pkg: {
    devDependencies: ['typescript'],
    scripts: [{ key: 'lint:types', value: 'tsc --noEmit' }],
  },
  setup: [{ type: 'pkg.devDependencies.install' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
