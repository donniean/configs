import type { Config } from '../types';

export const CONFIG = {
  name: 'CSpell',
  url: 'https://github.com/streetsidesoftware/cspell',
  devDependencies: ['cspell'],
  filePaths: ['cspell.config.mjs'],
  install: [
    { type: 'devDependencies.install' },
    {
      type: 'packageJson.set',
      values: [
        'scripts.lint:spell="cspell lint --no-progress --no-must-find-files --gitignore ."',
      ],
    },
    {
      type: 'files.download',
    },
  ],
  uninstall: [
    { type: 'devDependencies.uninstall' },
    {
      type: 'packageJson.delete',
      values: ['scripts.lint:spell'],
    },
    {
      type: 'files.delete',
    },
  ],
} as const satisfies Config;
