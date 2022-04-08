import { cosmiconfigSync } from 'cosmiconfig';

import type { Config } from '@/types/config';

export function readConfig() {
  const explorerSync = cosmiconfigSync('configs');
  const result = explorerSync.search();

  return result?.config as Config;
}

export function writeConfig() {}
