import type { Config } from '../types';

export const CONFIG = {
  name: 'lint-staged',
  url: 'https://github.com/lint-staged/lint-staged',
  pkg: {
    devDependencies: ['lint-staged'],
  },
  filePaths: ['lint-staged.config.mjs'],
  install: [
    { type: 'pkg.devDependencies.install' },
    { type: 'files.download' },
    {
      type: 'custom',
      command:
        'echo "npm run i18n:extract\nnpm run i18n:compile\nnpx lint-staged --concurrent false" > .husky/pre-commit',
    },
  ],
  uninstall: [
    { type: 'pkg.devDependencies.uninstall' },
    { type: 'files.delete' },
    {
      type: 'custom',
      command: 'rm .husky/pre-commit',
    },
  ],
} as const satisfies Config;
