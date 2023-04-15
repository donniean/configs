import type { ValidConfigsConfig } from '@/types/configs-config';
import type { FeatureKey } from '@/types/features';

export interface ReadFeatureIgnoreFileSyncOptions {
  featureKey: FeatureKey;
  fileName?: string;
}

export interface GetFeatureGlobExtensionsOptions {
  validConfigsConfig: ValidConfigsConfig;
  featureKey: Extract<FeatureKey, 'prettier' | 'tsc' | 'eslint' | 'stylelint'>;
}
