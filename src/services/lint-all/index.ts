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
  const featureKeys = Object.keys(normalizedConfigsConfig?.features ?? {});
  const hasLints = HAS_LINTS_FEATURE_KEYS.some((key) =>
    featureKeys.includes(key),
  );

  if (hasLints) {
    logger.info('add lint-all to npm scripts');

    const packageName = 'npm-run-all';
    const version = await fetchPackageLatestVersion(packageName);
    const data = {
      scripts: {
        'lint-all': 'npm-run-all --parallel lint:*',
        'lint-all:fix': 'npm-run-all lint:*:fix',
      },
      devDependencies: {
        [packageName]: `^${version}`,
      },
    };
    mergeCwdPackageJsonSync({ data });
  }
}
