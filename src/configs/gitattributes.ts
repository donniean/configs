import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'gitattributes',
  name: 'gitattributes',
  url: 'https://git-scm.com/docs/gitattributes',
  filePaths: ['.gitattributes'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
