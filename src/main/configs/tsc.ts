import type { Config } from '../types';

export const CONFIG = {
  name: 'tsc',
  url: 'https://github.com/microsoft/TypeScript',
  pkg: {
    devDependencies: ['typescript'],
    scripts: [{ key: 'lint:types', value: 'tsc --noEmit' }],
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
