import type { Config } from '../types';

export const CONFIG = {
  value: 'autocorrect',
  name: 'AutoCorrect',
  url: 'https://github.com/huacnlee/autocorrect',
  pkg: {
    devDependencies: ['autocorrect-node'],
    scripts: [
      { key: 'lint:text', value: 'autocorrect --lint' },
      { key: 'lint:text:fix', value: 'autocorrect --fix' },
    ],
  },
  filePaths: ['.autocorrectrc', '.autocorrectignore'],
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
