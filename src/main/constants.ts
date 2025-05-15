import type { Configs } from './types';

export const CONFIGS = [
  {
    name: 'AutoCorrect',
    url: 'https://github.com/huacnlee/autocorrect',
    install: [
      { type: 'devDependencies.install', values: ['autocorrect-node'] },
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
      {
        type: 'packageJson.delete',
        values: [
          'devDependencies.autocorrect-node',
          'scripts.lint:text',
          'scripts.lint:text:fix',
        ],
      },
      {
        type: 'files.delete',
        values: ['.autocorrectrc', '.autocorrectignore'],
      },
    ],
  },
] as const satisfies Configs;

export const MARKDOWN_FILE_NAME = 'configs.md' as const;
