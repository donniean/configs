import type { Config } from '../types';

export const CONFIG = {
  name: 'gitattributes',
  url: 'https://git-scm.com/docs/gitattributes',
  filePaths: ['.gitattributes'],
  install: [
    {
      type: 'files.download',
    },
  ],
  uninstall: [
    {
      type: 'files.delete',
    },
  ],
} as const satisfies Config;
