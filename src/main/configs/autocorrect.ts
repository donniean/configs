import type { Config } from '../types';

export const CONFIG = {
  name: 'AutoCorrect',
  url: 'https://github.com/huacnlee/autocorrect',
  devDependencies: ['autocorrect-node'],
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
      values: [
        'https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc',
        'https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore',
      ],
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
      values: ['.autocorrectrc', '.autocorrectignore'],
    },
  ],
} as const satisfies Config;
