import type {
  HandleExtrasOptions,
  HandleFeatureOptions,
} from '@/types/handlers';
import { getFeatureDisplayNameByKey } from '@/utils/features';
import logger from '@/utils/logger';
import { checkCwdPackageJsonSync } from '@/utils/package-json';

import { handleConfig } from './config';
import { handleIgnore } from './ignore';
import { handlePackageJson } from './package-json';

export async function handleFeature({
  featureKey,
  normalizedConfigsConfig,
  getPackageJson,
  getConfig,
  getIgnore,
  handleExtras,
}: HandleFeatureOptions) {
  const featureDisplayName = getFeatureDisplayNameByKey(featureKey);
  logger.info(featureDisplayName, { isInverseMessage: true });

  if (getPackageJson) {
    logger.info('handle package.json', { isBoldMessage: true });
    const isSuccess = checkCwdPackageJsonSync();
    if (!isSuccess) {
      return false;
    }
    await handlePackageJson({
      featureKey,
      normalizedConfigsConfig,
      getPackageJson,
    });
  }

  if (getConfig) {
    logger.info('handle config', { isBoldMessage: true });
    handleConfig({ featureKey, normalizedConfigsConfig, getConfig });
  }

  if (getIgnore) {
    logger.info('handle ignore', { isBoldMessage: true });
    handleIgnore({ featureKey, normalizedConfigsConfig, getIgnore });
  }

  if (handleExtras) {
    logger.info('handle extras', { isBoldMessage: true });
    const options: HandleExtrasOptions = {
      featureKey,
      normalizedConfigsConfig,
    };
    if (getPackageJson) {
      options.getPackageJson = getPackageJson;
    }
    if (getConfig) {
      options.getConfig = getConfig;
    }
    if (getIgnore) {
      options.getIgnore = getIgnore;
    }
    handleExtras(options);
  }

  logger.lf();

  return true;
}
