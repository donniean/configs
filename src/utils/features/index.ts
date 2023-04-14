import { FEATURE_OPTIONS } from '@/constants/features';
import type { FeatureKey } from '@/types/features';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

import { getGlobExtensions } from '../misc';
import type {
  GetFeatureGlobExtensionsOptions,
  ReadFeatureIgnoreFileSyncOptions,
} from './types';

export function getFeatureDisplayNameByKey(featureKey: FeatureKey) {
  return (
    FEATURE_OPTIONS.find(({ key }) => featureKey === key)?.displayName ??
    featureKey
  );
}

export function readFeatureIgnoreFileSync({
  featureKey,
  fileName = `${featureKey}.ignore`,
}: ReadFeatureIgnoreFileSyncOptions) {
  return files.readFileSync({
    filePath: paths.resolveFeatureAssets(featureKey, fileName),
  });
}

export function getFeatureGlobExtensions({
  validConfigsConfig,
  featureKey,
}: GetFeatureGlobExtensionsOptions) {
  const feature = validConfigsConfig.features?.[featureKey];

  if (feature && typeof feature === 'object' && 'extensions' in feature) {
    const extensions = feature.extensions ?? [];
    return getGlobExtensions(extensions);
  }

  return '';
}

export { type GetFeatureGlobExtensionsOptions } from './types';
