import path from 'node:path';

import type { FeatureKey } from '@/types/features';

// eslint-disable-next-line unicorn/prefer-module
export const root = path.resolve(__dirname, '..', '..', '..');

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
