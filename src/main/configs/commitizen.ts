import type { Config } from '../types';

export const CONFIG = {
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
} as const satisfies Config;
