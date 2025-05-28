import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'markdownlint',
  name: 'markdownlint',
  url: 'https://github.com/DavidAnson/markdownlint',
  pkg: {
    devDependencies: [{ packageName: 'markdownlint-cli' }],
    scripts: [
      { key: 'lint:md', value: 'markdownlint --dot "**/*.md"' },
      { key: 'lint:md:fix', value: 'npm run lint:md -- --fix' },
    ],
  },
  filePaths: ['.markdownlint.json', '.markdownlintignore'],
  setup: [
    { type: 'pkg.devDependencies.set' },
    { type: 'pkg.scripts.set' },
    { type: 'files.download' },
  ],
  clean: [
    { type: 'pkg.devDependencies.delete' },
    { type: 'pkg.scripts.delete' },
    { type: 'files.delete' },
  ],
} as const satisfies Config;
