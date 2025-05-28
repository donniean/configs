import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'vitest',
  name: 'Vitest',
  url: 'https://github.com/vitest-dev/vitest',
  pkg: {
    devDependencies: [
      { packageName: '@vitest/coverage-v8' },
      { packageName: '@vitest/ui' },
      { packageName: 'vitest' },
    ],
    scripts: [
      { key: 'test', value: 'vitest run' },
      { key: 'test:coverage', value: 'vitest run --coverage' },
      { key: 'test:watch', value: 'vitest watch' },
      { key: 'test:ui', value: 'vitest --ui' },
    ],
  },
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
