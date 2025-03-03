import type { NormalizedConfigsConfig } from '@/types/configs-config';
import type {
  GetConfig,
  GetIgnore,
  GetPackageJson,
  OnAfterAllSuccess,
} from '@/types/feature-configs';
import type { FeatureKey } from '@/types/features';

export interface HandleExtrasOptions {
  featureKey: FeatureKey;
  normalizedConfigsConfig: NormalizedConfigsConfig;
  getPackageJson?: GetPackageJson;
  getConfig?: GetConfig;
  getIgnore?: GetIgnore;
}

type HandleExtras = (options: HandleExtrasOptions) => void;

export interface HandleFeatureOptions {
  featureKey: FeatureKey;
  normalizedConfigsConfig: NormalizedConfigsConfig;
  getPackageJson?: GetPackageJson;
  getConfig?: GetConfig;
  getIgnore?: GetIgnore;
  handleExtras?: HandleExtras;
  onAfterAllSuccess?: OnAfterAllSuccess;
}
