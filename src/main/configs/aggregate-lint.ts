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
  install: [
    // { type: 'pkg.scripts.set' },
    {
      type: 'custom',
      command: `npm pkg set \
  scripts.lint='concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"' \
  scripts.lint:fix='concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"'
`,
    },
  ],
  uninstall: [
    // { type: 'pkg.scripts.delete' },
    {
      type: 'custom',
      command: `npm pkg delete \
  scripts.lint \
  scripts.lint:fix`,
    },
  ],
} as const satisfies Config;
