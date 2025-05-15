import type { Config } from '../types';

export const CONFIG = {
  name: 'AutoCorrect',
  url: 'https://github.com/huacnlee/autocorrect',
  devDependencies: ['autocorrect-node'],
  filePaths: ['.autocorrectrc', '.autocorrectignore'],
  install: [
    { type: 'devDependencies.install' },
    {
      type: 'packageJson.set',
      values: [
        'scripts.lint:text="autocorrect --lint"',
        'scripts.lint:text:fix="autocorrect --fix"',
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
      values: ['scripts.lint:text', 'scripts.lint:text:fix'],
    },
    {
      type: 'files.delete',
    },
  ],
} as const satisfies Config;
