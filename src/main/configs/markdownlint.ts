import type { Config } from '../types';

export const CONFIG = {
  value: 'markdownlint',
  name: 'markdownlint',
  url: 'https://github.com/DavidAnson/markdownlint',
  pkg: {
    devDependencies: ['markdownlint-cli'],
    scripts: [
      { key: 'lint:md', value: 'markdownlint --dot "**/*.md"' },
      { key: 'lint:md:fix', value: 'npm run lint:md -- --fix' },
    ],
  },
  filePaths: ['.markdownlint.json', '.markdownlintignore'],
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
