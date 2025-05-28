import type { Config } from '@/types/configs';

export const CONFIG = {
  key: 'editorconfig',
  name: 'EditorConfig',
  url: 'https://editorconfig.org/',
  filePaths: ['.editorconfig'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
