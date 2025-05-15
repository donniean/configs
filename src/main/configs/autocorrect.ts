import type { Config } from '../types';

export const CONFIG = {
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
