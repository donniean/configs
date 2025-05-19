import type { Config } from '../types';

export const CONFIG = {
  name: 'AggregateLint',
  pkg: {
    scripts: [
      {
        key: 'lint',
        value: String.raw`concurrently --group --timings --prefix-colors=auto \"npm:lint:*(!:fix)\"`,
      },
      {
        key: 'lint:fix',
        value: String.raw`concurrently --max-processes=1 --group --timings --prefix-colors=auto \"npm:lint:*:fix\"`,
      },
    ],
  },
  install: [{ type: 'pkg.scripts.set' }],
  uninstall: [{ type: 'pkg.scripts.delete' }],
} as const satisfies Config;
