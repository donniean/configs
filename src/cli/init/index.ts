import { CONFIGS_CONFIG_FILE_NAME } from '@/constants/configs-config';
import {
  answersToConfigsConfig,
  outputConfigsConfigSync,
  readConfigsConfigSync,
} from '@/utils/configs-config';
import logger from '@/utils/logger';

import prompt from './prompt';

export default async function init() {
  const currentConfigsConfig = readConfigsConfigSync();
  const options = currentConfigsConfig ? { currentConfigsConfig } : undefined;
  const answers = await prompt(options);
  const configsConfig = answersToConfigsConfig(answers);
  outputConfigsConfigSync({ data: configsConfig });

  logger.messageOnly(
    `You can modify the ${logger.command(
      CONFIGS_CONFIG_FILE_NAME
    )} file, and run: `,
    { isLfBefore: true }
  );
  logger.messageOnly('configs create', {
    isLfBefore: true,
    isInverseMessage: true,
  });
}
