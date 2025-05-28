import path from 'node:path';
import * as process from 'node:process';
import { fileURLToPath } from 'node:url';

import * as env from '@/utils/env';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const root = path.resolve(
  dirname,
  ...(env.isTest ? ['..', '..', '..'] : ['..']),
);

const cwd = process.cwd();

function resolveRoot(...paths: string[]) {
  return path.resolve(root, ...paths);
}

function resolveCwd(...paths: string[]) {
  return path.resolve(cwd, ...paths);
}

const cwdPackageJson = resolveCwd('package.json');

export { cwdPackageJson, resolveCwd, resolveRoot };
