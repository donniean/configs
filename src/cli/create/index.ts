import {
  answersToConfigsConfig,
  outputConfigsConfigSync,
  readConfigsConfigSync,
} from '@/utils/configs-config';

import handler from './handler';
import type { PromptOptions } from './prompt';
import prompt from './prompt';

async function handlePrompt(options?: PromptOptions) {
  const answers = await prompt(options);
  const configsConfig = answersToConfigsConfig(answers);
  outputConfigsConfigSync({ data: configsConfig });
  await handler({ configsConfig });
}

interface Options {
  prompt?: boolean;
}

export default async function create({ prompt: isPrompt }: Options) {
  const currentConfigsConfig = readConfigsConfigSync();

  if (isPrompt) {
    await handlePrompt({ currentConfigsConfig });
    return;
  }

  if (!currentConfigsConfig) {
    await handlePrompt();
    return;
  }

  await handler({ configsConfig: currentConfigsConfig });
}
