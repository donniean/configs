import type { Config } from '../types';

export const CONFIG = {
  name: 'Vitest',
  url: 'https://github.com/vitest-dev/vitest',
  pkg: {
    devDependencies: ['@vitest/coverage-v8', 'vitest'],
    scripts: [
      { key: 'test', value: 'vitest run' },
      { key: 'test:coverage', value: 'vitest run --coverage' },
      { key: 'test:watch', value: 'vitest watch' },
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
