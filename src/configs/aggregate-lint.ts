import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'aggregate-lint',
  name: 'Aggregate Lint',
  pkg: {
    scripts: [
      {
        key: 'lint',
        value:
          'concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"',
      },
      {
        key: 'lint:fix',
        value:
          'concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"',
      },
    ],
  },
  setup: [{ type: 'pkg.scripts.set' }],
  clean: [{ type: 'pkg.scripts.delete' }],
} as const satisfies Config;
