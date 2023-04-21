import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { FeatureKey } from '@/types/features';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export const root = path.resolve(dirname, '..', '..', '..');

export const cwd = process.cwd();

export function resolveRoot(...paths: string[]) {
  return path.resolve(root, ...paths);
}

export function resolveAssets(featureKey: FeatureKey, ...paths: string[]) {
  return resolveRoot('assets', featureKey, ...paths);
}

export function resolveCwd(...paths: string[]) {
  return path.resolve(cwd, ...paths);
}

export const cwdPackageJson = resolveCwd('package.json');
