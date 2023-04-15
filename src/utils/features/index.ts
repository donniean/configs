import { uniq } from 'lodash';

import { DEFAULT_CUSTOM_IGNORE_TYPE } from '@/constants/configs-config';
import { FEATURE_OPTIONS } from '@/constants/features';
import type { FeatureKey } from '@/types/features';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

import { getGlobExtensions } from '../misc';
import type {
  GetCustomIgnoreOptions,
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

export function getIgnoreWithCustom({
  featureKey,
  normalizedConfigsConfig,
  ignore,
}: GetCustomIgnoreOptions) {
  const feature = normalizedConfigsConfig.features?.[featureKey];
  const customIgnore = feature?.customIgnore;

  let finalIgnore = ignore;

  if (Array.isArray(customIgnore) && customIgnore.length > 0) {
    const customIgnoreType =
      feature?.customIgnoreType ?? DEFAULT_CUSTOM_IGNORE_TYPE;
    if (customIgnoreType === 'append') {
      finalIgnore = [...ignore, ...customIgnore];
    } else if (customIgnoreType === 'override') {
      finalIgnore = customIgnore;
    }
  }

  return uniq(finalIgnore);
}

export function getFeatureGlobExtensions({
  featureKey,
  normalizedConfigsConfig,
}: GetFeatureGlobExtensionsOptions) {
  const feature = normalizedConfigsConfig.features?.[featureKey];

  if (feature && typeof feature === 'object' && 'extensions' in feature) {
    const extensions = feature.extensions ?? [];
    return getGlobExtensions(extensions);
  }

  return '';
}

export { type GetFeatureGlobExtensionsOptions } from './types';
