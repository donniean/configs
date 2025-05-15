import type { Config } from '../types';

export const CONFIG = {
  name: '',
  url: '',
  devDependencies: [''],
  install: [
    { type: 'devDependencies.install' },
    {
      type: 'packageJson.set',
      values: [''],
    },
    {
      type: 'files.download',
      values: [''],
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
      values: [''],
    },
  ],
} as const satisfies Config;
