import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'gitignore',
  name: 'gitignore',
  url: 'https://git-scm.com/docs/gitignore',
  filePaths: ['.gitignore'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
