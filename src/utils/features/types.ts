import type { NormalizedConfigsConfig } from '@/types/configs-config';
import type { FeatureKey, HasIgnorePatternsFeatureKey } from '@/types/features';

export interface ReadFeatureIgnoreFileSyncOptions {
  featureKey: FeatureKey;
  fileName?: string;
}

export interface GetCustomIgnoreOptions {
  featureKey: HasIgnorePatternsFeatureKey;
  normalizedConfigsConfig: NormalizedConfigsConfig;
  ignorePresets: string[];
}
