import type { Config } from '../types';

export const CONFIG = {
  value: 'gitignore',
  name: 'gitignore',
  url: 'https://git-scm.com/docs/gitignore',
  filePaths: ['.gitignore'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
