import {
  answersToConfigsConfig,
  outputConfigsConfigSync,
  readConfigsConfigSync,
} from '@/utils/configs-config';

import prompt from './prompt';

export default async function init() {
  const currentConfigsConfig = readConfigsConfigSync();
  const options = currentConfigsConfig ? { currentConfigsConfig } : undefined;
  const answers = await prompt(options);
  const configsConfig = answersToConfigsConfig(answers);
  outputConfigsConfigSync({ data: configsConfig });
}
