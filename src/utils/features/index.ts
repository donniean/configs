import { uniqWith } from 'lodash';

import { FEATURE_OPTIONS } from '@/constants/features';
import type { FeatureKey } from '@/types/features';
import * as files from '@/utils/files';
import * as paths from '@/utils/paths';

import type {
  GetCustomIgnoreOptions,
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
    filePath: paths.resolveAssets(featureKey, fileName),
  });
}

export function getIgnoreWithCustom({
  featureKey,
  normalizedConfigsConfig,
  ignorePresets,
}: GetCustomIgnoreOptions) {
  const feature = normalizedConfigsConfig.features?.[featureKey];
  const ignorePatterns = feature?.ignorePatterns;

  let finalIgnore = ignorePresets;

  if (Array.isArray(ignorePatterns) && ignorePatterns.length > 0) {
    const isDisableIgnorePresets = feature?.isDisableIgnorePresets;
    finalIgnore = isDisableIgnorePresets
      ? ignorePatterns
      : [...ignorePresets, ...ignorePatterns];
  }

  return uniqWith(finalIgnore, (a, b) => a.trim() !== '' && a === b);
}
