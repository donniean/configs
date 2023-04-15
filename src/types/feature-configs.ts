import type { PackageJson } from 'type-fest';

import type { JsonObjectOrArray } from './base';
import type { ValidConfigsConfig } from './configs-config';
import type { FeatureKey } from './features';

export type FeaturePackageJson = Pick<
  PackageJson,
  'scripts' | 'devDependencies'
>;

export type FeatureConfigData = JsonObjectOrArray | string;

export type FeatureConfig<T extends FeatureConfigData> =
  | {
      outputFileName: string;
      format: 'json' | 'cjs' | 'esm';
      data: T;
    }
  | {
      outputFileName: string;
      format: 'text';
      data: string;
    };

export interface FeatureIgnore {
  outputFileName: string;
  data: string[];
}

export interface GetPackageJsonOptions {
  featureKey: FeatureKey;
  validConfigsConfig: ValidConfigsConfig;
}

export type GetConfigOptions = GetPackageJsonOptions;

export type GetIgnoreOptions = GetPackageJsonOptions;

export type OnAfterAllSuccessOptions = GetPackageJsonOptions;

export type GetPackageJson = (
  options: GetPackageJsonOptions
) => FeaturePackageJson;

export type GetConfig = (
  options: GetConfigOptions
) => FeatureConfig<FeatureConfigData>;

export type GetIgnore = (options: GetIgnoreOptions) => FeatureIgnore;

export type OnAfterAllSuccess = (options: OnAfterAllSuccessOptions) => void;
