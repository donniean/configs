import type { Config } from '../types';

export const CONFIG = {
  name: 'gitignore',
  url: 'https://git-scm.com/docs/gitignore',
  filePaths: ['.gitignore'],
  install: [{ type: 'files.download' }],
  uninstall: [{ type: 'files.delete' }],
} as const satisfies Config;
