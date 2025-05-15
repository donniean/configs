import type { Config } from '../types';

export const CONFIG = {
  name: 'Commitizen',
  url: 'https://github.com/commitizen-tools/commitizen',
  pkg: {
    devDependencies: ['commitizen', 'cz-conventional-changelog'],
    scripts: [{ key: 'commit', value: 'cz' }],
  },
  filePaths: ['.cz.json'],
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
