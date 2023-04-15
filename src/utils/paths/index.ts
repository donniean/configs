import path from 'node:path';

import type { FeatureKey } from '@/types/features';

// eslint-disable-next-line unicorn/prefer-module
export const root = path.resolve(__dirname, '..', '..', '..');

export const cwd = process.cwd();

export function resolveRoot(...paths: string[]) {
  return path.resolve(root, ...paths);
}

export function resolveFeatureAssets(
  featureKey: FeatureKey,
  ...paths: string[]
) {
  return resolveRoot('src', 'features', featureKey, 'assets', ...paths);
}

export function resolveCwd(...paths: string[]) {
  return path.resolve(cwd, ...paths);
}

export const cwdPackageJson = resolveCwd('package.json');
