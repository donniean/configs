import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'autocorrect',
  name: 'AutoCorrect',
  url: 'https://github.com/huacnlee/autocorrect',
  pkg: {
    devDependencies: [{ packageName: 'autocorrect-node' }],
    scripts: [
      { key: 'lint:text', value: 'autocorrect --lint' },
      { key: 'lint:text:fix', value: 'autocorrect --fix' },
    ],
  },
  filePaths: ['.autocorrectrc', '.autocorrectignore'],
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
