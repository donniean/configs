import type { Config } from '../types';

export const CONFIG = {
  value: 'prettier',
  name: 'Prettier',
  url: 'https://github.com/prettier/prettier',
  pkg: {
    devDependencies: ['prettier', 'prettier-plugin-tailwindcss'],
    scripts: [
      { key: 'lint:format', value: 'prettier --check --ignore-unknown .' },
      { key: 'lint:format:fix', value: 'prettier --write --ignore-unknown .' },
    ],
  },
  filePaths: ['prettier.config.mjs', '.prettierignore'],
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
