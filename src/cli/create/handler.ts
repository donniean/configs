import { FEATURE_OPTIONS } from '@/constants/features';
import features from '@/features';
import { addLintAllToNpmScripts } from '@/services/lint-all';
import type { ConfigsConfig } from '@/types/configs-config';
import type { OnAfterAllSuccess } from '@/types/feature-configs';
import { normalizeConfigsConfig } from '@/utils/configs-config';
import { handleFeature } from '@/utils/handlers';
import logger from '@/utils/logger';
import { sortCwdPackageJsonSync } from '@/utils/package-json';

export default async function handler({
  configsConfig,
}: {
  configsConfig: ConfigsConfig;
}) {
  const normalizedConfigsConfig = normalizeConfigsConfig(configsConfig);
  const { features: normalizedFeatures } = normalizedConfigsConfig;

  for (const { key } of FEATURE_OPTIONS) {
    if (normalizedFeatures?.[key]) {
      const isSuccess = await handleFeature({
        featureKey: key,
        normalizedConfigsConfig,
        ...features[key],
      });
      if (!isSuccess) {
        break;
      }
    }
  }

  await addLintAllToNpmScripts({ normalizedConfigsConfig });

  logger.lf();

  sortCwdPackageJsonSync();

  logger.lf(2);
  logger.messageOnly('Everything is OK, Thanks!', {
    isLfAfter: true,
    isColorizeMessage: true,
  });
  logger.messageOnly('Please run: ', { isLfAfter: true });
  logger.messageOnly('npm install', { isInverseMessage: true });

  for (const { key } of FEATURE_OPTIONS) {
    if (normalizedFeatures?.[key]) {
      // @ts-expect-error: has onAfterAllSuccess
      const onAfterAllSuccess = features[key].onAfterAllSuccess as
        | OnAfterAllSuccess
        | undefined;
      if (typeof onAfterAllSuccess === 'function') {
        onAfterAllSuccess({ featureKey: key, normalizedConfigsConfig });
      }
    }
  }
}
