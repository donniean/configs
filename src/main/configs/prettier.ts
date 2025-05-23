import type { Config } from '../types';

export const CONFIG = {
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
