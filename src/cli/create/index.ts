import { CONFIGS_CONFIG_FILE_NAME } from '@/constants/configs-config';
import { readConfigsConfigSync } from '@/utils/configs-config';
import logger from '@/utils/logger';

import handler from './handler';

export default async function create() {
  const configsConfig = readConfigsConfigSync();

  if (!configsConfig) {
    logger.messageOnly(`config not found, please run: `, {
      level: 'warn',
      isLfAfter: true,
      isColorizeMessage: true,
    });
    logger.messageOnly('configs init', {
      isLfAfter: true,
      isInverseMessage: true,
    });
    logger.messageOnly(
      `or create a ${logger.command(CONFIGS_CONFIG_FILE_NAME)} file`,
      { level: 'warn', isColorizeMessage: true }
    );
    return;
  }

  await handler({ configsConfig });
}
