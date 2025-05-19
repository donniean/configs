import type { Config } from '../types';

export const CONFIG = {
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
