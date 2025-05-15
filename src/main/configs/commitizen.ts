import type { Config } from '../types';

export const CONFIG = {
  name: 'Commitizen',
  url: 'https://github.com/commitizen-tools/commitizen',
  devDependencies: ['commitizen', 'cz-conventional-changelog'],
  filePaths: ['.cz.json'],
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
    { type: 'files.delete' },
  ],
} as const satisfies Config;
