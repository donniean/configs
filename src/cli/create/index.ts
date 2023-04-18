import { CONFIGS_CONFIG_FILE_NAME } from '@/constants/configs-config';
import { readConfigsConfigSync } from '@/utils/configs-config';
import logger from '@/utils/logger';

import handler from './handler';

export default async function create() {
  const configsConfig = readConfigsConfigSync();

  if (!configsConfig) {
    logger.error(
      `config not found, please run configs init or manually create ${CONFIGS_CONFIG_FILE_NAME}`
    );
    return;
  }

  await handler({ configsConfig });
}
