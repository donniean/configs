import { FEATURE_OPTIONS } from '@/constants/features';
import features from '@/features';
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

  // eslint-disable-next-line no-restricted-syntax
  for (const { key } of FEATURE_OPTIONS) {
    if (normalizedFeatures?.[key]) {
      // eslint-disable-next-line no-await-in-loop
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

  sortCwdPackageJsonSync();

  logger.lf(2);
  logger.messageOnly('Everything is OK, Thanks!', { isColorizeMessage: true });
  logger.messageOnly('Please run: ', { isLfBefore: true });
  logger.messageOnly('npm install', {
    isLfBefore: true,
    isInverseMessage: true,
  });

  FEATURE_OPTIONS.forEach(({ key }) => {
    if (normalizedFeatures?.[key]) {
      const onAfterAllSuccess = // @ts-ignore
        features[key]?.onAfterAllSuccess as OnAfterAllSuccess | undefined;
      if (typeof onAfterAllSuccess === 'function') {
        onAfterAllSuccess({ featureKey: key, normalizedConfigsConfig });
      }
    }
  });
}
