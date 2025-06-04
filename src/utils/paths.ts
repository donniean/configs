import path from 'node:path';

import * as env from '@/utils/env';

const { dirname } = import.meta;

const getRelativePaths = () => {
  if (env.isProduction) {
    return ['..'];
  }

  if (env.isTest) {
    return ['..', '..', '..'];
  }

  return ['..', '..'];
};

const root = path.resolve(dirname, ...getRelativePaths());

const cwd = process.cwd();

function resolveRoot(...paths: string[]) {
  return path.resolve(root, ...paths);
}

function resolveCwd(...paths: string[]) {
  return path.resolve(cwd, ...paths);
}

export { resolveCwd, resolveRoot };
