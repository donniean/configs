import type { Config } from '../types';

export const CONFIG = {
  value: 'vitest',
  name: 'Vitest',
  url: 'https://github.com/vitest-dev/vitest',
  pkg: {
    devDependencies: ['@vitest/coverage-v8', '@vitest/ui', 'vitest'],
    scripts: [
      { key: 'test', value: 'vitest run' },
      { key: 'test:coverage', value: 'vitest run --coverage' },
      { key: 'test:watch', value: 'vitest watch' },
      { key: 'test:ui', value: 'vitest --ui' },
    ],
  },
  setup: [{ type: 'pkg.devDependencies.install' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
