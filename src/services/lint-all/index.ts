import { HAS_LINTS_FEATURE_KEYS } from '@/constants/features';
import type { NormalizedConfigsConfig } from '@/types/configs-config';
import logger from '@/utils/logger';
import {
  fetchPackageLatestVersion,
  mergeCwdPackageJsonSync,
} from '@/utils/package-json';

export async function addLintAllToNpmScripts({
  normalizedConfigsConfig,
}: {
  normalizedConfigsConfig: NormalizedConfigsConfig;
}) {
  const featureKeys = Object.keys(normalizedConfigsConfig.features ?? {});
  const hasLints = HAS_LINTS_FEATURE_KEYS.some((key) =>
    featureKeys.includes(key),
  );

  if (hasLints) {
    logger.info('add lint-all to npm scripts');

    const packageName = 'concurrently';
    const version = await fetchPackageLatestVersion(packageName);
    const data = {
      scripts: {
        'lint-all':
          'concurrently --group --timings --prefix-colors=auto "npm:lint:*(!:fix)"',
        'lint-all:fix':
          'concurrently --max-processes=1 --group --timings --prefix-colors=auto "npm:lint:*:fix"',
      },
      devDependencies: {
        [packageName]: `^${version}`,
      },
    };
    mergeCwdPackageJsonSync({ data });
  }
}
