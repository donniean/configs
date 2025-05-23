import type { Config } from '../types';

export const CONFIG = {
  value: 'htmlhint',
  name: 'HTMLHint',
  url: 'https://github.com/htmlhint/HTMLHint',
  pkg: {
    devDependencies: ['htmlhint'],
    scripts: [
      {
        key: 'lint:html',
        value: 'htmlhint --ignore="**/coverage/**" "**/*.html"',
      },
    ],
  },
  filePaths: ['.htmlhintrc'],
  setup: [
    { type: 'pkg.devDependencies.install' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
