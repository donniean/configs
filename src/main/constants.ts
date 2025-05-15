import type { Configs } from './types';

export const CONFIGS = [
  {
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
  },
  {
    name: 'Commitizen',
    url: 'https://github.com/commitizen-tools/commitizen',
    devDependencies: ['commitizen', 'cz-conventional-changelog'],
    install: [
      {
        type: 'devDependencies.install',
      },
      {
        type: 'packageJson.set',
        values: ['scripts.commit="cz"'],
      },
      {
        type: 'files.download',
        values: [
          'https://raw.githubusercontent.com/donniean/react-app/main/.cz.json',
        ],
      },
    ],
    uninstall: [
      {
        type: 'devDependencies.uninstall',
      },
      {
        type: 'packageJson.delete',
        values: ['scripts.commit'],
      },
      { type: 'files.delete', values: ['.cz.json'] },
    ],
  },
  {
    name: 'commitlint',
    url: 'https://github.com/conventional-changelog/commitlint',
    devDependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
    install: [
      {
        type: 'devDependencies.install',
      },
      {
        type: 'files.download',
        values: [
          'https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs',
        ],
      },
    ],
    uninstall: [
      {
        type: 'devDependencies.uninstall',
      },
      { type: 'files.delete', values: ['commitlint.config.mjs'] },
    ],
  },
] as const satisfies Configs;

export const MARKDOWN_FILE_NAME = 'configs.md' as const;
