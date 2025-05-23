import type { Config } from '../types';

export const CONFIG = {
  value: 'lint-staged',
  name: 'lint-staged',
  url: 'https://github.com/lint-staged/lint-staged',
  pkg: {
    devDependencies: ['lint-staged'],
  },
  filePaths: ['lint-staged.config.mjs'],
  setup: [
    { type: 'pkg.devDependencies.install' },
    { type: 'files.download' },
    {
      type: 'custom',
      command:
        'echo "npm run i18n:extract\nnpm run i18n:compile\nnpx lint-staged --concurrent false" > .husky/pre-commit',
    },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'files.delete' },
    {
      type: 'custom',
      command: 'rm .husky/pre-commit',
    },
  ],
} as const satisfies Config;
