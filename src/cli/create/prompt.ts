import * as process from 'node:process';

import prompts from 'prompts';

import type { ConfigsConfig } from '@/types/configs-config';

import { getQuestions } from './questions';

export interface PromptOptions {
  currentConfigsConfig?: ConfigsConfig;
}

export default async function prompt(options?: PromptOptions) {
  const questions = getQuestions(options);
  return prompts(questions, {
    // eslint-disable-next-line unicorn/no-process-exit
    onCancel: () => process.exit(0),
  });
}
