import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'tsc',
  name: 'tsc',
  url: 'https://github.com/microsoft/TypeScript',
  pkg: {
    devDependencies: [{ packageName: 'typescript' }],
    scripts: [{ key: 'lint:types', value: 'tsc --noEmit' }],
  },
  setup: [{ type: 'pkg.devDependencies.set' }, { type: 'pkg.scripts.set' }],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
  ],
} as const satisfies Config;
