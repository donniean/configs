import type { Config } from '../types';

export const CONFIG = {
  name: 'EditorConfig',
  url: 'https://editorconfig.org/',
  filePaths: ['.editorconfig'],
  install: [{ type: 'files.download' }],
  uninstall: [{ type: 'files.delete' }],
} as const satisfies Config;
