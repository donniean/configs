import cleanDeep from 'clean-deep';

import {
  CONFIGS_CONFIG_FILE_NAME,
  DEFAULT_CONFIGS_CONFIG,
} from '@/constants/configs-config';
import type { ConfigsConfig } from '@/types/configs-config';
import {
  outputConfigsConfigSync,
  readConfigsConfigSync,
} from '@/utils/configs-config';
import logger from '@/utils/logger';

import prompt from './prompt';
import type { InitAnswers } from './types';

function arrayToBooleanValueObject<T extends string>(keys: T[]) {
  const result: { [key in T]?: boolean } = {};
  keys.forEach(key => {
    result[key] = true;
  });
  return result;
}

function answersToConfigsConfig(answers: InitAnswers) {
  const { featureKeys, eslintPlugins } = answers;
  let features: ConfigsConfig['features'] = {};

  featureKeys.forEach(featureKey => {
    if (featureKey === 'eslint' && eslintPlugins) {
      const plugins = arrayToBooleanValueObject(eslintPlugins);
      features = {
        ...features,
        [featureKey]: {
          ...DEFAULT_CONFIGS_CONFIG.features[featureKey],
          plugins,
        },
      };
      return;
    }

    features = {
      ...features,
      [featureKey]: DEFAULT_CONFIGS_CONFIG.features[featureKey],
    };
  });

  const configsConfig = { features };

  return cleanDeep(configsConfig);
}

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
