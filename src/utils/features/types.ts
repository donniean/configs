import type { ValidConfigsConfig } from '@/types/configs-config';
import type { FeatureKey } from '@/types/features';

export interface ReadFeatureIgnoreFileSyncOptions {
  featureKey: FeatureKey;
  fileName?: string;
}

export interface GetCustomIgnoreOptions {
  featureKey: Extract<FeatureKey, 'prettier' | 'cspell'>;
  validConfigsConfig: ValidConfigsConfig;
  ignore: string[];
}

export interface GetFeatureGlobExtensionsOptions {
  featureKey: Extract<FeatureKey, 'prettier' | 'tsc' | 'eslint' | 'stylelint'>;
  validConfigsConfig: ValidConfigsConfig;
}
