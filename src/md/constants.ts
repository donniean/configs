import type { Config } from './types';

export const CONFIGS = [
  {
    name: 'AutoCorrect1',
    url: 'https://github.com/huacnlee/autocorrect',
    install: [
      { type: 'installDevDependencies', values: ['autocorrect-node'] },
      {
        type: 'setPkg',
        values: [
          "scripts.lint:text='autocorrect --lint'",
          "scripts.lint:text:fix='autocorrect --fix'",
        ],
      },
      {
        type: 'createFiles',
        values: [
          'https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc',
          'https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore',
        ],
      },
    ],
    uninstall: [
      {
        type: 'deletePkg',
        values: [
          'devDependencies.autocorrect-node',
          'scripts.lint:text',
          'scripts.lint:text:fix',
        ],
      },
      { type: 'deleteFiles', values: ['.autocorrectrc', '.autocorrectignore'] },
    ],
  },
] as const satisfies readonly Config[];
