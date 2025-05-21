import type { Config } from '../types';

export const CONFIG = {
  value: 'editorconfig',
  name: 'EditorConfig',
  url: 'https://editorconfig.org/',
  filePaths: ['.editorconfig'],
  setup: [{ type: 'files.download' }],
  clean: [{ type: 'files.delete' }],
} as const satisfies Config;
