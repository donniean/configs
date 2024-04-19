import { createRequire } from 'node:module';
import path from 'node:path';
import * as process from 'node:process';
import { fileURLToPath } from 'node:url';

import type { FeatureKey } from '@/types/features';
import * as env from '@/utils/env';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const root = env.isProduction
  ? path.resolve(dirname, '..')
  : path.resolve(dirname, '..', '..', '..');

const cwd = process.cwd();

function resolveRoot(...paths: string[]) {
  return path.resolve(root, ...paths);
}

function resolveAssets(featureKey: FeatureKey, ...paths: string[]) {
  return resolveRoot('assets', featureKey, ...paths);
}

function resolveCwd(...paths: string[]) {
  return path.resolve(cwd, ...paths);
}

const cwdPackageJson = resolveCwd('package.json');

function requireRoot<T>(relativePath: string) {
  return createRequire(import.meta.url)(resolveRoot(relativePath)) as T;
}

export {
  cwd,
  cwdPackageJson,
  requireRoot,
  resolveAssets,
  resolveCwd,
  resolveRoot,
  root,
};
