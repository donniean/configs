import { chain, merge } from 'lodash-es';

import type { FeaturePackageJson } from '@/types/feature-configs';
import type { HandleFeatureOptions } from '@/types/handlers';
import { deepTrim } from '@/utils/common';
import {
  fetchPackageLatestVersion,
  mergeCwdPackageJsonSync,
} from '@/utils/package-json';

async function fetchDevDependencyVersions(
  devDependencies: FeaturePackageJson['devDependencies'],
) {
  if (!devDependencies) {
    return {};
  }

  const promises = Object.entries(devDependencies).map(
    async ([packageName, version]) => {
      if (version) {
        return { packageName, version };
      }
      const latestVersion = await fetchPackageLatestVersion(packageName);
      return { packageName, version: `^${latestVersion}` };
    },
  );
  const packageVersions = await Promise.all(promises);
  return chain(packageVersions)
    .keyBy('packageName')
    .mapValues('version')
    .value();
}

type HandlePackageJsonOptions = Pick<
  Required<HandleFeatureOptions>,
  'featureKey' | 'normalizedConfigsConfig' | 'getPackageJson'
>;

export async function handlePackageJson({
  featureKey,
  normalizedConfigsConfig,
  getPackageJson,
}: HandlePackageJsonOptions) {
  const { devDependencies, ...rest } = getPackageJson({
    featureKey,
    normalizedConfigsConfig,
  });
  const devDependenciesWithVersion =
    await fetchDevDependencyVersions(devDependencies);
  const data = merge({}, rest, {
    devDependencies: devDependenciesWithVersion,
  });
  const final = deepTrim(data);
  // @ts-expect-error no error
  mergeCwdPackageJsonSync({ data: final });
}
