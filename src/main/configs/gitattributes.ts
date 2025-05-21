import type { Config } from '../types';

export const CONFIG = {
  value: 'gitattributes',
  name: 'gitattributes',
  url: 'https://git-scm.com/docs/gitattributes',
  filePaths: ['.gitattributes'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
