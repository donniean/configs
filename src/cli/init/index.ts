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
import {
  fetchPackageLatestVersion,
  mergeCwdPackageJsonSync,
  readRootPackageJsonSync,
  sortCwdPackageJsonSync,
} from '@/utils/package-json';

import prompt from './prompt';
import type { InitAnswers } from './types';

function answersToConfigsConfig({
  currentConfigsConfig,
  answers,
}: {
  answers: InitAnswers;
  currentConfigsConfig: ConfigsConfig | undefined;
}) {
  const { featureKeys } = answers;
  let features: ConfigsConfig['features'] = {};

  const pickedCurrentConfigsConfig = pick(
    currentConfigsConfig,
    featureKeys.map((featureKey) => `features.${featureKey}`),
  );

  for (const featureKey of featureKeys) {
    features = {
      ...features,
      [featureKey]: DEFAULT_CONFIGS_CONFIG.features[featureKey],
    };
  }

  const configsConfig = merge(null, pickedCurrentConfigsConfig, { features });

  return sortConfigsConfig(cleanDeep(configsConfig));
}

async function addDependencies() {
  const packageName = readRootPackageJsonSync().name;

  if (!packageName) {
    return;
  }

  const version = await fetchPackageLatestVersion(packageName);

  mergeCwdPackageJsonSync({
    data: { devDependencies: { [packageName]: `^${version}` } },
  });

  sortCwdPackageJsonSync();
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

  await addDependencies();

  logger.messageOnly('Please run: ', { isLfBefore: true, isLfAfter: true });
  logger.messageOnly('npm install', { isInverseMessage: true });

  logger.messageOnly(
    `You can modify the ${logger.command(
      CONFIGS_CONFIG_FILE_NAME,
    )} file, and run: `,
    { isLfBefore: true },
  );
  logger.messageOnly('npm install && configs create', {
    isLfBefore: true,
    isInverseMessage: true,
  });
}

export default init;
