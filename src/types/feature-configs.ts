import type { PackageJson } from 'type-fest';

import type { JsonObjectOrArray } from './base';
import type { NormalizedConfigsConfig } from './configs-config';
import type { FeatureKey } from './features';

export type FeaturePackageJson = Pick<
  PackageJson,
  'scripts' | 'devDependencies'
>;

export type FeatureConfigData = JsonObjectOrArray | string;

export type FeatureConfig<T extends FeatureConfigData> =
  | {
      outputFileName: string;
      format: 'esm' | 'cjs';
      data: T;
      leadingComments?: string;
    }
  | {
      outputFileName: string;
      format: 'json';
      data: T;
      leadingComments?: undefined;
    }
  | {
      outputFileName: string;
      format: 'text';
      data: string;
      leadingComments?: undefined;
    };

export interface FeatureIgnore {
  outputFileName: string;
  data: string[];
}

export interface GetPackageJsonOptions {
  featureKey: FeatureKey;
  normalizedConfigsConfig: NormalizedConfigsConfig;
}

export type GetConfigOptions = GetPackageJsonOptions;

export type GetIgnoreOptions = GetPackageJsonOptions;

export type OnAfterAllSuccessOptions = GetPackageJsonOptions;

export type GetPackageJson = (
  options: GetPackageJsonOptions,
) => FeaturePackageJson;

export type GetConfig = (
  options: GetConfigOptions,
) => FeatureConfig<FeatureConfigData>;

export type GetIgnore = (options: GetIgnoreOptions) => FeatureIgnore;

export type OnAfterAllSuccess = (options: OnAfterAllSuccessOptions) => void;
