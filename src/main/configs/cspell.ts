import type { Config } from '../types';

export const CONFIG = {
  name: 'CSpell',
  url: 'https://github.com/streetsidesoftware/cspell',
  devDependencies: ['cspell'],
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
      values: [
        'https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs',
      ],
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
      values: ['cspell.config.mjs'],
    },
  ],
} as const satisfies Config;
