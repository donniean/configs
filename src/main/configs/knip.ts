import type { Config } from '../types';

export const CONFIG = {
  name: '',
  url: '',
  devDependencies: [''],
  filePaths: [],
  install: [
    { type: 'devDependencies.install' },
    {
      type: 'packageJson.set',
      values: [''],
    },
    {
      type: 'files.download',
    },
  ],
  uninstall: [
    { type: 'devDependencies.uninstall' },
    {
      type: 'packageJson.delete',
      values: [''],
    },
    {
      type: 'files.delete',
    },
  ],
} as const satisfies Config;
