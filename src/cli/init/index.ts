import cleanDeep from 'clean-deep';
import { merge, pick } from 'lodash-es';

import {
  CONFIGS_CONFIG_FILE_NAME,
  DEFAULT_CONFIGS_CONFIG,
} from '@/constants/configs-config';
import type { ConfigsConfig } from '@/types/configs-config';
import {
  outputConfigsConfig,
  readConfigsConfig,
  sortConfigsConfig,
} from '@/utils/configs-config';
import logger from '@/utils/logger';

import prompt from './prompt';
import type { InitAnswers } from './types';

/* function arrayToBooleanValueObject<T extends string>(keys: T[]) {
  const result: { [key in T]?: boolean } = {};
  keys.forEach(key => {
    result[key] = true;
  });
  return result;
} */

function answersToConfigsConfig({
  currentConfigsConfig,
  answers,
}: {
  currentConfigsConfig: ConfigsConfig | undefined;
  answers: InitAnswers;
}) {
  const { featureKeys } = answers;
  let features: ConfigsConfig['features'] = {};

  const pickedCurrentConfigsConfig = pick(
    currentConfigsConfig,
    featureKeys.map((featureKey) => `features.${featureKey}`),
  );

  featureKeys.forEach((featureKey) => {
    features = {
      ...features,
      [featureKey]: DEFAULT_CONFIGS_CONFIG.features[featureKey],
    };
  });

  const configsConfig = merge(null, pickedCurrentConfigsConfig, { features });

  return sortConfigsConfig(cleanDeep(configsConfig));
}

async function init() {
  const currentConfigsConfig = await readConfigsConfig();
  const options = currentConfigsConfig ? { currentConfigsConfig } : undefined;
  const answers = await prompt(options);
  const configsConfig = answersToConfigsConfig({
    currentConfigsConfig,
    answers,
  });
  await outputConfigsConfig({ data: configsConfig });

  logger.messageOnly(
    `You can modify the ${logger.command(
      CONFIGS_CONFIG_FILE_NAME,
    )} file, and run: `,
    { isLfBefore: true },
  );
  logger.messageOnly('configs create', {
    isLfBefore: true,
    isInverseMessage: true,
  });
}

export default init;
