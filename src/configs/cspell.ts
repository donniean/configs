import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'cspell',
  name: 'CSpell',
  url: 'https://github.com/streetsidesoftware/cspell',
  pkg: {
    devDependencies: [{ packageName: 'cspell' }],
    scripts: [
      {
        key: 'lint:spell',
        value:
          'cspell lint --no-progress --no-must-find-files --dot --gitignore .',
      },
    ],
  },
  filePaths: ['cspell.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
