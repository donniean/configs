import type { Config } from '../types';

export const CONFIG = {
  name: 'HTMLHint',
  url: 'https://github.com/htmlhint/HTMLHint',
  pkg: {
    devDependencies: ['htmlhint'],
    scripts: [
      {
        key: 'lint:html',
        value: String.raw`htmlhint --ignore=\"**/coverage/**\" \"**/*.html\"`,
      },
    ],
  },
  filePaths: ['.htmlhintrc'],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
